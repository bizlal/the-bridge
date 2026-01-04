// Visual style configurations for each scene type

import { VisualStyle } from './types';

export interface VisualStyleConfig {
  gradient: string;
  overlay: string;
  filter: string;
  layout: string;
  textAlign: 'left' | 'center' | 'right';
  overlayPosition: 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-center';
  description: string;
}

export const visualStyleGradients: Record<VisualStyle, VisualStyleConfig> = {
  split: {
    gradient: 'linear-gradient(90deg, #4a5568 0%, #667eea 50%, #5b8def 100%)',
    overlay: 'linear-gradient(270deg, rgba(234, 84, 85, 0.15), rgba(115, 103, 240, 0.15))',
    filter: 'contrast(1.05) saturate(1.1)',
    layout: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    textAlign: 'left',
    overlayPosition: 'top-center',
    description: 'Soft blue gradients with gentle warm/cool split - represents duality'
  },
  dark: {
    gradient: 'radial-gradient(ellipse at bottom, #4a5568 0%, #2d3748 100%)',
    overlay: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
    filter: 'brightness(1.1) contrast(1.1)',
    layout: 'flex flex-col justify-center items-center',
    textAlign: 'center',
    overlayPosition: 'top-left',
    description: 'Soft gray gradient with subtle vignette - introspective moments'
  },
  bright: {
    gradient: 'linear-gradient(135deg, #7c9ff0 0%, #9575cd 50%, #f5a3d6 100%)',
    overlay: 'radial-gradient(circle at top right, rgba(255,255,255,0.3), transparent)',
    filter: 'brightness(1.15) saturate(1.2)',
    layout: 'flex flex-col justify-center items-center',
    textAlign: 'center',
    overlayPosition: 'top-center',
    description: 'Light purple to pink with bright accent - success and hope'
  },
  abstract: {
    gradient: 'conic-gradient(from 180deg at 50% 50%, #5a6c7d 0deg, #7a8c9e 90deg, #9bb0c4 180deg, #c4d4e4 270deg, #5a6c7d 360deg)',
    overlay: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)',
    filter: 'hue-rotate(10deg) saturate(0.9) brightness(1.1)',
    layout: 'flex flex-col justify-center items-center',
    textAlign: 'center',
    overlayPosition: 'top-center',
    description: 'Soft rotating gradient with subtle pattern - conceptual themes'
  },
  dramatic: {
    gradient: 'linear-gradient(to bottom, #3d3d3d 0%, #5a5a5a 30%, #c85050 70%, #ff6b6b 100%)',
    overlay: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%)',
    filter: 'contrast(1.2) brightness(1.05) saturate(1.3)',
    layout: 'flex flex-col justify-center items-center',
    textAlign: 'center',
    overlayPosition: 'center',
    description: 'Gray to warm red with subtle spotlight - high-impact moments'
  }
};

// Helper function to get style config
export function getVisualStyleConfig(style: VisualStyle): VisualStyleConfig {
  return visualStyleGradients[style];
}

// Helper to apply responsive adjustments
export function getResponsiveFilter(style: VisualStyle, isMobile: boolean): string {
  const config = visualStyleGradients[style];
  if (isMobile) {
    // Reduce filter intensity on mobile for performance
    const intensity = 0.7;
    return config.filter.replace(/\d+\.?\d*/g, (match) => {
      const num = parseFloat(match);
      return (num * intensity).toFixed(2);
    });
  }
  return config.filter;
}

// Text color based on visual style for optimal contrast
export const textColors: Record<VisualStyle, { primary: string; secondary: string }> = {
  split: {
    primary: 'text-zinc-50',
    secondary: 'text-zinc-300'
  },
  dark: {
    primary: 'text-zinc-50',
    secondary: 'text-zinc-400'
  },
  bright: {
    primary: 'text-white',
    secondary: 'text-zinc-100'
  },
  abstract: {
    primary: 'text-zinc-100',
    secondary: 'text-zinc-300'
  },
  dramatic: {
    primary: 'text-white',
    secondary: 'text-zinc-200'
  }
};

// Background image fallback colors
export const fallbackColors: Record<VisualStyle, string> = {
  split: '#5b8def',
  dark: '#4a5568',
  bright: '#9575cd',
  abstract: '#7a8c9e',
  dramatic: '#5a5a5a'
};
