/**
 * Format seconds into MM:SS format
 * @param seconds - Time in seconds
 * @returns Formatted time string (e.g., "1:23" or "12:34")
 */
export function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) {
    return '0:00';
  }

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}
