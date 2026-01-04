// Core data types for "The Bridge" narrative application

import type { VoiceKey } from './constants';

export type VisualStyle = 'split' | 'dark' | 'bright' | 'abstract' | 'dramatic';
export type Language = 'en' | 'ur' | 'pa' | 'da'; // en=English, ur=Urdu, pa=Punjabi, da=Danish

// Map short language codes to full language names used in SceneData
export type LanguageFull = 'english' | 'urdu' | 'punjabi' | 'danish';

export function toFullLanguageName(lang: Language): LanguageFull {
  const map: Record<Language, LanguageFull> = {
    'en': 'english',
    'ur': 'urdu',
    'pa': 'punjabi',
    'da': 'danish'
  };
  return map[lang];
}

export interface TextLine {
  english?: string;
  urdu?: string;
  punjabi?: string;
  danish?: string;
  delay?: number;      // Milliseconds delay before showing this line
  timestamp?: number;  // Audio timestamp when this line should appear (seconds)
}

export interface AudioScripts {
  urdu: string;
  english: string;
  punjabi: string;
  danish: string;
}

export interface SceneData {
  id: number;
  title: string;
  audioScripts: AudioScripts;
  textLines: TextLine[];
  visualStyle: VisualStyle;
  backgroundImage?: string;
  textOverlay?: string;
  timePeriod?: string;
  voiceId?: VoiceKey;  // Optional voice override (defaults to 'liam')
}

// Component prop types

export interface SceneRendererProps {
  scene: SceneData;
  language: Language;
  isActive: boolean;
  onSceneComplete?: () => void;
}

export interface BackgroundLayerProps {
  visualStyle: VisualStyle;
  backgroundImage?: string;
  isActive: boolean;
}

export interface TextOverlayProps {
  textOverlay?: string;
  timePeriod?: string;
  visualStyle: VisualStyle;
  isActive: boolean;
}

export interface AnimatedTextLineProps {
  english?: string;
  urdu?: string;
  punjabi?: string;
  danish?: string;
  language: Language;
  delay?: number;
  timestamp?: number;
  index: number;
  visualStyle: VisualStyle;
  isActive: boolean;
  currentTime?: number; // Audio current time for timestamp sync
}

export interface SceneControlsProps {
  currentScene: number;
  totalScenes: number;
  isPlaying: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onTogglePlay: () => void;
  onSeek?: (sceneIndex: number) => void;
}

export interface ProgressIndicatorProps {
  currentScene: number;
  totalScenes: number;
  onSceneSelect: (sceneIndex: number) => void;
}

export interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

// Hook return types

export interface NarrativeState {
  currentSceneIndex: number;
  isPlaying: boolean;
  completedScenes: number[];
  goToScene: (index: number) => void;
  nextScene: () => void;
  previousScene: () => void;
  togglePlayback: () => void;
  resetNarrative: () => void;
}

export interface AudioPlayerControls {
  play: () => Promise<void>;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  loading: boolean;
  error: Error | null;
}

export interface AudioTextSyncState {
  activeLineIndex: number;
  completedLines: Set<number>;
  reset: () => void;
}

// Animation types

export type AnimationEffect = 'fadeUp' | 'typewriter' | 'splitText';

export interface AnimationOptions {
  delay: number;
  duration: number;
  effect: AnimationEffect;
}

// Error types

export enum AudioErrorType {
  NETWORK_ERROR = 'NETWORK_ERROR',
  FILE_NOT_FOUND = 'FILE_NOT_FOUND',
  DECODE_ERROR = 'DECODE_ERROR',
  API_RATE_LIMIT = 'API_RATE_LIMIT',
  API_QUOTA_EXCEEDED = 'API_QUOTA_EXCEEDED'
}

export class AudioError extends Error {
  constructor(
    public type: AudioErrorType,
    message: string,
    public sceneId?: number,
    public retryable: boolean = false
  ) {
    super(message);
    this.name = 'AudioError';
  }
}
