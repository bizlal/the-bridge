/**
 * Audio Generation Script for "The Bridge"
 * Generates audio narration files using ElevenLabs API
 *
 * Usage:
 *   npm run generate-audio              - Generate all scenes
 *   npm run generate-audio -- --force   - Regenerate all (overwrite existing)
 *   npm run generate-audio -- --scene=1 - Generate specific scene
 */

import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { scenes, SceneData } from '../lib/scenes';
import { ELEVENLABS_CONFIG, VOICE_REGISTRY, DEFAULT_VOICE, VoiceKey } from '../lib/constants';
import { Language, LanguageFull } from '../lib/types';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const { voiceId, modelId, rateLimit, voiceSettings } = ELEVENLABS_CONFIG;

/**
 * Eleven v3 uses inline audio tags for emotion and expression
 * No preprocessing needed - emotion tags are embedded directly in the audioScript
 *
 * v3 features:
 * - Inline emotion tags: [sighs], [whispers], [laughs], [excited], etc.
 * - Punctuation for pacing: ellipses (...) for pauses, capitalization for emphasis
 * - No SSML support - v3 doesn't use break tags
 *
 * The audioScript should already contain properly formatted emotion tags and punctuation.
 */

interface GenerationOptions {
  sceneId?: number;
  language?: Language;
  force?: boolean;
}

const LANGUAGES: LanguageFull[] = ['urdu', 'english', 'punjabi', 'danish'];

const LANGUAGE_CODES: Language[] = ['ur', 'en', 'pa', 'da'];

const LANGUAGE_LABELS: Record<Language, string> = {
  'ur': 'Urdu',
  'en': 'English',
  'pa': 'Punjabi',
  'da': 'Danish'
};

/**
 * Get the voice configuration for a scene
 */
function getVoiceForScene(scene: SceneData): { key: VoiceKey; id: string; name: string; character: string } {
  const voiceKey = scene.voiceId || DEFAULT_VOICE;
  const voice = VOICE_REGISTRY[voiceKey];
  return { key: voiceKey, id: voice.id, name: voice.name, character: voice.character };
}

/**
 * Generate audio for a single scene in a specific language
 */
async function generateSceneAudio(
  scene: SceneData,
  language: Language,
  force = false
): Promise<void> {
  const langKey = language === 'ur' ? 'urdu' :
                  language === 'en' ? 'english' :
                  language === 'pa' ? 'punjabi' : 'danish';

  const voice = getVoiceForScene(scene);

  const outputPath = path.join(
    process.cwd(),
    'public',
    'audio',
    `scene-${scene.id}-${voice.key}-${language}.mp3`
  );

  // Skip if exists (unless force)
  if (fs.existsSync(outputPath) && !force) {
    console.log(`✓ Scene ${scene.id} (${LANGUAGE_LABELS[language]}) already exists`);
    return;
  }

  try {
    const audioScript = scene.audioScripts[langKey];
    console.log(`🎙️  Generating Scene ${scene.id} - ${LANGUAGE_LABELS[language]}: ${scene.title}`);
    console.log(`   Voice: ${voice.id} (${voice.name} - ${voice.character})`);
    console.log(`   Script length: ${audioScript.split(' ').length} words`);

    // v3 uses inline emotion tags - no preprocessing needed
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice.id}`,
      {
        text: audioScript,
        model_id: modelId,
        voice_settings: voiceSettings
      },
      {
        headers: {
          'Accept': 'audio/mpeg',
          'xi-api-key': ELEVENLABS_API_KEY!,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer',
        timeout: 60000 // 60 second timeout for long scripts
      }
    );

    // Write file
    fs.writeFileSync(outputPath, response.data);

    const fileSizeKB = (response.data.byteLength / 1024).toFixed(2);
    console.log(`✅ Scene ${scene.id} (${LANGUAGE_LABELS[language]}) generated (${fileSizeKB} KB)`);
    console.log(`   Saved to: ${outputPath}\n`);

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        console.error(`❌ Rate limit exceeded for Scene ${scene.id} (${LANGUAGE_LABELS[language]})`);
        console.error(`   Please wait and try again later.`);
        throw new Error('ElevenLabs rate limit exceeded');
      } else if (error.response?.status === 401) {
        console.error(`❌ Authentication failed. Please check your ELEVENLABS_API_KEY in .env.local`);
        throw new Error('Invalid API key');
      } else {
        console.error(`❌ Failed to generate Scene ${scene.id} (${LANGUAGE_LABELS[language]}):`, error.message);
        if (error.response?.data) {
          console.error(`   API Error:`, Buffer.from(error.response.data).toString());
        }
      }
    } else {
      console.error(`❌ Unexpected error for Scene ${scene.id} (${LANGUAGE_LABELS[language]}):`, error);
    }
    throw error;
  }
}

/**
 * Add delay between API calls to respect rate limits
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main execution function
 */
async function main() {
  console.log('\n🎬 The Bridge - Multilingual Audio Generation Script\n');
  console.log('===================================================\n');

  // Parse command line arguments
  const args = process.argv.slice(2);
  const sceneArg = args.find(arg => arg.startsWith('--scene='))?.split('=')[1];
  const langArg = args.find(arg => arg.startsWith('--language='))?.split('=')[1] as Language | undefined;
  const force = args.includes('--force');

  // Validate API key
  if (!ELEVENLABS_API_KEY) {
    console.error('❌ ERROR: ELEVENLABS_API_KEY not found in environment');
    console.error('   Please create .env.local with your ElevenLabs API key\n');
    process.exit(1);
  }

  // Ensure audio directory exists
  const audioDir = path.join(process.cwd(), 'public', 'audio');
  if (!fs.existsSync(audioDir)) {
    console.log('📁 Creating audio directory...');
    fs.mkdirSync(audioDir, { recursive: true });
  }

  // Determine which languages to generate
  const languagesToGenerate: Language[] = langArg ? [langArg] : ['ur', 'en', 'pa', 'da'];

  // Validate language argument
  if (langArg && !languagesToGenerate.includes(langArg)) {
    console.error(`❌ Invalid language: ${langArg}`);
    console.error(`   Valid languages: ur (Urdu), en (English), pa (Punjabi), da (Danish)\n`);
    process.exit(1);
  }

  // Log configuration
  console.log(`📋 Configuration:`);
  console.log(`   Default Voice: ${voiceId} (Liam - Adult narrator)`);
  console.log(`   Available Voices: ${Object.keys(VOICE_REGISTRY).length} (liam, mom, sisters)`);
  console.log(`   Model: ${modelId}`);
  console.log(`   Languages: ${languagesToGenerate.map(l => LANGUAGE_LABELS[l]).join(', ')}`);
  console.log(`   Force regenerate: ${force ? 'Yes' : 'No'}`);
  console.log(`   Rate limit: ${rateLimit}ms between requests\n`);

  try {
    if (sceneArg) {
      // Generate single scene for specified language(s)
      const sceneId = parseFloat(sceneArg);
      const scene = scenes.find(s => s.id === sceneId);

      if (!scene) {
        console.error(`❌ Scene ${sceneId} not found`);
        console.error(`   Valid scene IDs: 0-${scenes.length - 1}\n`);
        process.exit(1);
      }

      for (let i = 0; i < languagesToGenerate.length; i++) {
        const language = languagesToGenerate[i];
        await generateSceneAudio(scene, language, force);

        // Rate limiting between language requests
        if (i < languagesToGenerate.length - 1) {
          console.log(`⏳ Waiting ${rateLimit}ms before next language...\n`);
          await delay(rateLimit);
        }
      }

    } else {
      // Generate all scenes for all languages
      const totalGenerations = scenes.length * languagesToGenerate.length;
      console.log(`🎯 Generating audio for ${scenes.length} scenes × ${languagesToGenerate.length} languages = ${totalGenerations} files\n`);

      let successCount = 0;
      let skipCount = 0;
      let errorCount = 0;
      let requestCount = 0;

      for (let i = 0; i < scenes.length; i++) {
        const scene = scenes[i];

        for (let j = 0; j < languagesToGenerate.length; j++) {
          const language = languagesToGenerate[j];

          try {
            // Check if file exists before attempting generation
            const voice = getVoiceForScene(scene);
            const outputPath = path.join(process.cwd(), 'public', 'audio', `scene-${scene.id}-${voice.key}-${language}.mp3`);
            const exists = fs.existsSync(outputPath);

            await generateSceneAudio(scene, language, force);

            if (exists && !force) {
              skipCount++;
            } else {
              successCount++;
              requestCount++;
            }

            // Rate limiting: wait between requests
            const isLastRequest = i === scenes.length - 1 && j === languagesToGenerate.length - 1;
            if (!isLastRequest && (!exists || force)) {
              console.log(`⏳ Waiting ${rateLimit}ms before next request... (${requestCount}/${totalGenerations})\n`);
              await delay(rateLimit);
            }

          } catch (error) {
            errorCount++;
            console.error(`\n⚠️  Continuing with next scene...\n`);
          }
        }
      }

      // Summary
      console.log('\n========================================');
      console.log('📊 Generation Summary:\n');
      console.log(`   ✅ Generated: ${successCount}`);
      console.log(`   ⏭️  Skipped (already exist): ${skipCount}`);
      console.log(`   ❌ Errors: ${errorCount}`);
      console.log(`   📁 Total files in /public/audio: ${fs.readdirSync(audioDir).length}`);
      console.log(`   🌍 Languages: ${languagesToGenerate.map(l => LANGUAGE_LABELS[l]).join(', ')}`);

      if (errorCount > 0) {
        console.log(`\n⚠️  Some files failed to generate. Run with --force to retry.`);
        process.exit(1);
      } else {
        console.log(`\n🎉 All audio files successfully generated!`);
        console.log(`\n💡 Next steps:`);
        console.log(`   1. Test audio playback: npm run dev`);
        console.log(`   2. Implement language selector in the UI`);
        console.log(`   3. Test language switching with smooth transitions\n`);
      }
    }

  } catch (error) {
    console.error('\n❌ Fatal error during generation');
    process.exit(1);
  }
}

// Run the script
main().catch(error => {
  console.error('\n❌ Unhandled error:', error);
  process.exit(1);
});
