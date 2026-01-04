/**
 * Image Generation Script for "The Bridge"
 * Generates scene background images using Black Forest Labs Flux via Vercel AI Gateway
 *
 * Usage:
 *   npm run generate-images              - Generate all scenes
 *   npm run generate-images -- --force   - Regenerate all (overwrite existing)
 *   npm run generate-images -- --scene=1 - Generate specific scene
 */

import dotenv from 'dotenv';
import { experimental_generateImage as generateImage } from 'ai';
import fs from 'fs';
import path from 'path';
import { scenes, SceneData } from '../lib/scenes';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const AI_GATEWAY_API_KEY = process.env.AI_GATEWAY_API_KEY;

// Image generation configuration
const IMAGE_CONFIG = {
  model: 'google/imagen-4.0-ultra-generate-001', // Google Imagen 4.0 Ultra for highest quality cinematic images
  aspectRatio: '16:9' as const, // Landscape cinematic format
  rateLimit: 3000, // 3 seconds between requests
  // Note: Seed not supported with AI Gateway watermarks - relying on structured prompts for consistency
};

// STYLE PRESETS FOR TESTING
const STYLE_PRESETS = {
  watercolor: `Watercolor memoir illustration. Transparent watercolor washes, bleeding edges, visible brush strokes, textured watercolor paper, soft gradients. Muted watercolors, soft earth tones, gentle blues and grays, warm sepia undertones. Introspective, contemplative, raw emotion, psychological depth. Intimate perspective, symbolic imagery. No detailed faces, silhouettes and shadows only.`,

  comic: `Comic book illustration, graphic novel style. Bold ink lines, dynamic composition, dramatic shadows, high contrast. Vibrant colors, cel-shaded technique. American comic book aesthetic, sequential art style. Emotional storytelling through composition. No detailed faces, silhouettes and shadows only.`,

  digital: `Digital illustration, modern art style. Clean digital painting, smooth gradients, professional illustration. Contemporary color palette, polished finish. Editorial illustration aesthetic. Emotional depth through color and lighting. No detailed faces, silhouettes and shadows only.`,

  geometric: `Minimalist geometric illustration. Abstract shapes, symbolic representation, flat design. Limited color palette, bold simple forms. Modernist aesthetic, conceptual art style. Emotion through composition and color theory. No detailed faces, pure abstraction.`
};

// Active style for generation (change this to test different styles)
const BASE_STYLE = STYLE_PRESETS.watercolor;

interface GenerationOptions {
  sceneId?: number;
  force?: boolean;
  style?: keyof typeof STYLE_PRESETS | 'all';
}

type StyleKey = keyof typeof STYLE_PRESETS;

/**
 * Scene-specific image prompts - stored without style prefix
 * Style will be prepended during generation
 */
const IMAGE_PROMPT_SUFFIXES: Record<number, string> = {
  // INTRODUCTION
  0: `Architectural bridge spanning across page, soft mist and gentle clouds, warm sunset palette, symbolic connection between two shores, document pages flowing in wind, hopeful yet contemplative, emotional depth, memoir opening illustration.`,

  // ACT 1: THE INVISIBLE CHILD
  1: `Young child's bedroom corner, dim light from window, school papers scattered on desk showing low grades, prayer mat in corner, family photos on wall slightly faded, Pakistani cultural elements (fabric patterns, colors), feeling of isolation and invisibility. No detailed faces, silhouettes only.`,

  1.5: `MOOD: Coping through humor, deflection mask. COMPOSITION: Classroom desk surface macro texture, scattered pencils out of focus, notebook doodles blurred abstract, laughter masking pain, comedy mask fragmented reflection, bokeh school lights, defensive humor barrier visualization, shallow depth of field on crumpled paper.`,

  // ACT 2: THE HIDDEN ENTREPRENEUR
  2: `MOOD: Lone innovation, self-taught mastery. COMPOSITION: iPhone disassembled components extreme macro, circuit board texture detailed, glowing MacBook screen light spill (no text visible), dark bedroom bokeh, late night clock blur, solitary workspace atmosphere, technical manual pages out of focus, isolation of genius.`,

  3: `MOOD: Passive observation, sidelines watching. COMPOSITION: Newspaper print texture macro (text unreadable blur), newsprint grain detailed, spectator perspective through blurred foreground, watching from distance atmosphere, peripheral vision effect, out-of-focus crowd, observer isolation.`,

  4: `Hands reaching toward glowing screen (YouTube interface suggested but not literal logo), parent's disapproving shadow in doorway, creative spark being extinguished, warm vs cool color contrast, moment of prohibition. No detailed faces, silhouettes only.`,

  4.5: `MOOD: Missed fortunes, what could have been. COMPOSITION: Tesla stock chart blurred abstract, cryptocurrency visualization through bokeh, missed opportunity fog, parallel timeline ghost effect, fortune slipping through fingers (abstract light trails), regret atmosphere, timing misalignment.`,

  5: `MOOD: Academic rejection, systemic failure. COMPOSITION: Rejection letter paper texture macro, "not accepted" text bleeding through blur, high school building facade out of focus and imposing, institutional rejection atmosphere, closed door silhouette, barrier visualization, systemic exclusion fog.`,

  // ACT 3: DISCOVERY & DIAGNOSIS
  6: `Medicine bottle on bedside table, soft morning light, pill in hand, moment of clarity and discovery, hopeful warm tones, breakthrough feeling. No detailed faces, silhouettes only.`,

  7: `MOOD: Self-diagnosis revelation, pattern recognition. COMPOSITION: Medical document text blurred macro, ADHD diagnostic criteria fading text, puzzle pieces coming together (abstract geometric), self-discovery atmosphere, medical textbook page texture, pattern recognition visualization, understanding dawning light.`,

  8: `MOOD: Impossible achieved, university acceptance. COMPOSITION: Waterloo University acceptance letter texture (text barely visible through blur), institutional architecture silhouette imposing, impossible made possible atmosphere, barrier broken visualization (cracking glass abstract), academic achievement glow, disbelief fog.`,

  9: `MOOD: Discovery of addiction, cafeteria revelation. COMPOSITION: Cafeteria table surface macro texture, food tray abstract blur, discovery moment atmosphere, addiction seed planted (dark shadow spreading), institutional space cold lighting, revelation dread, poker visualization through playing card blur.`,

  10: `MOOD: Addiction consuming, fire factory metaphor. COMPOSITION: Fire texture macro (flames out of focus), factory machinery abstract silhouette, consumption visualization (dissolving light), addiction spiral atmosphere, burning money imagery (abstract flames), destruction pattern, compulsion fog.`,

  11: `MOOD: Academic collapse, university falling apart. COMPOSITION: University building crumbling (abstract architectural fragments blur), structural collapse visualization, academic failure atmosphere, grades plummeting (abstract downward light trails), institution rejection, collapse into darkness.`,

  12: `MOOD: Intervention care, friends pulling back. COMPOSITION: Intervention room atmosphere (chairs in circle blur), friendship reaching out (abstract hand shadows), care confrontation mood, rescue attempt visualization, concerned shadows, pulling from edge, friendship anchor.`,

  12.5: `MOOD: Critical decision, crossroads moment. COMPOSITION: Fork in road abstract (diverging light paths), decision weight visualization, crossroads atmosphere, binary choice (split frame abstract), life-altering moment, pressure fog, decisive turn.`,

  // ACT 4: FIGHTING TO SURVIVE  
  13: `MOOD: Friendship anchor, Aman stability. COMPOSITION: Friend silhouette distant, anchor chain texture macro, stability in chaos atmosphere, grounding presence visualization (calm center in storm), friendship lifeline, steady support, isolation broken.`,

  14: `MOOD: McDonald's survival, fighting to stay. COMPOSITION: McDonald's kitchen texture blur, minimum wage atmosphere, survival mode visualization, fighting against expulsion fog, institutional pressure, staying afloat barely, economic struggle.`,

  14.5: `MOOD: MDMA confession, chemical truth-telling. COMPOSITION: MDMA pill texture macro, chemical honesty visualization, truth serum atmosphere, walls down moment (abstract barrier dissolving), vulnerability fog, confession weight, pharmaceutical revelation.`,

  15: `MOOD: Starvation survival, toughest year. COMPOSITION: Empty plate texture, food scarcity visualization, survival mode atmosphere, starvation period fog, economic bottom, barely surviving, deprivation shadows.`,

  16: `MOOD: Final academic failure, three strikes. COMPOSITION: Failed exam paper texture macro (red marks blurred), third strike visualization, final failure atmosphere, academic end, institutional rejection complete, defeat fog, bottom reached.`,

  18: `MOOD: Dean reversal, unexpected mercy. COMPOSITION: Dean's office atmosphere (bureaucratic furniture blur), reversal decision visualization, unexpected mercy fog, institutional flexibility, second chance light, policy override.`,

  19: `MOOD: Academic completion, passed everything. COMPOSITION: Passed exam papers texture (check marks blurred), completion visualization, academic redemption atmosphere, passed against odds, achievement glow, vindication fog.`,

  20: `MOOD: Strategic escape, the finesse. COMPOSITION: Exit strategy visualization (abstract pathways), finesse execution atmosphere, strategic maneuvering fog, clever escape, outsmarting system, tactical brilliance.`,

  // ACT 5: EMPIRE BUILDING
  21: `MOOD: Trackem mastery, technical excellence. COMPOSITION: Code on screen blur (syntax coloring abstract), software mastery visualization, technical excellence atmosphere, codebase architecture (geometric patterns), developer flow state, mastery achieved.`,

  21.2: `MOOD: PRK surgery disaster, cheap decision. COMPOSITION: Medical light overhead blur (sterile hospital ceiling), surgery disaster visualization, post-op regret atmosphere, cheap decision consequences, medical crisis fog, healing failure.`,

  21.5: `MOOD: Lost product launch, timing failure. COMPOSITION: Launch countdown blur (numbers abstract), missed timing visualization, lost opportunity atmosphere, product failure fog, launch abort, timing misalignment.`,

  22: `MOOD: Overwhelming pressure, too much too fast. COMPOSITION: Overwhelming information visualization (abstract data streams), pressure mounting atmosphere, drowning in responsibility fog, capacity exceeded, breaking point, overwhelm spiral.`,

  22.5: `MOOD: LA escape, geographical reset. COMPOSITION: Los Angeles cityscape blur (palm trees silhouette), escape visualization, geographical reset atmosphere, running from pressure, distance seeking, California fog.`,

  23: `MOOD: DailyRapFacts explosion, social media success. COMPOSITION: Social media metrics blur (numbers abstract), viral explosion visualization, success metrics atmosphere, growth exponential (upward light trails), digital empire, attention capture.`,

  24: `MOOD: RapTV partnership, industry validation. COMPOSITION: Partnership contract texture blur, industry validation visualization, professional recognition atmosphere, media partnership fog, legitimacy achieved, industry entry.`,

  25: `MOOD: Tory Lanez connection, celebrity proximity. COMPOSITION: Celebrity proximity visualization (distant silhouette), industry access atmosphere, fame adjacency fog, music industry entrance, celebrity connection, validation external.`,

  26: `MOOD: Limelight vision, app conception. COMPOSITION: App interface wireframe blur, vision conception visualization, idea genesis atmosphere, startup vision fog, product design, innovation spark.`,

  27: `MOOD: Limelight peak, App Store #4. COMPOSITION: App Store ranking visualization (numbers abstract blur), peak achievement atmosphere, #4 ranking glow, success peak, app store charts, achievement zenith.`,

  28: `MOOD: Trackem to BK DevOps, technical pivot. COMPOSITION: DevOps infrastructure blur (server racks abstract), technical pivot visualization, Burger King corporate atmosphere, employment shift, stability seeking.`,

  29: `MOOD: Toronto move, geographical shift. COMPOSITION: Toronto skyline blur (CN Tower silhouette), relocation visualization, geographical shift atmosphere, Canadian border, new chapter fog, city transition.`,

  30: `MOOD: Life peak, everything working. COMPOSITION: Peak visualization (mountain summit blur), everything aligned atmosphere, life zenith fog, success convergence, optimal state, peak achievement.`,

  31: `MOOD: Offer rejected, walking away from security. COMPOSITION: Job offer letter blur (salary numbers abstract), rejection decision visualization, security refused atmosphere, walking away fog, independence chosen, risk accepted.`,

  32: `MOOD: AC jump start, return to entrepreneurship. COMPOSITION: Air conditioning startup visualization (AC unit texture blur), business restart atmosphere, entrepreneurship return fog, new venture, fresh start.`,

  33: `MOOD: The downgrade, moving back home. COMPOSITION: Moving boxes texture blur, downgrade visualization, regression atmosphere, childhood home return fog, independence lost, backward movement.`,

  34: `MOOD: The realization, pattern recognition. COMPOSITION: Pattern visualization (repeating geometric blur), realization dawning atmosphere, epiphany moment fog, pattern recognition, truth seeing, understanding arrival.`,

  35: `MOOD: Lessons learned, wisdom gained. COMPOSITION: Lesson notes texture blur, wisdom accumulation visualization, learning consolidation atmosphere, insight gained fog, understanding deepened, knowledge crystallized.`,

  35.5: `MOOD: Arrow Capital rebound, new opportunity. COMPOSITION: Opportunity door visualization (threshold blur), rebound atmosphere, second chance fog, new venture opening, possibility return, hope reignited.`,

  35.75: `MOOD: Safety net trap, family dependence. COMPOSITION: Safety net visualization (mesh texture blur), trap springing atmosphere, dependence cycle fog, rescue turned prison, support becomes cage, independence lost.`,

  36: `Dinner table from above, expensive steak meal, family gathered (silhouettes/backs of heads only), tension in body language, money/generosity vs confusion theme, warm food tones vs cool emotional distance. No detailed faces, silhouettes only.`,

  36.5: `MOOD: Bailout trap, rescue becomes prison. COMPOSITION: Bailout contract blur, trap closing visualization, rescue prison atmosphere, help becomes control fog, independence traded, freedom price.`,

  36.75: `MOOD: Cycle repeating, pattern continuing. COMPOSITION: Cycle visualization (circular motion blur), pattern repetition atmosphere, loop continuing fog, cyclical pattern, same mistakes, history repeating.`,

  36.85: `MOOD: Betrayal wound, trust broken. COMPOSITION: Betrayal visualization (shattered glass abstract), trust broken atmosphere, wound inflicted fog, relationship fracture, betrayal impact, trust shattered.`,

  36.9: `MOOD: Mom's wisdom, grounding truth. COMPOSITION: Mother's silhouette distant soft, maternal wisdom visualization, grounding truth atmosphere, Urdu text "بیٹا" glow, acceptance teaching fog, pragmatic love, build yourself light.`,

  36.95: `MOOD: Sisters' confrontation, misunderstanding. COMPOSITION: Confrontation tension (two silhouettes distant), accusation words floating blur, misunderstanding barrier visualization, family conflict atmosphere, different perspectives fog, they don't understand.`,

  36.96: `MOOD: Internal defense, alone with truth. COMPOSITION: Solitary reflection visualization (single shadow), internal dialogue atmosphere, misunderstood isolation fog, defensive truth, wounds not excuses, alone understanding, sad acceptance.`,

  // ACT 6: THE BRIDGE
  38: `MOOD: The bridge concept, connection possibility. COMPOSITION: Bridge architecture blur (connection visualization), two worlds meeting atmosphere, incompatible lives fog, connection attempt, bridge building, possibility hope.`,

  39: `MOOD: House paradox, environment variable. COMPOSITION: House structure blur (home prison visualization), paradox atmosphere, environment variable fog, location determinism, home equals collapse, independence thrives.`,

  39.1: `MOOD: Medical emergency, hypertensive crisis. COMPOSITION: Blood pressure monitor macro blur (225/122 numbers abstract), medical crisis visualization, hypertensive emergency atmosphere, body breakdown fog, crisis visualization, medical emergency.`,

  39.2: `MOOD: Lost doctor, executive dysfunction peak. COMPOSITION: Legal brief pages blur (sophisticated arguments unreadable), forgot to print visualization, intelligence undermined atmosphere, executive dysfunction fog, ADHD pure form, ability sabotaged.`,

  39.3: `MOOD: The brief brilliance, forgotten execution. COMPOSITION: Brilliant legal writing texture blur, court date notice, execution failure visualization, intelligence wasted atmosphere, administrative failure fog, pattern encapsulation, dysfunction peak.`,

  40: `MOOD: Pattern proof, variable identified. COMPOSITION: Pattern visualization complete (timeline split blur), variable proof atmosphere, environment determinism fog, 10-year evidence, cyclical pattern, undeniable proof, pattern complete.`,

  41: `MOOD: Father disconnect, different worlds. COMPOSITION: Taxi cab texture blur (14-hour workday), income disparity visualization, frame mismatch atmosphere, different worlds fog, incomprehensible scale, invisible empire, never saw where I was.`,

  41.5: `MOOD: The fixer identity, problem solver. COMPOSITION: Problem-solving visualization (abstract pathways), fixer identity atmosphere, solution finding fog, pattern fixing, capability identity, solver nature.`,

  42: `MOOD: Equity solution, financial answer. COMPOSITION: Equity contract blur (ownership structure abstract), solution visualization, financial answer atmosphere, equity arrangement fog, partnership structure, solution found.`,

  43: `MOOD: Final acceptance, I am okay. COMPOSITION: Acceptance visualization (peaceful atmosphere blur), self-acceptance fog, final truth, okay-ness achieved, peace found, journey complete, acceptance glow, resolution.`
};

/**
 * Enhance prompt with actual scene data
 */
function enhancePromptWithSceneData(basePrompt: string, scene: SceneData): string {
  // Add scene metadata to make prompts more accurate
  let enhanced = `Scene ${scene.id}: "${scene.title}". ${basePrompt}`;

  // Adjust visual tone based on scene's visualStyle
  if (scene.visualStyle === 'dark') {
    enhanced += ' Extra shadows, noir atmosphere, darker tones.';
  } else if (scene.visualStyle === 'bright') {
    enhanced += ' Warmer light, hopeful undertones, brighter mood.';
  }

  // Add time period context if available
  if (scene.timePeriod) {
    enhanced += ` Era: ${scene.timePeriod}.`;
  }

  return enhanced;
}

/**
 * Generate image for a single scene with optional style override
 */
async function generateSceneImage(scene: SceneData, force = false, styleKey?: StyleKey): Promise<void> {
  // Skip scene 12 (has no background image)
  if (!scene.backgroundImage) {
    console.log(`⏭️  Scene ${scene.id} (${scene.title}) - No background image needed`);
    return;
  }

  // Determine output path - add style suffix if style specified
  let outputPath = path.join(process.cwd(), 'public', scene.backgroundImage);
  if (styleKey) {
    // Replace .jpg with -stylename.jpg
    outputPath = outputPath.replace(/\.jpg$/, `-${styleKey}.jpg`);
  }

  // Skip if exists (unless force)
  if (fs.existsSync(outputPath) && !force) {
    console.log(`✓ Scene ${scene.id}${styleKey ? ` (${styleKey})` : ''} image already exists (${scene.title})`);
    return;
  }

  const promptSuffix = IMAGE_PROMPT_SUFFIXES[scene.id];
  if (!promptSuffix) {
    console.error(`❌ No prompt defined for Scene ${scene.id}`);
    return;
  }

  // Use specified style or fallback to current BASE_STYLE
  const stylePrompt = styleKey ? STYLE_PRESETS[styleKey] : BASE_STYLE;

  // Combine style prefix with scene-specific prompt
  const fullPrompt = `${stylePrompt} ${promptSuffix}`;

  // Enhance prompt with scene data
  const prompt = enhancePromptWithSceneData(fullPrompt, scene);

  try {
    console.log(`🎨 Generating image for Scene ${scene.id}: ${scene.title}${styleKey ? ` (${styleKey} style)` : ''}...`);
    console.log(`   Visual style: ${scene.visualStyle}${scene.timePeriod ? ` (${scene.timePeriod})` : ''}`);
    console.log(`   Prompt: ${prompt.substring(0, 120)}...`);

    // Configure AI Gateway using environment variable
    process.env.VERCEL_API_KEY = AI_GATEWAY_API_KEY;

    const result = await generateImage({
      model: IMAGE_CONFIG.model,
      prompt: prompt,
      aspectRatio: IMAGE_CONFIG.aspectRatio,
    });

    // Save the generated image
    const image = result.images[0];
    const buffer = Buffer.from(image.base64, 'base64');

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, buffer);

    const fileSizeKB = (buffer.length / 1024).toFixed(2);
    console.log(`✅ Scene ${scene.id} generated successfully (${fileSizeKB} KB)`);
    console.log(`   Saved to: ${outputPath}\n`);

  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Failed to generate Scene ${scene.id}:`, error.message);
      if ('status' in error) {
        const status = (error as any).status;
        if (status === 429) {
          console.error(`   Rate limit exceeded. Please wait and try again.`);
        } else if (status === 401) {
          console.error(`   Authentication failed. Please check your AI_GATEWAY_API_KEY in .env.local`);
        }
      }
    } else {
      console.error(`❌ Unexpected error for Scene ${scene.id}:`, error);
    }
    // Don't throw - continue with next scene
    console.log(`⏭️  Skipping Scene ${scene.id} and continuing...\n`);
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
  console.log('\n🎬 The Bridge - Image Generation Script\n');
  console.log('========================================\n');

  // Parse command line arguments
  const args = process.argv.slice(2);
  const sceneArg = args.find(arg => arg.startsWith('--scene='))?.split('=')[1];
  const scenesArg = args.find(arg => arg.startsWith('--scenes='))?.split('=')[1];
  const styleArg = args.find(arg => arg.startsWith('--style='))?.split('=')[1] as StyleKey | 'all' | undefined;
  const force = args.includes('--force');

  // Validate API key
  if (!AI_GATEWAY_API_KEY) {
    console.error('❌ ERROR: AI_GATEWAY_API_KEY not found in environment');
    console.error('   Please add your Vercel AI Gateway API key to .env.local');
    console.error('   Add this line: AI_GATEWAY_API_KEY=your_key_here\n');
    process.exit(1);
  }

  // Ensure images directory exists
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    console.log('📁 Creating images directory...');
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Parse scenes to generate
  let scenesToGenerate: SceneData[] = [];
  if (sceneArg) {
    const sceneId = parseFloat(sceneArg);
    const scene = scenes.find(s => s.id === sceneId);
    if (!scene) {
      console.error(`❌ Scene ${sceneId} not found`);
      process.exit(1);
    }
    scenesToGenerate = [scene];
  } else if (scenesArg) {
    const sceneIds = scenesArg.split(',').map(id => parseFloat(id.trim()));
    for (const id of sceneIds) {
      const scene = scenes.find(s => s.id === id);
      if (!scene) {
        console.error(`❌ Scene ${id} not found`);
        process.exit(1);
      }
      scenesToGenerate.push(scene);
    }
  } else {
    scenesToGenerate = scenes;
  }

  // Parse styles to generate
  const stylesToGenerate: StyleKey[] = styleArg === 'all'
    ? ['watercolor', 'comic', 'digital', 'geometric']
    : styleArg
      ? [styleArg as StyleKey]
      : [];

  // Log configuration
  console.log(`📋 Configuration:`);
  console.log(`   Model: ${IMAGE_CONFIG.model}`);
  console.log(`   Aspect Ratio: ${IMAGE_CONFIG.aspectRatio}`);
  console.log(`   Force regenerate: ${force ? 'Yes' : 'No'}`);
  console.log(`   Rate limit: ${IMAGE_CONFIG.rateLimit}ms between requests`);
  if (stylesToGenerate.length > 0) {
    console.log(`   Styles: ${stylesToGenerate.join(', ')}`);
  }
  if (scenesToGenerate.length < scenes.length) {
    console.log(`   Scenes: ${scenesToGenerate.map(s => s.id).join(', ')}`);
  }
  console.log();

  try {
    if (stylesToGenerate.length > 0) {
      // Generate specific style(s) for specific scene(s)
      console.log(`🎯 Generating ${stylesToGenerate.length} style(s) for ${scenesToGenerate.length} scene(s)...\n`);

      for (const scene of scenesToGenerate) {
        for (const styleKey of stylesToGenerate) {
          await generateSceneImage(scene, force, styleKey);
          if (stylesToGenerate.length > 1 || scenesToGenerate.length > 1) {
            await delay(IMAGE_CONFIG.rateLimit);
          }
        }
      }
    } else if (sceneArg || scenesArg) {
      // Generate specific scene(s) with default style
      for (const scene of scenesToGenerate) {
        await generateSceneImage(scene, force);
        if (scenesToGenerate.length > 1) {
          await delay(IMAGE_CONFIG.rateLimit);
        }
      }

    } else {
      // Generate all scenes
      const scenesWithImages = scenes.filter(s => s.backgroundImage);
      console.log(`🎯 Generating images for ${scenesWithImages.length} scenes...\n`);

      let successCount = 0;
      let skipCount = 0;
      let errorCount = 0;

      for (let i = 0; i < scenes.length; i++) {
        const scene = scenes[i];

        try {
          // Check if file exists before attempting generation
          if (!scene.backgroundImage) {
            continue;
          }

          const outputPath = path.join(process.cwd(), 'public', scene.backgroundImage);
          const exists = fs.existsSync(outputPath);

          await generateSceneImage(scene, force);

          if (exists && !force) {
            skipCount++;
          } else {
            successCount++;
          }

          // Rate limiting: wait between requests (except for last one)
          if (i < scenes.length - 1 && (!exists || force) && scene.backgroundImage) {
            console.log(`⏳ Waiting ${IMAGE_CONFIG.rateLimit}ms before next request...\n`);
            await delay(IMAGE_CONFIG.rateLimit);
          }

        } catch (error) {
          errorCount++;
          console.error(`\n⚠️  Continuing with next scene...\n`);
        }
      }

      // Summary
      console.log('\n========================================');
      console.log('📊 Generation Summary:\n');
      console.log(`   ✅ Generated: ${successCount}`);
      console.log(`   ⏭️  Skipped (already exist): ${skipCount}`);
      console.log(`   ❌ Errors: ${errorCount}`);

      const imageFiles = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir) : [];
      console.log(`   📁 Total files in /public/images: ${imageFiles.length}`);

      if (errorCount > 0) {
        console.log(`\n⚠️  Some files failed to generate. Run with --force to retry.`);
        process.exit(1);
      } else {
        console.log(`\n🎉 All images successfully generated!`);
        console.log(`\n💡 Next steps:`);
        console.log(`   1. Review images: open public/images/`);
        console.log(`   2. Test in app: npm run dev`);
        console.log(`   3. Regenerate specific scenes if needed: npm run generate-images -- --scene=1\n`);
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
