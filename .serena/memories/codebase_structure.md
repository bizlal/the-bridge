# Codebase Structure

## Directory Organization

### `/app`
Next.js App Router directory containing:
- `page.tsx` - Main narrative page component (client-side)
- `layout.tsx` - Root layout with metadata and fonts
- `globals.css` - Global styles and Tailwind directives
- `favicon.ico` - Site favicon

### `/components`
React components organized by functionality:
- `SceneRenderer.tsx` - Main scene rendering component
- `TextOverlay.tsx` - Text synchronization overlay
- `AnimatedTextLine.tsx` - Individual animated text lines
- `BackgroundLayer.tsx` - Background visual layer
- `/controls` - UI controls (ControlsOverlay, etc.)
- `/icons` - Icon components

### `/hooks`
Custom React hooks for state and behavior:
- `useNarrativeState.ts` - Scene navigation and playback state
- `useAudioPlayer.ts` - Audio playback management
- `useAudioTextSync.ts` - Sync text with audio timestamps
- `useKeyboardNavigation.ts` - Keyboard shortcuts
- `useLanguagePreference.ts` - Language selection state
- `useTheme.ts` - Dark/light mode theming
- `useReducedMotion.ts` - Accessibility: detect motion preferences
- `useControlsVisibility.ts` - UI controls visibility
- `useTextAnimation.ts` - Text animation timing

### `/lib`
Shared utilities, types, and data:
- `scenes.ts` - **Core data:** All 12 scenes with audio scripts, text lines, timing
- `types.ts` - TypeScript type definitions
- `constants.ts` - App-wide constants (SCENE_CONFIG, etc.)
- `visualStyles.ts` - Visual style configurations
- `/utils` - Utility functions (announceToScreenReader, etc.)

### `/scripts`
Build and generation scripts:
- `generate-audio.ts` - ElevenLabs API integration for TTS generation
  - Generates MP3 files for each scene
  - Supports force regeneration and single scene generation

### `/public`
Static assets:
- `/audio` - Generated MP3 files for each scene (scene-1.mp3 to scene-12.mp3)
- `/images` - Scene background images

## Key Files
- `tsconfig.json` - TypeScript configuration (strict mode, path aliases @/*)
- `eslint.config.mjs` - ESLint configuration (Next.js + TypeScript rules)
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS/Tailwind configuration
- `.env.local` - Environment variables (ELEVENLABS_API_KEY)
