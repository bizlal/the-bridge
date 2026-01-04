/**
 * TextOverlay Component
 * Displays large scene title overlays with GSAP animation
 */

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextOverlayProps } from '@/lib/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function TextOverlay({ textOverlay, timePeriod, visualStyle, isActive }: TextOverlayProps) {
  const ref = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || !isActive) return;

    if (reducedMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0 });
      if (timeRef.current) gsap.set(timeRef.current, { opacity: 1, y: 0 });
      return;
    }

    // Animate in
    const tl = gsap.timeline();
    tl.from(ref.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });

    if (timeRef.current && timePeriod) {
      tl.from(timeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5');
    }

    return () => {
      tl.kill();
    };
  }, [isActive, textOverlay, timePeriod, reducedMotion]);

  if (!textOverlay && !timePeriod) return null;

  // Position based on visual style
  const positionClasses = {
    'top-left': 'top-12 left-12',
    'top-center': 'top-12 left-1/2 -translate-x-1/2',
    'top-right': 'top-12 right-12',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'bottom-center': 'bottom-12 left-1/2 -translate-x-1/2'
  };

  return (
    <div className="absolute z-10 pointer-events-none top-8 left-1/2 -translate-x-1/2 text-center">
      {/* Time Period */}
      {timePeriod && (
        <div ref={timeRef} className="mb-4">
          <p className="
            text-sm md:text-base lg:text-lg
            text-white/70
            tracking-[0.3em] uppercase font-light
            [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]
          ">
            {timePeriod}
          </p>
        </div>
      )}

      {/* Title Overlay */}
      {textOverlay && (
        <div ref={ref}>
          <h1
            className="
              text-3xl md:text-5xl lg:text-6xl font-bold
              text-white text-center
              tracking-wider uppercase
              [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]
              opacity-90
            "
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)'
            }}
          >
            {textOverlay}
          </h1>
        </div>
      )}
    </div>
  );
}
