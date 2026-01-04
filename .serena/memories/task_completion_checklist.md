# Task Completion Checklist

When completing a coding task in this project, follow these steps:

## 1. Code Quality
- [ ] **TypeScript:** No TypeScript errors (`npm run build` should pass)
- [ ] **Linting:** Run `npm run lint` and fix any issues
- [ ] **Type safety:** Ensure strict TypeScript compliance

## 2. Testing
- [ ] **Manual testing:** Test in browser (http://localhost:3000)
- [ ] **Accessibility:** Verify keyboard navigation works
- [ ] **Responsive design:** Check on different screen sizes
- [ ] **Audio sync:** If touching audio/text, verify synchronization
- [ ] **Both languages:** Test English and Urdu text display
- [ ] **Reduced motion:** Test with `prefers-reduced-motion` enabled

## 3. Code Standards
- [ ] **Follow naming conventions:** PascalCase for components, camelCase for functions/hooks
- [ ] **Use path aliases:** Import with `@/` not relative paths
- [ ] **Section comments:** Use `// === SECTION NAME ===` pattern
- [ ] **Clean up imports:** Remove unused imports
- [ ] **Accessibility:** Include proper ARIA attributes where needed

## 4. Performance
- [ ] **No console errors:** Check browser console
- [ ] **Build succeeds:** `npm run build` completes without errors
- [ ] **No warnings:** Address Next.js warnings (e.g., viewport metadata)

## 5. Audio-Related Tasks
If working with audio/scenes:
- [ ] **Update lib/scenes.ts:** Ensure scene data is correct
- [ ] **Regenerate audio:** Run `npm run generate-audio:scene X` if needed
- [ ] **Verify timestamps:** Test audio-text synchronization

## 6. Git
- [ ] **Clear commit message:** Describe what changed and why
- [ ] **No debug code:** Remove console.logs, test code
- [ ] **Review changes:** `git diff` before committing

## Common Issues to Watch For
- Viewport metadata warning (should be in viewport export, not metadata)
- Missing audio files (404s) - regenerate with scripts
- Hydration mismatches (client/server rendering differences)
- ARIA/accessibility violations
- TypeScript strict mode violations
