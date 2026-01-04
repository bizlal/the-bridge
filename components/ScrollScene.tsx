/**
 * ScrollScene Component
 * Renders a single scene within the scroll-driven narrative
 * Replaces SceneRenderer with GSAP-based scroll animations
 */

'use client';

import { useRef, useEffect } from 'react';
import { SceneData, LanguageFull } from '@/lib/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BackgroundLayer } from './BackgroundLayer';
import { MediaGallery } from './MediaGallery';

interface ScrollSceneProps {
  sceneData: SceneData;
  sceneIndex: number;
  language: LanguageFull;
}

export default function ScrollScene({ sceneData, sceneIndex, language }: ScrollSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRefsArray = useRef<HTMLDivElement[]>([]);

  // Initialize text refs array
  useEffect(() => {
    textRefsArray.current = textRefsArray.current.slice(0, sceneData.textLines.length);
  }, [sceneData.textLines.length]);

  // Set up scroll-driven animations
  useScrollAnimation({
    sceneData,
    sceneIndex,
    containerRef,
    backgroundRef,
    textRefs: textRefsArray as React.RefObject<HTMLDivElement[]>,
  });

  return (
    <section
      ref={containerRef}
      className="scene-section"
      aria-label={`Scene ${sceneData.id}: ${sceneData.title}`}
      data-scene-id={sceneData.id}
    >
      {/* Background Layer - GSAP will animate opacity */}
      <div ref={backgroundRef} className="absolute inset-0" style={{ opacity: 0 }}>
        <BackgroundLayer
          backgroundImage={sceneData.backgroundImage}
          visualStyle={sceneData.visualStyle}
          isActive={true}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16 lg:px-24">
        {/* Scene Title/Overlay */}
        {sceneData.textOverlay && (
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white drop-shadow-2xl">
              {sceneData.textOverlay}
            </h2>
            {sceneData.timePeriod && (
              <p className="mt-4 text-lg md:text-xl text-white/80 tracking-widest">
                {sceneData.timePeriod}
              </p>
            )}
          </div>
        )}

        {/* Text Lines - GSAP will animate each line */}
        <div className="max-w-4xl w-full space-y-6">
          {sceneData.textLines.map((line, index) => {
            const isUrdu = 'urdu' in line;
            const text = language === 'urdu' && isUrdu ? line.urdu : line.english;

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) textRefsArray.current[index] = el;
                }}
                className={`text-xl md:text-2xl lg:text-3xl leading-relaxed ${
                  language === 'urdu' && isUrdu ? 'font-urdu text-right' : 'text-left'
                }`}
                style={{ opacity: 0 }} // GSAP will animate this
                lang={language === 'urdu' && isUrdu ? 'ur' : 'en'}
              >
                <p className="text-white drop-shadow-lg">{text}</p>
              </div>
            );
          })}
        </div>

        {/* Evidence Gallery - Photos, Videos, Documents */}
        {sceneData.gallery && sceneData.gallery.length > 0 && (
          <div className="mt-12 max-w-6xl w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Evidence
            </h3>
            <MediaGallery media={sceneData.gallery} />
          </div>
        )}

        {/* Inline Media - Timestamped to audio */}
        {sceneData.media && sceneData.media.length > 0 && (
          <div className="mt-8 max-w-4xl w-full">
            <MediaGallery media={sceneData.media} className="grid-cols-1" />
          </div>
        )}
      </div>

      {/* Screen Reader - Scene Information */}
      <div className="sr-only" role="status" aria-live="polite">
        Now viewing Scene {sceneData.id}: {sceneData.title}
      </div>
    </section>
  );
}
