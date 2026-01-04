'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HelpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpOverlay({ isOpen, onClose }: HelpOverlayProps) {
  // Trap focus and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const shortcuts = [
    { keys: ['Space', '→'], description: 'Next scene' },
    { keys: ['←'], description: 'Previous scene' },
    { keys: ['P'], description: 'Play/Pause' },
    { keys: ['L'], description: 'Cycle language' },
    { keys: ['T'], description: 'Toggle theme' },
    { keys: ['H', '?'], description: 'Show this help' },
    { keys: ['ESC'], description: 'Close help' },
    { keys: ['Home'], description: 'First scene' },
    { keys: ['End'], description: 'Last scene' },
    { keys: ['1-9'], description: 'Jump to scene' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts help"
        >
          <motion.div
            className="bg-black/60 backdrop-blur-md border border-white/20
                       rounded-2xl p-8 max-w-2xl w-full mx-4
                       max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Keyboard Shortcuts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex gap-1 flex-shrink-0">
                    {shortcut.keys.map((key, keyIndex) => (
                      <kbd
                        key={keyIndex}
                        className="px-3 py-2 bg-white/10 border border-white/30
                                   rounded-lg text-white text-sm font-mono
                                   min-w-[2.5rem] text-center"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                  <span className="text-white/70 text-sm">
                    {shortcut.description}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20
                         rounded-full text-white transition-colors duration-200
                         focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Close (ESC)
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
