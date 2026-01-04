'use client';

import { LanguageToggleProps, Language } from '@/lib/types';
import { motion } from 'framer-motion';

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  const options: { value: Language; label: string }[] = [
    { value: 'en', label: 'EN' },
    { value: 'ur', label: 'اردو' },
    { value: 'pa', label: 'ਪੰ' },
    { value: 'da', label: 'DA' },
  ];

  const getOffsetX = (lang: Language) => {
    const index = options.findIndex(opt => opt.value === lang);
    return index * 68; // Width per option (64px + 4px gap)
  };

  return (
    <div
      className="relative flex bg-white/10 rounded-full p-1 backdrop-blur-md"
      role="radiogroup"
      aria-label="Language selection"
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute inset-y-1 bg-white rounded-full"
        animate={{ x: getOffsetX(language), width: 64 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Options */}
      {options.map((option) => (
        <button
          key={option.value}
          role="radio"
          aria-checked={language === option.value}
          className={`
            relative z-10 px-4 py-2 rounded-full text-sm font-medium
            transition-colors duration-200 w-16
            ${language === option.value ? 'text-black' : 'text-white/70'}
            focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
          `}
          onClick={() => onLanguageChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
