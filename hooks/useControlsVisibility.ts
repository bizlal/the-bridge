/**
 * useControlsVisibility Hook
 * Auto-hide logic for control overlay
 */

'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

interface UseControlsVisibilityOptions {
  autoHideDelay?: number; // Milliseconds before hiding (default: 3000)
  disableAutoHide?: boolean; // Disable auto-hide (e.g., when help overlay is open)
}

export function useControlsVisibility(options: UseControlsVisibilityOptions = {}) {
  const { autoHideDelay = 3000, disableAutoHide = false } = options;

  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show controls
  const showControls = useCallback(() => {
    setIsVisible(true);
  }, []);

  // Hide controls
  const hideControls = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Reset hide timer
  const resetTimer = useCallback(() => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Show controls
    setIsVisible(true);

    // Set new timeout if auto-hide is enabled
    if (!disableAutoHide) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);
    }
  }, [autoHideDelay, disableAutoHide]);

  // Set up event listeners for user activity
  useEffect(() => {
    const handleActivity = () => {
      resetTimer();
    };

    // Listen for various user activities
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('click', handleActivity);

    // Initial timer
    resetTimer();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('click', handleActivity);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [resetTimer]);

  // If auto-hide is disabled, always show controls
  useEffect(() => {
    if (disableAutoHide) {
      setIsVisible(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [disableAutoHide]);

  return { isVisible, showControls, hideControls, resetTimer };
}
