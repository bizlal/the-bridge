'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Language, AudioPlayerControls } from '@/lib/types';
import { useControlsVisibility } from '@/hooks/useControlsVisibility';
import { SceneControls } from './SceneControls';
import { ProgressIndicator } from './ProgressIndicator';
import { AudioControls } from './AudioControls';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { HelpOverlay } from './HelpOverlay';
import { HelpIcon } from '@/components/icons/HelpIcon';

interface ControlsOverlayProps {
  // Scene controls
  currentScene: number;
  totalScenes: number;
  onNext: () => void;
  onPrevious: () => void;
  onSceneSelect: (index: number) => void;

  // Playback controls
  isPlaying: boolean;
  onTogglePlay: () => void;

  // Audio controls
  audioControls: AudioPlayerControls;

  // Settings
  language: Language;
  onLanguageChange: (language: Language) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function ControlsOverlay({
  currentScene,
  totalScenes,
  onNext,
  onPrevious,
  onSceneSelect,
  isPlaying,
  onTogglePlay,
  audioControls,
  language,
  onLanguageChange,
  isDarkMode,
  onToggleTheme,
}: ControlsOverlayProps) {
  const [showHelp, setShowHelp] = useState(false);

  // Auto-hide controls (disabled when help is open)
  const { isVisible } = useControlsVisibility({
    autoHideDelay: 3000,
    disableAutoHide: showHelp,
  });

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40
                   flex items-center justify-end gap-3
                   p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
        <button
          onClick={() => setShowHelp(true)}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                     transition-all duration-200 ease-out
                     hover:scale-105 active:scale-95
                     flex items-center justify-center
                     focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="Show keyboard shortcuts"
        >
          <HelpIcon className="w-5 h-5 text-white" />
        </button>
      </motion.div>

      {/* Bottom Controls */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40
                   bg-gradient-to-t from-black/80 via-black/40 to-transparent
                   pt-12 pb-6"
        initial={{ y: 200, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 px-4">
          {/* Audio Controls */}
          <AudioControls {...audioControls} />

          {/* Progress Indicator */}
          <ProgressIndicator
            currentScene={currentScene}
            totalScenes={totalScenes}
            onSceneSelect={onSceneSelect}
          />

          {/* Scene Navigation */}
          <SceneControls
            currentScene={currentScene}
            totalScenes={totalScenes}
            isPlaying={isPlaying}
            onNext={onNext}
            onPrevious={onPrevious}
            onTogglePlay={onTogglePlay}
          />
        </div>
      </motion.div>

      {/* Help Overlay */}
      <HelpOverlay isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </>
  );
}
