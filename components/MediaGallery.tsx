'use client';

import { MediaItem } from '@/lib/types';
import { useState } from 'react';
import Image from 'next/image';

interface MediaGalleryProps {
  media: MediaItem[];
  className?: string;
}

export function MediaGallery({ media, className = '' }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!media || media.length === 0) return null;

  const renderMediaItem = (item: MediaItem, index: number) => {
    const commonClasses = 'cursor-pointer transition-transform hover:scale-105 rounded-lg overflow-hidden shadow-lg';

    switch (item.type) {
      case 'image':
      case 'screenshot':
      case 'document':
        return (
          <div
            key={index}
            className={commonClasses}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={item.url}
                alt={item.alt || item.caption || 'Evidence'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {item.caption && (
              <p className="text-sm text-white/80 p-3 bg-black/60 backdrop-blur-sm">
                {item.caption}
              </p>
            )}
          </div>
        );

      case 'video':
        return (
          <div key={index} className={commonClasses}>
            <video
              src={item.url}
              poster={item.thumbnailUrl}
              controls
              className="w-full aspect-video object-cover"
              aria-label={item.alt || item.caption || 'Video evidence'}
            />
            {item.caption && (
              <p className="text-sm text-white/80 p-3 bg-black/60 backdrop-blur-sm">
                {item.caption}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
        role="region"
        aria-label="Evidence gallery"
      >
        {media.map((item, index) => renderMediaItem(item, index))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-white/70 transition-colors"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close viewer"
          >
            ×
          </button>

          <div
            className="relative max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {media[selectedIndex].type === 'video' ? (
              <video
                src={media[selectedIndex].url}
                controls
                className="max-w-full max-h-[90vh] object-contain"
                autoPlay
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={media[selectedIndex].url}
                  alt={media[selectedIndex].alt || media[selectedIndex].caption || 'Evidence'}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </div>
            )}
            {media[selectedIndex].caption && (
              <p className="text-white text-center mt-4 text-lg">
                {media[selectedIndex].caption}
              </p>
            )}
          </div>

          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-white/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex - 1 + media.length) % media.length);
                }}
                aria-label="Previous media"
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-white/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex + 1) % media.length);
                }}
                aria-label="Next media"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
