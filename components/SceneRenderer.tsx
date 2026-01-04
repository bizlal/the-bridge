/**
 * SceneRenderer Component
 * Orchestrates the rendering of a single scene with background, text overlay, and animated text lines
 */

'use client';

import { SceneRendererProps } from '@/lib/types';
import { BackgroundLayer } from './BackgroundLayer';
import { TextOverlay } from './TextOverlay';
import { AnimatedTextLine } from './AnimatedTextLine';
import { getVisualStyleConfig } from '@/lib/visualStyles';
import { motion, AnimatePresence } from 'framer-motion';

export function SceneRenderer({
  scene,
  language,
  isActive,
  onSceneComplete
}: SceneRendererProps) {
  const styleConfig = getVisualStyleConfig(scene.visualStyle);

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={`scene-${scene.id}`}
          className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Background Layer */}
          <BackgroundLayer
            visualStyle={scene.visualStyle}
            backgroundImage={scene.backgroundImage}
            isActive={isActive}
          />

          {/* Content Container */}
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-20">
            {/* Text Overlay (Title + Time Period) */}
            <TextOverlay
              textOverlay={scene.textOverlay}
              timePeriod={scene.timePeriod}
              visualStyle={scene.visualStyle}
              isActive={isActive}
            />

            {/* Text Lines Container */}
            <div className={`
              mt-32 space-y-4
              ${styleConfig.layout}
              ${styleConfig.textAlign === 'center' ? 'text-center' : ''}
              ${styleConfig.textAlign === 'left' ? 'text-left' : ''}
              ${styleConfig.textAlign === 'right' ? 'text-right' : ''}
            `}>
              {scene.textLines.map((line, index) => (
                <AnimatedTextLine
                  key={`${scene.id}-line-${index}`}
                  english={line.english}
                  urdu={line.urdu}
                  language={language}
                  delay={line.delay}
                  timestamp={line.timestamp}
                  index={index}
                  visualStyle={scene.visualStyle}
                  isActive={isActive}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
