// Animation and timing constants for "The Bridge"

import { SceneData } from './types';

// Animation timings (milliseconds)
export const ANIMATION_CONFIG = {
  textFadeInDuration: 800,
  sceneTransitionDuration: 1200,
  overlayFadeInDuration: 1000,
  backgroundTransitionDuration: 1500,
  controlsAutoHideDelay: 3000,
  defaultTextDelay: 300,
  typingSpeed: 50, // ms per character for typewriter effect
} as const;

// Keyboard shortcuts mapping
export const KEYBOARD_SHORTCUTS: Record<string, string[]> = {
  NEXT: ['ArrowRight', 'Space'],
  PREVIOUS: ['ArrowLeft'],
  TOGGLE_PLAY: ['KeyP'],
  TOGGLE_LANGUAGE: ['KeyL'],
  TOGGLE_THEME: ['KeyT'],
  ESCAPE: ['Escape'],
  JUMP_TO_START: ['Home'],
  JUMP_TO_END: ['End'],
};

// LocalStorage keys
export const STORAGE_KEYS = {
  LANGUAGE: 'the-bridge-language',
  THEME: 'the-bridge-theme',
  CURRENT_SCENE: 'the-bridge-current-scene',
  COMPLETED_SCENES: 'the-bridge-completed-scenes',
  VOLUME: 'the-bridge-volume',
} as const;

// Scene duration calculation
export const SCENE_DURATIONS = {
  /**
   * Calculate the total duration of a scene based on text delays and buffer time
   */
  calculateSceneDuration: (scene: SceneData): number => {
    const textDelays = scene.textLines.map(line => line.delay || 0);
    const maxDelay = Math.max(...textDelays, 0);
    const animationTime = ANIMATION_CONFIG.textFadeInDuration;
    const bufferTime = 2000; // 2 second buffer at the end

    return maxDelay + animationTime + bufferTime;
  },

  /**
   * Calculate when to start preloading the next scene
   */
  getPreloadTime: (sceneDuration: number): number => {
    return sceneDuration - 3000; // Start preloading 3 seconds before end
  }
} as const;

// Audio configuration
export const AUDIO_CONFIG = {
  defaultVolume: 0.8,
  fadeInDuration: 500,
  fadeOutDuration: 500,
  seekThreshold: 100, // Minimum ms change to trigger seek
  retryAttempts: 3,
  retryDelay: 1000,
} as const;

// ElevenLabs API configuration
export const ELEVENLABS_CONFIG = {
  // Liam - Articulate narrator voice (warm, expressive, great for storytelling)
  voiceId: 'PlonOPrx1E7Q0XkgzfP2', 
  modelId: 'eleven_v3', // Latest model with best quality & emotion support
  voiceSettings: {
    stability: 0.5,
    similarity_boost: 0.75,
    style: 0.0,
    use_speaker_boost: true
  },
  rateLimit: 1000, // ms between requests
} as const;

// Alternative voices (change voiceId above to try):
// - Brian: 'nPczCjzI2devNBz1zQrb' (deep, clear)
// - Charlie: Great for natural, conversational tone
// - Bill L.Oxley: Excellent for long-form audiobook narration

// Voice Registry - Multi-narrator support
export const VOICE_REGISTRY = {
  bilal: {
    id: 'PlonOPrx1E7Q0XkgzfP2',
    name: 'Bilal (Narrator)',
    description: 'Main narrator - warm, expressive, adult male',
    character: 'Bilal (adult narrator)'
  },
  mom: {
    id: 'PFW4bLLY2FV3w0f9TjKl',
    name: 'Mom Voice',
    description: 'Mother character - nurturing, emotional',
    character: 'Mother'
  },
  sisters: {
    id: 'zcsuE6BRc4baWHZ8OESB',
    name: 'Sisters Voice',
    description: 'Sisters character - supportive, familial',
    character: 'Sisters'
  }
} as const;;

export type VoiceKey = keyof typeof VOICE_REGISTRY;
export const DEFAULT_VOICE: VoiceKey = 'bilal';;

// Responsive breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Scene navigation constraints
export const SCENE_CONFIG = {
  totalScenes: 12,
  minSceneIndex: 0,
  maxSceneIndex: 11,
  allowSkipping: true, // Allow jumping to any scene
  requireSequential: false, // Don't require completing previous scenes
} as const;

// Accessibility
export const A11Y_CONFIG = {
  minimumTouchTarget: 44, // pixels (WCAG guideline)
  focusRingWidth: 2,
  focusRingColor: 'ring-blue-500',
  screenReaderAnnounceDelay: 100, // ms delay for screen reader announcements
} as const;

// Performance
export const PERFORMANCE_CONFIG = {
  maxVisibleScenes: 3, // Current + 1 before + 1 after for smooth transitions
  imagePriority: [0], // Scene indices to load with priority (Scene 1 = index 0)
  debounceDelay: 16, // ms (60fps = 16.67ms)
  throttleDelay: 100, // ms for scroll/resize handlers
} as const;

// Error messages
export const ERROR_MESSAGES = {
  AUDIO_LOAD_FAILED: 'Failed to load audio file. Please check your connection and try again.',
  AUDIO_PLAY_FAILED: 'Unable to play audio. Please try again.',
  NETWORK_ERROR: 'Network connection lost. Please check your internet connection.',
  RATE_LIMIT: 'Too many requests. Please wait a moment and try again.',
  QUOTA_EXCEEDED: 'Audio generation quota exceeded. Please try again later.',
  GENERIC: 'Something went wrong. Please refresh the page and try again.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  AUDIO_GENERATED: 'Audio successfully generated',
  SCENE_COMPLETED: 'Scene completed',
  NARRATIVE_COMPLETED: 'You have completed the narrative',
} as const;

// Scene transition variants (for Framer Motion)
export const TRANSITION_VARIANTS = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideRight: {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 }
  },
  slideLeft: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  },
  zoom: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 }
  },
  blur: {
    initial: { filter: 'blur(20px)', opacity: 0 },
    animate: { filter: 'blur(0px)', opacity: 1 },
    exit: { filter: 'blur(20px)', opacity: 0 }
  }
} as const;

// Export helper to get transition for visual style
export function getTransitionForStyle(visualStyle: string): keyof typeof TRANSITION_VARIANTS {
  const mapping: Record<string, keyof typeof TRANSITION_VARIANTS> = {
    'split': 'slideRight',
    'dark': 'fade',
    'bright': 'zoom',
    'abstract': 'blur',
    'dramatic': 'zoom'
  };

  return mapping[visualStyle] || 'fade';
}
