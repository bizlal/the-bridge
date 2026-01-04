'use client';

import { SceneControlsProps } from '@/lib/types';
import { PlayIcon } from '@/components/icons/PlayIcon';
import { PauseIcon } from '@/components/icons/PauseIcon';
import { LeftArrowIcon } from '@/components/icons/LeftArrowIcon';
import { RightArrowIcon } from '@/components/icons/RightArrowIcon';

export function SceneControls({
  currentScene,
  totalScenes,
  isPlaying,
  onNext,
  onPrevious,
  onTogglePlay,
}: SceneControlsProps) {
  const isPreviousDisabled = currentScene === 0;
  const isNextDisabled = currentScene === totalScenes - 1;

  return (
    <div className="flex items-center justify-center gap-4 px-6 py-4">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20
                   disabled:opacity-30 disabled:cursor-not-allowed
                   transition-all duration-200 ease-out
                   hover:scale-105 active:scale-95
                   flex items-center justify-center
                   focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`Previous scene (currently on ${currentScene + 1} of ${totalScenes})`}
      >
        <LeftArrowIcon className="w-6 h-6 text-white" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={onTogglePlay}
        className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30
                   transition-all duration-200 ease-out
                   hover:scale-105 active:scale-95
                   flex items-center justify-center
                   focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={isPlaying ? "Pause narration" : "Play narration"}
      >
        {isPlaying ? (
          <PauseIcon className="w-7 h-7 text-white" />
        ) : (
          <PlayIcon className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20
                   disabled:opacity-30 disabled:cursor-not-allowed
                   transition-all duration-200 ease-out
                   hover:scale-105 active:scale-95
                   flex items-center justify-center
                   focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`Next scene (currently on ${currentScene + 1} of ${totalScenes})`}
      >
        <RightArrowIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
