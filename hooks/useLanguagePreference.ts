/**
 * useLanguagePreference Hook
 * Manages language selection (Urdu, English, Punjabi, Danish) with localStorage persistence
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { Language } from '@/lib/types';
import { STORAGE_KEYS } from '@/lib/constants';

const VALID_LANGUAGES: Language[] = ['ur', 'en', 'pa', 'da'];

export function useLanguagePreference() {
  const [language, setLanguageState] = useState<Language>('en'); // Default to English (Urdu audio pending generation)
  const [hasSelected, setHasSelected] = useState(false); // Track if user has selected a language

  // Load language preference from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
      if (saved && VALID_LANGUAGES.includes(saved as Language)) {
        setLanguageState(saved as Language);
        setHasSelected(true);
      }
    } catch (error) {
      console.error('Failed to load language preference:', error);
    }
  }, []);

  // Set language and persist to localStorage
  const setLanguage = useCallback((newLanguage: Language) => {
    if (!VALID_LANGUAGES.includes(newLanguage)) {
      console.error(`Invalid language: ${newLanguage}`);
      return;
    }

    setLanguageState(newLanguage);
    setHasSelected(true);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEYS.LANGUAGE, newLanguage);
      } catch (error) {
        console.error('Failed to save language preference:', error);
      }
    }
  }, []);

  // Cycle through language options: Urdu → English → Punjabi → Danish → Urdu
  const cycleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const cycle: Record<Language, Language> = {
        'ur': 'en',
        'en': 'pa',
        'pa': 'da',
        'da': 'ur'
      };
      const next = cycle[prev];
      setHasSelected(true);

      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEYS.LANGUAGE, next);
        } catch (error) {
          console.error('Failed to save language preference:', error);
        }
      }

      return next;
    });
  }, []);

  return {
    language,
    setLanguage,
    cycleLanguage,
    hasSelected
  };
}
