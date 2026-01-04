/**
 * useNarrativeState Hook
 * Manages the narrative playback state including current scene, navigation, and playback controls
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { NarrativeState } from '@/lib/types';
import { SCENE_CONFIG, STORAGE_KEYS } from '@/lib/constants';

export function useNarrativeState(): NarrativeState {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedScenes, setCompletedScenes] = useState<number[]>([]);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedScene = localStorage.getItem(STORAGE_KEYS.CURRENT_SCENE);
      const savedCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED_SCENES);

      if (savedScene) {
        const sceneIndex = parseInt(savedScene);
        if (sceneIndex >= SCENE_CONFIG.minSceneIndex && sceneIndex <= SCENE_CONFIG.maxSceneIndex) {
          setCurrentSceneIndex(sceneIndex);
        }
      }

      if (savedCompleted) {
        const completed = JSON.parse(savedCompleted) as number[];
        setCompletedScenes(completed);
      }
    } catch (error) {
      console.error('Failed to load narrative state from localStorage:', error);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_SCENE, currentSceneIndex.toString());
      localStorage.setItem(STORAGE_KEYS.COMPLETED_SCENES, JSON.stringify(completedScenes));
    } catch (error) {
      console.error('Failed to save narrative state to localStorage:', error);
    }
  }, [currentSceneIndex, completedScenes]);

  // Navigate to a specific scene
  const goToScene = useCallback((index: number) => {
    if (index < SCENE_CONFIG.minSceneIndex || index > SCENE_CONFIG.maxSceneIndex) {
      console.warn(`Invalid scene index: ${index}. Must be between ${SCENE_CONFIG.minSceneIndex} and ${SCENE_CONFIG.maxSceneIndex}`);
      return;
    }

    setCurrentSceneIndex(index);
    setIsPlaying(false); // Pause when jumping to a scene
  }, []);

  // Navigate to next scene
  const nextScene = useCallback(() => {
    // Mark current scene as completed
    setCompletedScenes(prev => {
      if (!prev.includes(currentSceneIndex)) {
        return [...prev, currentSceneIndex];
      }
      return prev;
    });

    if (currentSceneIndex < SCENE_CONFIG.maxSceneIndex) {
      setCurrentSceneIndex(prev => prev + 1);
    } else {
      // At the end, pause playback
      setIsPlaying(false);
    }
  }, [currentSceneIndex]);

  // Navigate to previous scene
  const previousScene = useCallback(() => {
    if (currentSceneIndex > SCENE_CONFIG.minSceneIndex) {
      setCurrentSceneIndex(prev => prev - 1);
      setIsPlaying(false); // Pause when going back
    }
  }, [currentSceneIndex]);

  // Toggle playback state
  const togglePlayback = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Reset narrative to beginning
  const resetNarrative = useCallback(() => {
    setCurrentSceneIndex(0);
    setIsPlaying(false);
    setCompletedScenes([]);

    // Clear localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_SCENE);
        localStorage.removeItem(STORAGE_KEYS.COMPLETED_SCENES);
      } catch (error) {
        console.error('Failed to clear narrative state:', error);
      }
    }
  }, []);

  return {
    currentSceneIndex,
    isPlaying,
    completedScenes,
    goToScene,
    nextScene,
    previousScene,
    togglePlayback,
    resetNarrative
  };
}
