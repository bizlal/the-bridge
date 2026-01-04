/**
 * Check Missing Audio Files
 * Identifies which scenes need audio generation for each language
 */

import fs from 'fs';
import path from 'path';
import { scenes } from '../lib/scenes';
import { Language } from '../lib/types';

const audioDir = path.join(process.cwd(), 'public', 'audio');
const languages: Language[] = ['ur', 'en', 'pa', 'da'];
const languageNames: Record<Language, string> = {
  'ur': 'Urdu',
  'en': 'English',
  'pa': 'Punjabi',
  'da': 'Danish'
};

console.log('\n🔍 Checking for missing audio files...\n');

const missing: Record<Language, number[]> = {
  'ur': [],
  'en': [],
  'pa': [],
  'da': []
};

scenes.forEach(scene => {
  languages.forEach(lang => {
    // Check for legacy format (backward compatible)
    const legacyPath = path.join(audioDir, `scene-${scene.id}-${lang}.mp3`);

    if (!fs.existsSync(legacyPath)) {
      missing[lang].push(scene.id);
    }
  });
});

// Report
languages.forEach(lang => {
  const count = missing[lang].length;
  if (count > 0) {
    console.log(`❌ ${languageNames[lang]}: ${count} scenes missing`);
    console.log(`   Scene IDs: ${missing[lang].join(', ')}`);
    console.log('');
  } else {
    console.log(`✅ ${languageNames[lang]}: All ${scenes.length} scenes present`);
  }
});

// Summary
const totalMissing = Object.values(missing).reduce((sum, arr) => sum + arr.length, 0);

if (totalMissing > 0) {
  console.log(`\n⚠️  Total missing audio files: ${totalMissing}`);
  console.log(`\n💡 To generate missing audio files:`);
  console.log(`   npm run generate-audio                    # Generate all missing`);
  console.log(`   npm run generate-audio -- --language=ur   # Generate Urdu only`);
  console.log(`   npm run generate-audio -- --scene=22.5    # Generate specific scene\n`);
} else {
  console.log(`\n✅ All audio files present for all ${scenes.length} scenes!\n`);
}
