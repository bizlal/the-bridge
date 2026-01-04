/**
 * Create Legacy Audio Format Links
 * Creates legacy-format copies (without voice key) for backward compatibility
 *
 * Legacy format: scene-{id}-{lang}.mp3
 * New format: scene-{id}-{voice}-{lang}.mp3
 */

import fs from 'fs';
import path from 'path';

const audioDir = path.join(process.cwd(), 'public', 'audio');

console.log('\n📁 Creating legacy audio format copies...\n');

const files = fs.readdirSync(audioDir);
const voiceKeyedFiles = files.filter(f => f.match(/scene-[\d.]+-(bilal|mom|sisters)-(ur|en|pa|da)\.mp3$/));

let copyCount = 0;
let skipCount = 0;

voiceKeyedFiles.forEach(file => {
  // Extract scene ID and language from voice-keyed filename
  // Format: scene-{id}-{voice}-{lang}.mp3
  const match = file.match(/scene-([\d.]+)-(bilal|mom|sisters)-(ur|en|pa|da)\.mp3$/);

  if (match) {
    const [, sceneId, voice, lang] = match;
    const legacyName = `scene-${sceneId}-${lang}.mp3`;
    const legacyPath = path.join(audioDir, legacyName);
    const sourcePath = path.join(audioDir, file);

    if (fs.existsSync(legacyPath)) {
      console.log(`⏭️  Skip: ${legacyName} already exists`);
      skipCount++;
    } else {
      fs.copyFileSync(sourcePath, legacyPath);
      console.log(`✅ Created: ${legacyName} from ${file}`);
      copyCount++;
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Created: ${copyCount}`);
console.log(`   ⏭️  Skipped: ${skipCount}`);
console.log(`\n✨ Legacy format copies created successfully!\n`);
