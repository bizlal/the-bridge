/**
 * BackgroundLayer Component
 * Renders scene backgrounds with CSS gradients and optional Next.js Image optimization
 */

'use client';

import { BackgroundLayerProps } from '@/lib/types';
import { getVisualStyleConfig, fallbackColors } from '@/lib/visualStyles';
import { motion } from 'framer-motion';

export function BackgroundLayer({ visualStyle, backgroundImage, isActive }: BackgroundLayerProps) {
  const styleConfig = getVisualStyleConfig(visualStyle);

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Primary Background: Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: styleConfig.gradient,
          backgroundColor: fallbackColors[visualStyle]
        }}
      />

      {/* Overlay Layer */}
      <div
        className="absolute inset-0"
        style={{
          background: styleConfig.overlay
        }}
      />

      {/* Optional: Background Image (if provided and exists) */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: styleConfig.filter
          }}
        />
      )}

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
        }}
      />
    </motion.div>
  );
}
