'use client';

import { ThemeToggleProps } from '@/lib/types';
import { motion } from 'framer-motion';
import { SunIcon } from '@/components/icons/SunIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';

export function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                 flex items-center justify-center
                 transition-all duration-300 ease-out
                 hover:scale-105 active:scale-95
                 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkMode}
    >
      <motion.div
        animate={{ rotate: isDarkMode ? 0 : 180 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {isDarkMode ? (
          <MoonIcon className="w-5 h-5 text-white" />
        ) : (
          <SunIcon className="w-5 h-5 text-white" />
        )}
      </motion.div>
    </button>
  );
}
