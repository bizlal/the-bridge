/**
 * Audio Availability Checker
 * Determines which languages have audio files available for specific scenes
 */

import { Language } from './types';

/**
 * Scenes with missing audio by language
 * Update this when generating new audio
 *
 * To check: npm run check-audio
 * To generate: npm run generate-audio -- --language=ur
 */
const MISSING_AUDIO: Record<Language, number[]> = {
  'ur': [1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 26, 35.5, 35.75, 36.5, 36.75, 36.85, 39.1, 39.2, 39.3, 41.5, 43, 43.5],
  'en': [43.5],
  'pa': [1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 35.5, 35.75, 36.5, 36.75, 36.85, 39.1, 39.2, 39.3, 40, 41.5, 43, 43.5],
  'da': [1.5, 4.5, 12.5, 14.5, 21.2, 21.5, 22.5, 35.5, 35.75, 36.5, 36.75, 36.85, 36.9, 36.96, 39.1, 39.2, 39.3, 41.5, 43, 43.5],
};

/**
 * Check if a specific scene has audio in a given language
 */
export function isAudioAvailable(sceneId: number, language: Language): boolean {
  const missing = MISSING_AUDIO[language] || [];
  return !missing.includes(sceneId);
}

/**
 * Get the first available language for a specific scene
 * Priority: English → Urdu → Punjabi → Danish
 */
export function getAvailableLanguageForScene(sceneId: number, preferredLanguage?: Language): Language {
  const allLangs: Language[] = preferredLanguage
    ? [preferredLanguage, 'en' as Language, 'ur' as Language, 'pa' as Language, 'da' as Language]
    : ['en' as Language, 'ur' as Language, 'pa' as Language, 'da' as Language];

  const priorities = allLangs.filter((lang, index, self) => self.indexOf(lang) === index);

  for (const lang of priorities) {
    if (isAudioAvailable(sceneId, lang)) {
      return lang;
    }
  }

  // Fallback to English (should always have audio except scene 43.5)
  return 'en';
}

/**
 * Get language name for display in notifications
 */
export function getLanguageName(language: Language): string {
  const names: Record<Language, string> = {
    'ur': 'Urdu',
    'en': 'English',
    'pa': 'Punjabi',
    'da': 'Danish'
  };
  return names[language];
}

