/**
 * useTheme Hook
 * Manages dark/light mode theme state
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Load theme preference on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);

      if (savedTheme) {
        const isDark = savedTheme === 'dark';
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    } catch (error) {
      console.error('Failed to load theme preference:', error);
    }
  }, []);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const nextIsDark = !prev;

      try {
        localStorage.setItem(STORAGE_KEYS.THEME, nextIsDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', nextIsDark);
      } catch (error) {
        console.error('Failed to save theme preference:', error);
      }

      return nextIsDark;
    });
  }, []);

  return { isDarkMode, toggleTheme };
}
