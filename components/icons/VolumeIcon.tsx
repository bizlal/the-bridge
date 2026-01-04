interface VolumeIconProps {
  level: 'muted' | 'low' | 'medium' | 'high' | number;
  className?: string;
}

export function VolumeIcon({ level, className = "w-6 h-6" }: VolumeIconProps) {
  // Convert number (0-1) to level
  let volumeLevel: 'muted' | 'low' | 'medium' | 'high';

  if (typeof level === 'number') {
    if (level === 0) volumeLevel = 'muted';
    else if (level < 0.33) volumeLevel = 'low';
    else if (level < 0.66) volumeLevel = 'medium';
    else volumeLevel = 'high';
  } else {
    volumeLevel = level;
  }

  if (volumeLevel === 'muted') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      {volumeLevel !== 'low' && (
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      )}
      {volumeLevel === 'high' && (
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      )}
    </svg>
  );
}
