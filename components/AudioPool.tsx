/**
 * AudioPool Component
 * Manages all audio elements for scroll-driven playback with multilingual support
 * No visual output - handles audio in background
 */

'use client';

import { useEffect, useRef } from 'react';
import { scenes, SceneData } from '@/lib/scenes';
import { AUDIO_CONFIG, DEFAULT_VOICE } from '@/lib/constants';
import { Language } from '@/lib/types';

export interface AudioPoolHandle {
  getAudio: (sceneId: number) => HTMLAudioElement | null;
  setActiveScene: (sceneId: number) => void;
  fadeVolume: (sceneId: number, targetVolume: number, duration?: number) => void;
}

interface AudioPoolProps {
  language: Language;
  onReady?: (handle: AudioPoolHandle) => void;
}

/**
 * Get the audio file path for a scene, considering voice ID
 */
/**
 * Get the audio file path for a scene, considering voice ID
 */
function getAudioPath(scene: SceneData, language: Language): string {
  const voiceKey = scene.voiceId || DEFAULT_VOICE;
  return `/audio/scene-${scene.id}-${voiceKey}-${language}.mp3`;
}

/**
 * Get legacy audio path (for backward compatibility with old naming)
 */
function getLegacyAudioPath(scene: SceneData, language: Language): string {
  return `/audio/scene-${scene.id}-${language}.mp3`;
}

export default function AudioPool({ language, onReady }: AudioPoolProps) {
  const audioElements = useRef<Map<number, HTMLAudioElement>>(new Map());
  const activeSceneId = useRef<number>(1);

  // Initialize all audio elements (reload when language changes)
  useEffect(() => {
    // Clear existing audio elements
    audioElements.current.forEach((audio) => {
      audio.pause();
      audio.src = '';
    });
    audioElements.current.clear();

    // Load audio files for current language
    scenes.forEach((scene) => {
      const audioPath = getAudioPath(scene, language);
      const audio = new Audio(audioPath);
      audio.preload = 'auto';
      audio.volume = 0; // Start silent

      // Fallback to legacy naming if new naming fails (backward compatibility)
      audio.addEventListener('error', () => {
        const legacyPath = getLegacyAudioPath(scene, language);
        const currentPath = new URL(audio.src).pathname;
        const legacyFilename = legacyPath.split('/').pop();

        if (!currentPath.endsWith(legacyFilename || '')) {
          console.log(`⚠️ Audio failed: ${currentPath}, trying legacy: ${legacyPath}`);
          audio.src = legacyPath;
        } else {
          console.error(`❌ Audio missing for Scene ${scene.id} (${language}): ${legacyPath}`);
          console.error(`   Run: npm run generate-audio -- --scene=${scene.id} --language=${language}`);
        }
      });

      audioElements.current.set(scene.id, audio);
    });

    // Provide handle to parent
    const handle: AudioPoolHandle = {
      getAudio: (sceneId: number) => {
        return audioElements.current.get(sceneId) || null;
      },

      setActiveScene: (sceneId: number) => {
        activeSceneId.current = sceneId;
      },

      fadeVolume: (sceneId: number, targetVolume: number, duration = AUDIO_CONFIG.fadeInDuration) => {
        const audio = audioElements.current.get(sceneId);
        if (!audio) return;

        const startVolume = audio.volume;
        const startTime = Date.now();

        const fade = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          audio.volume = startVolume + (targetVolume - startVolume) * progress;

          if (progress < 1) {
            requestAnimationFrame(fade);
          }
        };

        fade();
      },
    };

    onReady?.(handle);

    // Cleanup
    return () => {
      audioElements.current.forEach((audio) => {
        audio.pause();
        audio.src = '';
      });
      audioElements.current.clear();
    };
  }, [language, onReady]);

  // Load saved volume preference
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedVolume = localStorage.getItem('the-bridge-volume');
      if (savedVolume) {
        const volume = parseFloat(savedVolume);
        if (!isNaN(volume)) {
          // Apply to all audio elements
          audioElements.current.forEach((audio) => {
            audio.volume = volume;
          });
        }
      } else {
        // Set default volume
        audioElements.current.forEach((audio) => {
          audio.volume = AUDIO_CONFIG.defaultVolume;
        });
      }
    } catch (error) {
      console.error('Failed to load volume preference:', error);
    }
  }, []);

  // No render output
  return null;
}
