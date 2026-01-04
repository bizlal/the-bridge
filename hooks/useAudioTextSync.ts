/**
 * useAudioTextSync Hook
 * Synchronizes text line visibility with audio playback time
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import { SceneData, AudioTextSyncState } from '@/lib/types';

export function useAudioTextSync(
  scene: SceneData,
  currentTime: number,
  isPlaying: boolean
): AudioTextSyncState {
  const [activeLineIndex, setActiveLineIndex] = useState(-1);
  const [completedLines, setCompletedLines] = useState<Set<number>>(new Set());

  // Determine which text line should be active based on audio time
  useEffect(() => {
    if (!isPlaying && currentTime === 0) {
      // Reset when stopped
      setActiveLineIndex(-1);
      setCompletedLines(new Set());
      return;
    }

    const textLines = scene.textLines;

    // Find the active line index
    for (let i = textLines.length - 1; i >= 0; i--) {
      const line = textLines[i];

      // Use timestamp if available, otherwise fall back to delay-based timing
      let lineTime: number;

      if (line.timestamp !== undefined) {
        // Timestamp in seconds
        lineTime = line.timestamp;
      } else if (line.delay !== undefined) {
        // Delay in milliseconds, convert to seconds
        lineTime = line.delay / 1000;
      } else {
        // Default: lines appear sequentially with 0.3s gaps
        lineTime = i * 0.3;
      }

      if (currentTime >= lineTime) {
        setActiveLineIndex(i);

        // Mark all previous lines as completed
        const completed = new Set<number>();
        for (let j = 0; j < i; j++) {
          completed.add(j);
        }
        setCompletedLines(completed);

        break;
      }
    }

    // If audio time is before first line, show nothing
    const firstLine = textLines[0];
    const firstLineTime = firstLine?.timestamp ?? (firstLine?.delay ?? 0) / 1000;
    if (currentTime < firstLineTime) {
      setActiveLineIndex(-1);
      setCompletedLines(new Set());
    }
  }, [currentTime, isPlaying, scene]);

  const reset = useCallback(() => {
    setActiveLineIndex(-1);
    setCompletedLines(new Set());
  }, []);

  return {
    activeLineIndex,
    completedLines,
    reset
  };
}
