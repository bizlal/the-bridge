/**
 * AudioSubtitles Component
 * Displays synchronized subtitles for the audio narration
 * Supports: Urdu, English, Punjabi, Danish
 */

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '@/lib/types';

interface AudioSubtitlesProps {
  audioScript: string;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  language: Language;
}

export function AudioSubtitles({
  audioScript,
  currentTime,
  duration,
  isPlaying,
  language,
}: AudioSubtitlesProps) {
  const [currentText, setCurrentText] = useState<string>('');

  useEffect(() => {
    if (!audioScript || !duration || duration === 0) {
      setCurrentText('');
      return;
    }

    // Split script into sentences (by periods and paragraph breaks)
    const sentences = audioScript
      .split(/(?:\. |\.\.\. |\n\n)/g)
      .filter(s => s.trim().length > 0)
      .map(s => s.trim());

    if (sentences.length === 0) {
      setCurrentText('');
      return;
    }

    // Calculate which sentence should be showing based on audio progress
    const progress = currentTime / duration;
    const sentenceIndex = Math.floor(progress * sentences.length);
    const currentSentence = sentences[Math.min(sentenceIndex, sentences.length - 1)];

    setCurrentText(currentSentence || '');
  }, [audioScript, currentTime, duration]);

  // Don't show subtitles if not playing or no text
  if (!isPlaying || !currentText) {
    return null;
  }

  // Language-specific configuration
  const langConfig = language === 'ur'
    ? { dir: 'rtl' as const, lang: 'ur', align: 'text-right', font: 'font-serif' }
    : language === 'pa'
    ? { dir: 'ltr' as const, lang: 'pa', align: 'text-left', font: 'font-sans' }
    : language === 'da'
    ? { dir: 'ltr' as const, lang: 'da', align: 'text-left', font: 'font-sans' }
    : { dir: 'ltr' as const, lang: 'en', align: 'text-left', font: 'font-sans' };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentText}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-24 left-0 right-0 z-40 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto px-8">
          <div
            className={`
              bg-black/80 backdrop-blur-md
              px-6 py-4 rounded-lg
              shadow-2xl
              ${langConfig.align}
              ${langConfig.font}
            `}
            dir={langConfig.dir}
          >
            <p
              className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed"
              lang={langConfig.lang}
            >
              {currentText}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
