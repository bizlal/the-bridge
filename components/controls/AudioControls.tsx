'use client';

import { useState, useEffect, useRef } from 'react';
import { AudioPlayerControls } from '@/lib/types';
import { PlayIcon } from '@/components/icons/PlayIcon';
import { PauseIcon } from '@/components/icons/PauseIcon';
import { VolumeIcon } from '@/components/icons/VolumeIcon';
import { formatTime } from '@/lib/utils/formatTime';
import { motion } from 'framer-motion';

interface AudioControlsProps extends AudioPlayerControls {
  // All props from AudioPlayerControls
}

export function AudioControls({
  play,
  pause,
  seek,
  setVolume,
  isPlaying,
  currentTime,
  duration,
  loading,
  error,
}: AudioControlsProps) {
  const [volume, setVolumeState] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const volumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved volume on mount
  useEffect(() => {
    const savedVolume = localStorage.getItem('the-bridge-volume');
    if (savedVolume) {
      const vol = parseFloat(savedVolume);
      if (!isNaN(vol)) {
        setVolumeState(vol);
        setVolume(vol);
      }
    }
  }, [setVolume]);

  const handleVolumeChange = (newVolume: number) => {
    setVolumeState(newVolume);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setVolume(volume);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    seek(newTime);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  // Show volume slider on hover
  const handleVolumeHover = () => {
    setShowVolumeSlider(true);
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
  };

  const handleVolumeLeave = () => {
    volumeTimeoutRef.current = setTimeout(() => {
      setShowVolumeSlider(false);
    }, 500);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-md rounded-full">
      {/* Play/Pause */}
      <button
        onClick={handleTogglePlay}
        disabled={loading}
        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200 ease-out
                   hover:scale-105 active:scale-95
                   flex items-center justify-center
                   focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : isPlaying ? (
          <PauseIcon className="w-5 h-5 text-white" />
        ) : (
          <PlayIcon className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Current Time */}
      <span className="text-sm text-white/70 font-mono w-14 text-right tabular-nums">
        {formatTime(currentTime)}
      </span>

      {/* Seek Bar */}
      <div className="flex-1 relative h-2 group min-w-[100px] max-w-[400px]">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          disabled={loading || !duration}
          style={
            {
              '--progress': `${progress}%`,
            } as React.CSSProperties
          }
          className="w-full h-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Seek audio"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
        />
      </div>

      {/* Duration */}
      <span className="text-sm text-white/70 font-mono w-14 tabular-nums">
        {formatTime(duration)}
      </span>

      {/* Volume Control */}
      <div
        className="flex items-center gap-2"
        onMouseEnter={handleVolumeHover}
        onMouseLeave={handleVolumeLeave}
      >
        <button
          onClick={handleToggleMute}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                     transition-all duration-200 ease-out
                     hover:scale-105 active:scale-95
                     flex items-center justify-center
                     focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label={isMuted ? "Unmute" : "Mute"}
          aria-pressed={isMuted}
        >
          <VolumeIcon level={isMuted ? 0 : volume} className="w-5 h-5 text-white" />
        </button>

        {/* Volume Slider (shows on hover) */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: showVolumeSlider ? 80 : 0,
            opacity: showVolumeSlider ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            style={
              {
                '--progress': `${(isMuted ? 0 : volume) * 100}%`,
              } as React.CSSProperties
            }
            className="w-20 h-2 cursor-pointer"
            aria-label="Volume"
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={isMuted ? 0 : volume}
            aria-valuetext={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
          />
        </motion.div>
      </div>

      {/* Error indicator */}
      {error && (
        <div className="text-red-400 text-xs ml-2 max-w-[150px] truncate"
             title={error.message}>
          Error loading audio
        </div>
      )}
    </div>
  );
}
