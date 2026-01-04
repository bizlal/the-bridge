# Audio Status Report

## Current Situation

The 404 errors you're seeing are for **missing multilingual audio files**. During the rewrites, new scenes were added (like Scene 22.5 "THE LOS ANGELES ESCAPE" and Scene 43.5 "LET'S FIND UNDERSTANDING"), but only English audio was generated initially.

## ✅ What Was Just Fixed

1. **Created legacy format copies** for all existing English audio files
   - Old format: `scene-{id}-bilal-{lang}.mp3` → New format: `scene-{id}-{lang}.mp3`
   - 27 legacy copies created automatically
   - This fixes English playback for new scenes

2. **Added utility scripts** to package.json:
   - `npm run check-audio` - Check which audio files are missing
   - `npm run create-legacy-audio` - Create legacy format copies

## ❌ What's Still Missing

**60 audio files need to be generated** across all languages:

### By Language:
- **Urdu (ur)**: 19 scenes missing
- **Punjabi (pa)**: 20 scenes missing
- **Danish (da)**: 20 scenes missing
- **English (en)**: 1 scene missing (Scene 43.5 only)

### Critical Missing Scenes:
1. **Scene 0 (THE ASK)** - Needs Urdu/Punjabi/Danish (rewritten as goal-oriented)
2. **Scene 22.5 (THE LOS ANGELES ESCAPE)** - Needs Urdu/Punjabi/Danish (new scene)
3. **Scene 43.5 (LET'S FIND UNDERSTANDING)** - Needs ALL languages including English (new outro)

### Full List of Missing Scenes:
```
Urdu: 1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 26, 35.5, 35.75, 36.5, 36.75, 36.85, 39.1, 39.2, 39.3, 41.5, 43, 43.5

Punjabi: 1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 35.5, 35.75, 36.5, 36.75, 36.85, 39.1, 39.2, 39.3, 40, 41.5, 43, 43.5

Danish: 1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 35.5, 35.75, 36.5, 36.75, 36.85, 36.9, 36.96, 39.1, 39.2, 39.3, 41.5, 43, 43.5

English: 43.5
```

## 📋 How to Generate Missing Audio

### Option 1: Generate All Missing (Recommended)
```bash
npm run generate-audio
```
- Will generate all 60 missing files
- Respects rate limits (1000ms between requests)
- Skips files that already exist
- **Cost**: ~60 ElevenLabs API calls

### Option 2: Generate Specific Language
```bash
npm run generate-audio -- --language=ur   # Urdu only (19 files)
npm run generate-audio -- --language=pa   # Punjabi only (20 files)
npm run generate-audio -- --language=da   # Danish only (20 files)
npm run generate-audio -- --language=en   # English only (1 file)
```

### Option 3: Generate Specific Scene (All Languages)
```bash
npm run generate-audio -- --scene=22.5   # LA Escape scene
npm run generate-audio -- --scene=43.5   # Understanding outro
npm run generate-audio -- --scene=0      # The Ask intro
```

### Option 4: Priority Scenes Only
Generate just the critical new scenes:
```bash
npm run generate-audio -- --scene=22.5  # LA ESCAPE
npm run generate-audio -- --scene=43.5  # LET'S FIND UNDERSTANDING
npm run generate-audio -- --scene=0     # THE ASK (if rewritten)
```

## 🔍 Check Audio Status Anytime

```bash
npm run check-audio
```

This shows exactly which scenes are missing for each language.

## ⚙️ Technical Details

### Audio File Naming
- **New format** (preferred): `scene-{id}-{voice}-{lang}.mp3`
  - Example: `scene-22.5-bilal-ur.mp3`
- **Legacy format** (backward compatible): `scene-{id}-{lang}.mp3`
  - Example: `scene-22.5-ur.mp3`

The AudioPool component tries the new format first, then falls back to legacy format if missing.

### Voice Keys
- `bilal` - Main narrator (adult Bilal) - DEFAULT
- `mom` - Mother character (Scene 36.9)
- `sisters` - Sisters character (Scene 36.95)

### Languages
- `ur` - Urdu (اردو)
- `en` - English
- `pa` - Punjabi (ਪੰਜਾਬੀ)
- `da` - Danish

## 💡 Recommended Workflow

1. **Generate critical scenes first**:
   ```bash
   npm run generate-audio -- --scene=43.5  # New outro (all languages)
   npm run generate-audio -- --scene=22.5  # LA escape (all languages)
   ```

2. **Then generate all Urdu** (most common language):
   ```bash
   npm run generate-audio -- --language=ur
   ```

3. **Check status**:
   ```bash
   npm run check-audio
   ```

4. **Generate remaining languages** when ready:
   ```bash
   npm run generate-audio -- --language=pa
   npm run generate-audio -- --language=da
   ```

## 📊 Current Audio Stats

- **Total scenes**: 67
- **Total possible files**: 67 × 4 languages = 268 files
- **Files present**: ~208 files (78%)
- **Files missing**: ~60 files (22%)

## ⚠️ Important Notes

1. **ElevenLabs API Key Required**
   - Make sure `.env.local` has your `ELEVENLABS_API_KEY`
   - Each generation costs API credits

2. **Rate Limiting**
   - Script waits 1000ms between requests
   - Generating all 60 files takes ~60 seconds minimum

3. **Legacy Format Copies**
   - Run `npm run create-legacy-audio` after generating new audio
   - Creates backward-compatible file names automatically

4. **Scene Audio Scripts**
   - All scenes have audioScripts defined for all 4 languages
   - Scripts are in `/lib/scenes/act*.ts` files
   - No script updates needed - ready to generate

## 🎯 Next Steps

1. **Decide priority**: Which scenes/languages are most important?
2. **Run generation**: Use commands above to generate missing audio
3. **Test**: Run `npm run dev` and test language switching
4. **Verify**: Use `npm run check-audio` to confirm all files present

Once all audio is generated, the 404 errors will disappear and all language options will work seamlessly!
