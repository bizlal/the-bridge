/**
 * LanguageSelector Component
 * Displays language options for user to select (Urdu, English, Punjabi, Danish)
 * Shows on Scene 0 with pause marker
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '@/lib/types';
import { isAudioAvailable } from '@/lib/audioAvailability';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageSelect: (language: Language) => void;
  isVisible: boolean;
  currentSceneId?: number;
}

const LANGUAGE_OPTIONS = [
  { code: 'ur' as Language, label: 'اردو', nativeLabel: 'Urdu' },
  { code: 'en' as Language, label: 'English', nativeLabel: 'English' },
  { code: 'pa' as Language, label: 'ਪੰਜਾਬੀ', nativeLabel: 'Punjabi' },
  { code: 'da' as Language, label: 'Dansk', nativeLabel: 'Danish' },
];

export function LanguageSelector({
  currentLanguage,
  onLanguageSelect,
  isVisible,
  currentSceneId = 0
}: LanguageSelectorProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4"
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Language
            </h2>
            <p className="text-gray-400 text-center mb-6 text-sm">
              اپنی زبان منتخب کریں
            </p>

            {/* Language Options */}
            <div className="space-y-3">
              {LANGUAGE_OPTIONS.map((option) => {
                const available = isAudioAvailable(currentSceneId, option.code);

                return (
                  <motion.button
                    key={option.code}
                    onClick={() => available && onLanguageSelect(option.code)}
                    whileHover={available ? { scale: 1.02 } : {}}
                    whileTap={available ? { scale: 0.98 } : {}}
                    disabled={!available}
                    className={`
                      w-full p-4 rounded-xl border-2 transition-all duration-200
                      ${
                        currentLanguage === option.code
                          ? 'border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/20'
                          : available
                            ? 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800'
                            : 'border-gray-800 bg-gray-900/30 opacity-50 cursor-not-allowed'
                      }
                    `}
                  >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Language Icon/Indicator */}
                      {!available ? (
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      ) : (
                        <div
                          className={`
                            w-3 h-3 rounded-full transition-all
                            ${
                              currentLanguage === option.code
                                ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                                : 'bg-gray-600'
                            }
                          `}
                        />
                      )}

                      {/* Language Labels */}
                      <div className="text-left">
                        <div className={`text-lg font-semibold ${available ? 'text-white' : 'text-gray-600'}`}>
                          {option.label}
                        </div>
                        <div className={`text-sm ${available ? 'text-gray-400' : 'text-gray-700'}`}>
                          {option.nativeLabel}
                          {!available && ' (Audio pending)'}
                        </div>
                      </div>
                    </div>

                    {/* Selected Indicator */}
                    {currentLanguage === option.code && available && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-blue-400"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
              })}
            </div>

            {/* Helper Text */}
            <p className="text-gray-500 text-center mt-6 text-xs">
              You can change the language anytime by pressing 'L'
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
