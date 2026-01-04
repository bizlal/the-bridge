/**
 * useScrollAudioSync Hook
 * Bidirectional synchronization between scroll position and audio playback
 */

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { scenes } from '@/lib/scenes';
import type { AudioPoolHandle } from '@/components/AudioPool';

interface UseScrollAudioSyncOptions {
  audioPool: AudioPoolHandle | null;
  autoPlay?: boolean; // If true, audio drives scroll; if false, scroll drives audio
}

export function useScrollAudioSync({ audioPool, autoPlay = false }: UseScrollAudioSyncOptions) {
  const [activeSceneId, setActiveSceneId] = useState(scenes[0]?.id || 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollingFromAudio = useRef(false);
  const seeking = useRef(false);

  // Helper: Get scene index from scene ID
  const getSceneIndex = useCallback((sceneId: number) => {
    return scenes.findIndex(s => s.id === sceneId);
  }, []);

  // Calculate which scene is currently visible
  const getActiveScene = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Find which scene section we're in
    for (let i = 0; i < scenes.length; i++) {
      const sceneStart = i * viewportHeight;
      const sceneEnd = (i + 1) * viewportHeight;

      if (scrollY >= sceneStart && scrollY < sceneEnd) {
        return scenes[i].id; // Return actual scene ID
      }
    }

    return scenes[scenes.length - 1]?.id || 0; // Default to last scene
  }, []);

  // Sync scroll position to audio time
  const syncScrollToAudio = useCallback(() => {
    if (!audioPool || scrollingFromAudio.current) return;

    const sceneId = activeSceneId;
    const sceneIndex = getSceneIndex(sceneId);
    if (sceneIndex === -1) return;

    const audio = audioPool.getAudio(sceneId);
    if (!audio || !audio.duration || isNaN(audio.duration)) return;

    const viewportHeight = window.innerHeight;
    const sceneScrollStart = sceneIndex * viewportHeight;
    const currentScroll = window.scrollY;
    const scrollWithinScene = currentScroll - sceneScrollStart;
    const sceneProgress = scrollWithinScene / viewportHeight;

    // Map scroll progress to audio time
    const targetTime = sceneProgress * audio.duration;

    // Only seek if difference is significant (avoid jittery playback)
    if (Math.abs(audio.currentTime - targetTime) > 0.1 && !seeking.current) {
      seeking.current = true;
      audio.currentTime = targetTime;
      setTimeout(() => {
        seeking.current = false;
      }, 100);
    }
  }, [audioPool, activeSceneId, getSceneIndex]);

  // Sync audio time to scroll position (auto-play mode)
  const syncAudioToScroll = useCallback(() => {
    if (!audioPool || !autoPlay) return;

    const sceneId = activeSceneId;
    const sceneIndex = getSceneIndex(sceneId);
    if (sceneIndex === -1) return;

    const audio = audioPool.getAudio(sceneId);
    if (!audio || !audio.duration || isNaN(audio.duration)) return;

    const viewportHeight = window.innerHeight;
    const targetScrollY = sceneIndex * viewportHeight + (audio.currentTime / audio.duration) * viewportHeight;

    scrollingFromAudio.current = true;
    window.scrollTo({
      top: targetScrollY,
      behavior: 'auto', // Use 'auto' for smoother sync
    });

    setTimeout(() => {
      scrollingFromAudio.current = false;
    }, 50);
  }, [audioPool, activeSceneId, autoPlay, getSceneIndex]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const newSceneId = getActiveScene();

      if (newSceneId !== activeSceneId) {
        setActiveSceneId(newSceneId);
        audioPool?.setActiveScene(newSceneId);

        // Fade out old scene audio, fade in new scene audio
        scenes.forEach((scene) => {
          if (scene.id === newSceneId) {
            audioPool?.fadeVolume(scene.id, 0.8, 300);
          } else {
            audioPool?.fadeVolume(scene.id, 0, 300);
          }
        });
      }

      // Sync scroll to audio (manual scroll mode)
      if (!autoPlay && !scrollingFromAudio.current) {
        syncScrollToAudio();
      }
    };

    // Throttle scroll handler for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [getActiveScene, activeSceneId, audioPool, autoPlay, syncScrollToAudio]);

  // Auto-play mode: audio drives scroll
  useEffect(() => {
    if (!autoPlay || !isPlaying || !audioPool) return;

    const interval = setInterval(() => {
      syncAudioToScroll();
    }, 50); // Update every 50ms for smooth scrolling

    return () => clearInterval(interval);
  }, [autoPlay, isPlaying, audioPool, syncAudioToScroll]);

  // Play/pause control
  const togglePlayback = useCallback(async () => {
    if (!audioPool) return;

    const audio = audioPool.getAudio(activeSceneId);
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Failed to play audio:', error);
      }
    }
  }, [audioPool, activeSceneId, isPlaying]);

  return {
    activeSceneId,
    isPlaying,
    togglePlayback,
  };
}
