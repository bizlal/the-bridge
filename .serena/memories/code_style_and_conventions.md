# Code Style and Conventions

## TypeScript Configuration
- **Strict mode enabled:** All strict TypeScript checks
- **Target:** ES2017
- **Module:** ESNext with bundler resolution
- **Path aliases:** `@/*` maps to project root
- **JSX:** react-jsx transform

## Code Organization Patterns

### Component Structure
- **Client components:** Explicitly marked with `'use client'` directive
- **Functional components only:** No class components
- **Hooks-based state management:** Custom hooks for complex logic
- **Clear separation of concerns:** Each hook handles specific functionality

### Naming Conventions
- **Files:** PascalCase for components (`SceneRenderer.tsx`), camelCase for utilities
- **Components:** PascalCase (`NarrativePage`)
- **Hooks:** camelCase with `use` prefix (`useNarrativeState`)
- **Constants:** UPPER_SNAKE_CASE (`SCENE_CONFIG`)
- **Types/Interfaces:** PascalCase (`SceneData`)

### Import Organization
Standard order observed in codebase:
1. React/Next.js imports
2. Third-party libraries
3. Local imports (components, hooks, utils)
4. Types

Example from `app/page.tsx`:
```typescript
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { scenes } from '@/lib/scenes';
import { useNarrativeState } from '@/hooks/useNarrativeState';
```

### Component Patterns

#### State Management
- Custom hooks for complex state (see `/hooks`)
- Local useState for simple component state
- Clear naming for state variables and handlers

#### Comments
- Section comments in UPPERCASE with === delimiters:
  ```typescript
  // === AUDIO MANAGEMENT ===
  // === KEYBOARD NAVIGATION ===
  ```
- Inline comments for complex logic
- JSDoc comments not heavily used (code is self-documenting)

#### Accessibility
- ARIA attributes for screen readers
- `role` and `aria-live` regions
- `announceToScreenReader` utility for dynamic announcements
- Keyboard navigation support
- Reduced motion support via `prefers-reduced-motion`

### TypeScript Patterns
- **Type imports:** Use `import type` for type-only imports
- **Interfaces over types:** For object shapes (e.g., `SceneData`)
- **Explicit return types:** Not always specified (relies on inference)
- **Strict null checks:** Enabled, handle undefined/null explicitly

### Data Structures
- Scene data in `lib/scenes.ts`: Array of `SceneData` objects
- Each scene has:
  - `id`, `title`, `audioScript`
  - `textLines` array with language-specific lines and delays
  - `visualStyle`, `backgroundImage`, `textOverlay`

### Animation
- **Framer Motion:** For component transitions (`AnimatePresence`)
- **GSAP:** For scroll-based and complex animations
- Accessibility-aware: respects `prefers-reduced-motion`

## ESLint Configuration
- Extends `eslint-config-next/core-web-vitals`
- Extends `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
