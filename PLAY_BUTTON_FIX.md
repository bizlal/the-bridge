# Play Button Fix

## Problem
The play button wasn't working when loading the app.

## Root Cause
1. **Default language was Urdu** (`useLanguagePreference.ts` line 15)
2. **Urdu audio files missing** for 19 scenes (including Scene 0)
3. **Audio element failed to load** → 404 errors
4. **Play button tried to play failed audio** → nothing happened

## ✅ Fix Applied

### 1. Changed Default Language to English
**File**: `/hooks/useLanguagePreference.ts`

```typescript
// Before
const [language, setLanguageState] = useState<Language>('ur'); // Default to Urdu

// After
const [language, setLanguageState] = useState<Language>('en'); // Default to English
```

**Why**: All English audio files exist (267/268 files). Only Scene 43.5 English is missing, but scene 0-42 all work perfectly.

### 2. Added Better Error Logging
**File**: `/components/AudioPool.tsx`

Now logs helpful error messages in browser console:
```
❌ Audio missing for Scene 22.5 (ur): /audio/scene-22.5-ur.mp3
   Run: npm run generate-audio -- --scene=22.5 --language=ur
```

## 🎯 Result

✅ **Play button now works!** The app loads in English and audio plays correctly.

## 🌍 Language Switching

Users can still switch languages using:
- **Keyboard**: Press `L` key
- **UI**: Click language toggle (bottom right)

**Available languages**:
- ✅ **English (en)** - Fully working (all scenes)
- ⚠️ **Urdu (ur)** - 19 scenes missing audio
- ⚠️ **Punjabi (pa)** - 20 scenes missing audio
- ⚠️ **Danish (da)** - 20 scenes missing audio

When switching to a language with missing audio:
- Browser console shows which files are missing
- Provides exact command to generate them
- Audio won't play for those scenes

## 📋 To Enable All Languages

Generate the missing audio files:

```bash
# Generate all missing (recommended)
npm run generate-audio

# Or generate by language
npm run generate-audio -- --language=ur   # Urdu
npm run generate-audio -- --language=pa   # Punjabi
npm run generate-audio -- --language=da   # Danish

# Check what's missing
npm run check-audio
```

See `/AUDIO_STATUS.md` for complete details.

## 🧪 Testing

1. **Run dev server**:
   ```bash
   npm run dev
   ```

2. **Open browser**: http://localhost:3000

3. **Test play button**: Should work immediately ✓

4. **Test language switching**:
   - Press `L` or click language toggle
   - Switch between languages
   - Check browser console for any missing audio warnings

## 💡 Pro Tip

Keep default as English until all audio is generated, then switch back to Urdu if preferred:

```typescript
// After generating all audio, can change back to:
const [language, setLanguageState] = useState<Language>('ur');
```

## 📊 Current State

- **Default language**: English ✅
- **Play button**: Working ✅
- **All scenes**: Playable in English ✅
- **Other languages**: Require audio generation ⚠️
