/**
 * useTextAnimation Hook
 * Encapsulates GSAP text animation logic for text reveals
 */

'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { AnimationEffect } from '@/lib/types';
import { ANIMATION_CONFIG } from '@/lib/constants';

interface UseTextAnimationOptions {
  delay?: number;
  duration?: number;
  effect?: AnimationEffect;
  isActive?: boolean;
  reducedMotion?: boolean;
}

export function useTextAnimation({
  delay = 0,
  duration = ANIMATION_CONFIG.textFadeInDuration / 1000,
  effect = 'fadeUp',
  isActive = true,
  reducedMotion = false
}: UseTextAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!ref.current || !isActive) return;

    // Skip animation if reduced motion is preferred
    if (reducedMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0 });
      return;
    }

    // Kill previous timeline if it exists
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create animation based on effect type
    const tl = gsap.timeline({
      delay: delay / 1000 // Convert ms to seconds
    });

    switch (effect) {
      case 'fadeUp':
        tl.from(ref.current, {
          opacity: 0,
          y: 30,
          duration,
          ease: 'power2.out'
        });
        break;

      case 'typewriter':
        // Typewriter effect: reveal characters one by one
        if (ref.current.textContent) {
          const text = ref.current.textContent;
          ref.current.textContent = '';
          ref.current.style.opacity = '1';

          const chars = text.split('');
          const charDuration = ANIMATION_CONFIG.typingSpeed / 1000;

          chars.forEach((char, index) => {
            tl.call(() => {
              if (ref.current) {
                ref.current.textContent += char;
              }
            }, [], index * charDuration);
          });
        }
        break;

      case 'splitText':
        // Split text into words and animate each word
        if (ref.current.textContent) {
          const words = ref.current.textContent.split(' ');
          ref.current.innerHTML = words
            .map(word => `<span style="display: inline-block; opacity: 0;">${word}</span>`)
            .join(' ');

          const wordElements = ref.current.querySelectorAll('span');
          tl.to(wordElements, {
            opacity: 1,
            y: 0,
            duration: duration / 2,
            stagger: 0.05,
            ease: 'power2.out'
          });
        }
        break;

      default:
        // Default fade in
        tl.from(ref.current, {
          opacity: 0,
          duration,
          ease: 'power2.out'
        });
    }

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [delay, duration, effect, isActive, reducedMotion]);

  return ref;
}
