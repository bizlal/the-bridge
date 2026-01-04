/**
 * AnimatedTextLine Component
 * Multilingual text line with GSAP animation
 * Supports: Urdu, English, Punjabi, Danish
 */

'use client';

import { AnimatedTextLineProps } from '@/lib/types';
import { useTextAnimation } from '@/hooks/useTextAnimation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { textColors } from '@/lib/visualStyles';

export function AnimatedTextLine({
  english,
  urdu,
  punjabi,
  danish,
  language,
  delay = 0,
  index,
  visualStyle,
  isActive
}: AnimatedTextLineProps) {
  const reducedMotion = useReducedMotion();

  // Determine which text to show based on language setting
  const textContent = language === 'en' ? english :
                      language === 'ur' ? urdu :
                      language === 'pa' ? punjabi :
                      language === 'da' ? danish : null;

  // Language display configuration
  const langConfig = language === 'en' ? { dir: 'ltr', lang: 'en', align: 'left' } :
                     language === 'ur' ? { dir: 'rtl', lang: 'ur', align: 'right' } :
                     language === 'pa' ? { dir: 'ltr', lang: 'pa', align: 'left' } :
                     language === 'da' ? { dir: 'ltr', lang: 'da', align: 'left' } :
                     { dir: 'ltr', lang: 'en', align: 'left' };

  const textRef = useTextAnimation({
    delay,
    effect: 'fadeUp',
    isActive: isActive && !!textContent,
    reducedMotion
  });

  const colors = textColors[visualStyle];

  if (!textContent) return null;

  // Font selection based on language
  const fontClass = language === 'ur' ? 'font-serif' :
                    language === 'pa' ? 'font-sans' :
                    'font-sans';

  // Font size based on language (RTL languages typically need larger text)
  const sizeClass = language === 'ur' || language === 'pa'
    ? 'text-xl md:text-2xl lg:text-3xl'
    : 'text-lg md:text-xl lg:text-2xl';

  return (
    <div className="flex flex-col gap-2 mb-6 max-w-4xl mx-auto px-6">
      <div
        ref={textRef}
        className={`
          ${sizeClass}
          ${colors.primary}
          ${fontClass}
          leading-relaxed
          text-${langConfig.align}
        `}
        dir={langConfig.dir}
        lang={langConfig.lang}
      >
        {textContent}
      </div>
    </div>
  );
}
