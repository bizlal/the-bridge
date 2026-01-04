/**
 * useKeyboardNavigation Hook
 * Handles keyboard shortcuts for narrative navigation and controls
 */

'use client';

import { useEffect } from 'react';
import { KEYBOARD_SHORTCUTS } from '@/lib/constants';

interface KeyboardNavigationHandlers {
  onNext: () => void;
  onPrevious: () => void;
  onTogglePlay: () => void;
  onToggleLanguage?: () => void;
  onToggleTheme?: () => void;
  onEscape?: () => void;
  onJumpToStart?: () => void;
  onJumpToEnd?: () => void;
}

export function useKeyboardNavigation(handlers: KeyboardNavigationHandlers) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { code, key } = event;

      // Ignore if user is typing in an input or textarea
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      // Next scene (Arrow Right or Space)
      if (KEYBOARD_SHORTCUTS.NEXT.includes(code) || KEYBOARD_SHORTCUTS.NEXT.includes(key)) {
        event.preventDefault();
        handlers.onNext();
        return;
      }

      // Previous scene (Arrow Left)
      if (KEYBOARD_SHORTCUTS.PREVIOUS.includes(code) || KEYBOARD_SHORTCUTS.PREVIOUS.includes(key)) {
        event.preventDefault();
        handlers.onPrevious();
        return;
      }

      // Toggle play/pause (P)
      if (KEYBOARD_SHORTCUTS.TOGGLE_PLAY.includes(code)) {
        event.preventDefault();
        handlers.onTogglePlay();
        return;
      }

      // Toggle language (L)
      if (KEYBOARD_SHORTCUTS.TOGGLE_LANGUAGE.includes(code) && handlers.onToggleLanguage) {
        event.preventDefault();
        handlers.onToggleLanguage();
        return;
      }

      // Toggle theme (T)
      if (KEYBOARD_SHORTCUTS.TOGGLE_THEME.includes(code) && handlers.onToggleTheme) {
        event.preventDefault();
        handlers.onToggleTheme();
        return;
      }

      // Escape
      if (KEYBOARD_SHORTCUTS.ESCAPE.includes(code) || KEYBOARD_SHORTCUTS.ESCAPE.includes(key)) {
        event.preventDefault();
        handlers.onEscape?.();
        return;
      }

      // Jump to start (Home)
      if (KEYBOARD_SHORTCUTS.JUMP_TO_START.includes(code) || KEYBOARD_SHORTCUTS.JUMP_TO_START.includes(key)) {
        event.preventDefault();
        handlers.onJumpToStart?.();
        return;
      }

      // Jump to end (End)
      if (KEYBOARD_SHORTCUTS.JUMP_TO_END.includes(code) || KEYBOARD_SHORTCUTS.JUMP_TO_END.includes(key)) {
        event.preventDefault();
        handlers.onJumpToEnd?.();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlers]);
}
