/**
 * useScrollAnimation Hook
 * Smooth Intersection Observer-based animations for scene transitions
 */

'use client';

import { useEffect, useRef } from 'react';
import { SceneData } from '@/lib/types';
import { useReducedMotion } from './useReducedMotion';

interface UseScrollAnimationOptions {
  sceneData: SceneData;
  sceneIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  backgroundRef?: React.RefObject<HTMLDivElement | null>;
  textRefs?: React.RefObject<HTMLDivElement[]>;
}

export function useScrollAnimation({
  sceneData,
  sceneIndex,
  containerRef,
  backgroundRef,
  textRefs,
}: UseScrollAnimationOptions) {
  const prefersReducedMotion = useReducedMotion();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) {
      if (backgroundRef?.current) {
        backgroundRef.current.style.opacity = '1';
      }
      if (textRefs?.current) {
        textRefs.current.forEach((el) => {
          if (el) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      }
      return;
    }

    // Create intersection observer for crossfade transitions
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Crossfade: Start fading in early and fade out late for smooth blending
          const intersectionRatio = entry.intersectionRatio;

          if (entry.isIntersecting) {
            // Fade in background with crossfade timing
            if (backgroundRef?.current) {
              backgroundRef.current.style.transition = 'opacity 1.2s ease-in-out';
              backgroundRef.current.style.opacity = String(Math.min(1, intersectionRatio * 2));
            }

            // Stagger fade in text lines
            if (textRefs?.current && intersectionRatio > 0.3) {
              textRefs.current.forEach((el, i) => {
                if (el) {
                  setTimeout(() => {
                    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                  }, i * 100);
                }
              });
            }
          } else {
            // Fade out when leaving viewport for crossfade
            if (backgroundRef?.current) {
              backgroundRef.current.style.transition = 'opacity 1.2s ease-in-out';
              backgroundRef.current.style.opacity = '0';
            }

            // Fade out text
            if (textRefs?.current) {
              textRefs.current.forEach((el) => {
                if (el) {
                  el.style.opacity = '0';
                  el.style.transform = 'translateY(-20px)';
                }
              });
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '20% 0px 20% 0px', // Extended margin for smoother crossfade
      }
    );

    observerRef.current.observe(container);

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sceneData.id, sceneIndex, containerRef, backgroundRef, textRefs, prefersReducedMotion]);
}
