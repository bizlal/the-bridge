'use client';

import { useState } from 'react';
import { ProgressIndicatorProps } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { scenes } from '@/lib/scenes';

export function ProgressIndicator({
  currentScene,
  totalScenes,
  onSceneSelect,
}: ProgressIndicatorProps) {
  const [hoveredScene, setHoveredScene] = useState<number | null>(null);

  return (
    <div
      className="flex items-center justify-center gap-2 px-6 py-3 relative"
      role="navigation"
      aria-label="Scene progress"
    >
      {Array.from({ length: totalScenes }).map((_, index) => {
        const isCurrent = index === currentScene;
        const isCompleted = index < currentScene;
        const sceneTitle = scenes[index]?.title || `Scene ${index + 1}`;

        return (
          <div key={index} className="relative">
            <button
              onClick={() => onSceneSelect(index)}
              onMouseEnter={() => setHoveredScene(index)}
              onMouseLeave={() => setHoveredScene(null)}
              className={`
                rounded-full transition-all duration-300
                ${
                  isCurrent
                    ? 'w-3 h-3 bg-white'
                    : isCompleted
                    ? 'w-2.5 h-2.5 bg-white/60'
                    : 'w-2 h-2 border border-white/30 bg-transparent'
                }
                hover:scale-125
                focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              `}
              aria-label={`Go to scene ${index + 1}: ${sceneTitle}`}
              aria-current={isCurrent ? 'true' : undefined}
            >
              <span className="sr-only">Scene {index + 1}</span>
            </button>

            {/* Tooltip on hover */}
            <AnimatePresence>
              {hoveredScene === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                             bg-black/90 backdrop-blur-md text-white text-xs
                             px-3 py-2 rounded-lg whitespace-nowrap
                             pointer-events-none z-50"
                >
                  {sceneTitle}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1
                                  w-0 h-0 border-l-4 border-r-4 border-t-4
                                  border-l-transparent border-r-transparent border-t-black/90" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
