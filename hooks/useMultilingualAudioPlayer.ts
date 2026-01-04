/**
 * useMultilingualAudioPlayer Hook
 * Enhanced audio player with support for smooth language transitions
 * Handles crossfade when switching languages mid-playback
 */

'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Language } from '@/lib/types';
import { AUDIO_CONFIG } from '@/lib/constants';

interface UseMultilingualAudioPlayerOptions {
  sceneId: number;
  language: Language;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
}

export function useMultilingualAudioPlayer({
  sceneId,
  language,
  onTimeUpdate,
  onEnded,
  onError
}: UseMultilingualAudioPlayerOptions) {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const fadingAudioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Construct audio file path based on scene and language
  const getAudioSrc = useCallback((sceneNum: number, lang: Language) => {
    return `/audio/scene-${sceneNum}-${lang}.mp3`;
  }, []);

  // Initialize audio element once
  useEffect(() => {
    if (!currentAudioRef.current) {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.volume = AUDIO_CONFIG.defaultVolume;
      currentAudioRef.current = audio;
    }
  }, []);

  // Smooth crossfade between audio tracks
  const crossfadeToNewLanguage = useCallback(async (newSrc: string, currentPlaybackTime: number, wasPlaying: boolean) => {
    if (!currentAudioRef.current) return;

    const oldAudio = currentAudioRef.current;
    const newAudio = new Audio(newSrc);
    newAudio.volume = 0; // Start silent
    newAudio.preload = 'auto';

    // Save reference for cleanup
    fadingAudioRef.current = oldAudio;

    // Load and seek new audio to same position
    await new Promise((resolve) => {
      newAudio.addEventListener('loadedmetadata', () => {
        newAudio.currentTime = Math.min(currentPlaybackTime, newAudio.duration);
        resolve(null);
      }, { once: true });
      newAudio.load();
    });

    // Start playing new audio if was playing
    if (wasPlaying) {
      await newAudio.play();
    }

    // Update reference
    currentAudioRef.current = newAudio;

    // Crossfade over 500ms
    const fadeSteps = 20;
    const fadeInterval = AUDIO_CONFIG.fadeOutDuration / fadeSteps;
    let step = 0;

    fadeIntervalRef.current = setInterval(() => {
      step++;
      const progress = step / fadeSteps;

      // Fade out old audio
      if (fadingAudioRef.current) {
        fadingAudioRef.current.volume = Math.max(0, AUDIO_CONFIG.defaultVolume * (1 - progress));
      }

      // Fade in new audio
      if (currentAudioRef.current) {
        currentAudioRef.current.volume = Math.min(AUDIO_CONFIG.defaultVolume, AUDIO_CONFIG.defaultVolume * progress);
      }

      // Complete crossfade
      if (step >= fadeSteps) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }

        // Stop and cleanup old audio
        if (fadingAudioRef.current) {
          fadingAudioRef.current.pause();
          fadingAudioRef.current.src = '';
          fadingAudioRef.current = null;
        }
      }
    }, fadeInterval);

  }, []);

  // Handle language change with smooth transition
  useEffect(() => {
    const newSrc = getAudioSrc(sceneId, language);
    const audio = currentAudioRef.current;
    if (!audio) return;

    // Define event handlers (used by both crossfade and normal load paths)
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      onTimeUpdate?.(audio.currentTime, audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onEnded?.();
    };

    const handleError = () => {
      const err = new Error(`Audio loading failed: ${newSrc}`);
      setError(err);
      setLoading(false);
      onError?.(err);
    };

    const handleCanPlay = () => {
      setLoading(false);
    };

    const handleLoadStart = () => {
      setLoading(true);
    };

    const attachEventHandlers = () => {
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('loadstart', handleLoadStart);
    };

    // If audio is already playing and language changed, crossfade
    const wasPlaying = !audio.paused;
    const currentPlaybackTime = audio.currentTime;

    if (wasPlaying && currentPlaybackTime > 0) {
      // Smooth crossfade
      setLoading(true);
      crossfadeToNewLanguage(newSrc, currentPlaybackTime, wasPlaying)
        .then(() => {
          setLoading(false);
          attachEventHandlers();
        })
        .catch((err) => {
          console.error('Crossfade failed:', err);
          setError(err instanceof Error ? err : new Error('Crossfade failed'));
          setLoading(false);
        });
    } else {
      // Normal load (not playing or starting fresh)

      // Pause and load new source
      audio.pause();
      setIsPlaying(false);
      setLoading(true);
      audio.src = newSrc;
      audio.load();

      attachEventHandlers();

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, [sceneId, language, getAudioSrc, crossfadeToNewLanguage, onTimeUpdate, onEnded, onError]);

  const play = useCallback(async () => {
    if (!currentAudioRef.current) return;
    try {
      await currentAudioRef.current.play();
      setIsPlaying(true);
      setError(null);
    } catch (err) {
      console.error('Play failed:', err);
      const error = err instanceof Error ? err : new Error('Play failed');
      setError(error);
      onError?.(error);
    }
  }, [onError]);

  const pause = useCallback(() => {
    if (!currentAudioRef.current) return;
    currentAudioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const seek = useCallback((time: number) => {
    if (!currentAudioRef.current) return;
    const clampedTime = Math.max(0, Math.min(time, duration));
    currentAudioRef.current.currentTime = clampedTime;
    setCurrentTime(clampedTime);
  }, [duration]);

  const setVolume = useCallback((volume: number) => {
    if (!currentAudioRef.current) return;
    const clampedVolume = Math.max(0, Math.min(1, volume));
    currentAudioRef.current.volume = clampedVolume;

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('the-bridge-volume', clampedVolume.toString());
      } catch (error) {
        console.error('Failed to save volume preference:', error);
      }
    }
  }, []);

  // Load saved volume on mount
  useEffect(() => {
    if (typeof window === 'undefined' || !currentAudioRef.current) return;

    try {
      const savedVolume = localStorage.getItem('the-bridge-volume');
      if (savedVolume) {
        const volume = parseFloat(savedVolume);
        if (!isNaN(volume)) {
          currentAudioRef.current.volume = volume;
        }
      }
    } catch (error) {
      console.error('Failed to load volume preference:', error);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.src = '';
      }
      if (fadingAudioRef.current) {
        fadingAudioRef.current.pause();
        fadingAudioRef.current.src = '';
      }
    };
  }, []);

  return {
    play,
    pause,
    seek,
    setVolume,
    isPlaying,
    currentTime,
    duration,
    loading,
    error
  };
}
