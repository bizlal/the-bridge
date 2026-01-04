/**
 * LanguageToggle Component
 * Compact language switcher button for UI controls
 * Cycles through: Urdu → English → Punjabi → Danish
 */

'use client';

import { motion } from 'framer-motion';
import { Language } from '@/lib/types';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LANGUAGE_DISPLAY: Record<Language, { short: string; full: string }> = {
  'ur': { short: 'UR', full: 'اردو' },
  'en': { short: 'EN', full: 'English' },
  'pa': { short: 'PA', full: 'ਪੰਜਾਬੀ' },
  'da': { short: 'DA', full: 'Dansk' },
};

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  const cycleLanguage = () => {
    const cycle: Record<Language, Language> = {
      'ur': 'en',
      'en': 'pa',
      'pa': 'da',
      'da': 'ur'
    };
    onLanguageChange(cycle[language]);
  };

  const currentLang = LANGUAGE_DISPLAY[language];

  return (
    <motion.button
      onClick={cycleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        group relative flex items-center gap-2 px-4 py-2
        bg-gray-800/50 hover:bg-gray-700/50
        border border-gray-700 hover:border-gray-600
        rounded-lg transition-all duration-200
        backdrop-blur-sm
      "
      aria-label={`Change language (current: ${currentLang.full})`}
      title="Press L to cycle languages"
    >
      {/* Language Icon */}
      <svg
        className="w-5 h-5 text-gray-400 group-hover:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>

      {/* Language Code */}
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold text-white">
          {currentLang.short}
        </span>
        <span className="text-xs text-gray-400 group-hover:text-gray-300">
          {currentLang.full}
        </span>
      </div>

      {/* Cycle Indicator */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-gray-500 group-hover:text-gray-400"
        key={language} // Re-trigger animation on language change
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </motion.div>

      {/* Keyboard Shortcut Hint */}
      <div className="
        absolute -top-8 left-1/2 -translate-x-1/2
        px-2 py-1 bg-gray-900 border border-gray-700 rounded
        text-xs text-gray-400 whitespace-nowrap
        opacity-0 group-hover:opacity-100 transition-opacity
        pointer-events-none
      ">
        Press <kbd className="px-1 bg-gray-800 rounded">L</kbd>
      </div>
    </motion.button>
  );
}
