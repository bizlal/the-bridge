/**
 * useAudioPlayer Hook
 * HTML5 Audio wrapper with React hooks for audio playback control
 */

'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { AudioPlayerControls } from '@/lib/types';
import { AUDIO_CONFIG } from '@/lib/constants';

interface UseAudioPlayerOptions {
  src: string;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
}

export function useAudioPlayer({
  src,
  onTimeUpdate,
  onEnded,
  onError
}: UseAudioPlayerOptions): AudioPlayerControls {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Initialize audio element once
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.volume = AUDIO_CONFIG.defaultVolume;
      audioRef.current = audio;
    }
  }, []);

  // Update src and attach handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

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
      const err = new Error(`Audio loading failed: ${src}`);
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

    // Pause before changing src
    audio.pause();
    setIsPlaying(false);
    setLoading(true);

    // Update src
    audio.src = src;
    audio.load();

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, [src, onTimeUpdate, onEnded, onError]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
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
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    const clampedTime = Math.max(0, Math.min(time, duration));
    audioRef.current.currentTime = clampedTime;
    setCurrentTime(clampedTime);
  }, [duration]);

  const setVolume = useCallback((volume: number) => {
    if (!audioRef.current) return;
    const clampedVolume = Math.max(0, Math.min(1, volume));
    audioRef.current.volume = clampedVolume;

    // Save volume preference
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
    if (typeof window === 'undefined' || !audioRef.current) return;

    try {
      const savedVolume = localStorage.getItem('the-bridge-volume');
      if (savedVolume) {
        const volume = parseFloat(savedVolume);
        if (!isNaN(volume)) {
          audioRef.current.volume = volume;
        }
      }
    } catch (error) {
      console.error('Failed to load volume preference:', error);
    }
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
