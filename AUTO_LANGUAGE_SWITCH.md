# Auto Language Switch Feature

## What Was Implemented

The app now **automatically switches to an available language** when a scene doesn't have audio in the selected language, and shows a toast notification explaining the switch.

## ✅ Features

### 1. Scene-Specific Audio Checking
- Maintains a list of missing audio by scene and language
- Checks if each scene has audio before trying to play it
- File: `/lib/audioAvailability.ts`

### 2. Auto-Switch Logic
- When scrolling to a new scene, checks if current language has audio
- If not available, switches to first available language (priority: English → Urdu → Punjabi → Danish)
- Preserves user's preferred language for scenes that do have audio
- File: `/app/page.tsx` (lines 60-79)

### 3. Toast Notifications
- Shows amber warning toast when language is switched
- Message: "Audio not available in {Language} for this scene. Switched to {NewLanguage}."
- Auto-dismisses after 5 seconds
- File: `/components/Toast.tsx`

### 4. Visual Indicators in Language Selector
- Disabled languages show lock icon 🔒
- Grayed out appearance with "(Audio pending)" text
- Cannot click disabled language options
- File: `/components/LanguageSelector.tsx`

## 🎯 How It Works

### Scenario Example:
1. User selects **Urdu** on Scene 0 (has audio ✓)
2. User scrolls to Scene 22.5 "THE LOS ANGELES ESCAPE"
3. Scene 22.5 has **no Urdu audio** ✗
4. **Auto-switch:** App switches to **English** (available ✓)
5. **Toast shows:** "Audio not available in Urdu for this scene. Switched to English."
6. User scrolls to Scene 23 (has Urdu audio ✓)
7. **Stays in English** (doesn't auto-switch back, user stays in control)

## 📋 Missing Audio by Language

Updated automatically from `/scripts/check-missing-audio.ts`:

```typescript
const MISSING_AUDIO: Record<Language, number[]> = {
  'ur': [1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 26, 35.5, 35.75, 36.5, 36.75, 36.85, 39.1, 39.2, 39.3, 41.5, 43, 43.5],
  'en': [43.5],
  'pa': [1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 35.5, 35.75, 36.5, 36.75, 36.85, 39.1, 39.2, 39.3, 40, 41.5, 43, 43.5],
  'da': [1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 35.5, 35.75, 36.5, 36.75, 36.85, 36.9, 36.96, 39.1, 39.2, 39.3, 41.5, 43, 43.5],
};
```

### When Audio is Generated
Update the `MISSING_AUDIO` object in `/lib/audioAvailability.ts`:

```typescript
// After generating Urdu for Scene 22.5
'ur': [1.5, 4.5, 12.5, 14.5, 21.2, 21.5, /* 22.5 removed */, 26, ...],
```

## 🧪 Testing

### Test Auto-Switch:
1. **Start app**: `npm run dev`
2. **Select Urdu** on Scene 0
3. **Scroll down** to any scene in the missing list (e.g., Scene 22.5)
4. **Observe**:
   - Toast appears: "Audio not available in Urdu..."
   - Language indicator shows "EN" now
   - Audio plays in English

### Test Language Selector:
1. **Open language selector** (Scene 0 or press `L`)
2. **Observe**:
   - Urdu/Punjabi/Danish show lock icon 🔒 for missing scenes
   - Grayed out with "(Audio pending)" text
   - Cannot click unavailable languages

### Test Console Logging:
Open browser console to see:
```
🔄 Auto-switched from ur to en for scene 22.5
❌ Audio missing for Scene 22.5 (ur): /audio/scene-22.5-ur.mp3
   Run: npm run generate-audio -- --scene=22.5 --language=ur
```

## 🎨 UI Components

### Toast Component
- **Location**: Top center of screen
- **Color**: Amber (warning)
- **Duration**: 5 seconds
- **Dismissible**: Click X to close early
- **Animation**: Smooth fade in/out

### Language Selector Updates
- **Available**: Blue dot, white text, clickable
- **Selected**: Blue border, checkmark icon
- **Unavailable**: Lock icon, grayed out, not clickable, "(Audio pending)" label

## 🔧 Maintenance

### When Generating New Audio:

1. **Generate audio**:
   ```bash
   npm run generate-audio -- --scene=22.5 --language=ur
   ```

2. **Update MISSING_AUDIO** in `/lib/audioAvailability.ts`:
   ```typescript
   // Remove 22.5 from ur array
   'ur': [1.5, 4.5, ..., /* removed 22.5 */, 26, ...]
   ```

3. **Create legacy copies**:
   ```bash
   npm run create-legacy-audio
   ```

4. **Verify**:
   ```bash
   npm run check-audio
   ```

### Auto-Update Script (Future)
Could create a script that:
1. Scans `/public/audio/` for existing files
2. Auto-updates `MISSING_AUDIO` constant
3. Runs on build or as pre-commit hook

## 💡 Benefits

1. **No 404 errors** - Never tries to play non-existent audio
2. **Seamless UX** - Auto-switches instead of breaking
3. **Clear feedback** - Toast explains why language changed
4. **User control** - Can manually switch back if desired
5. **Visual clarity** - Lock icons show unavailable options

## 🎯 Next Steps

1. **Generate missing audio** for key scenes (22.5, 43.5, etc.)
2. **Update MISSING_AUDIO** as audio is generated
3. **Test across all scenes** with different language selections
4. **Consider**: Auto-update script to sync MISSING_AUDIO with filesystem

The app now gracefully handles missing audio instead of failing silently!
