'use client';

import { useState, useRef, useEffect } from 'react';
import { scenes } from '@/lib/scenes';

interface Timestamp {
  lineIndex: number;
  time: number;
  text: string;
}

export default function TimestampMapperPage() {
  const [selectedSceneId, setSelectedSceneId] = useState(1);
  const [timestamps, setTimestamps] = useState<Timestamp[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentScene = scenes.find(s => s.id === selectedSceneId) || scenes[0];
  const audioSrc = `/audio/scene-${selectedSceneId}.mp3`;

  // Update current time while playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const markTimestamp = (lineIndex: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const textLine = currentScene.textLines[lineIndex];
    const text = 'english' in textLine ? textLine.english : textLine.urdu;

    const newTimestamp: Timestamp = {
      lineIndex,
      time: audio.currentTime,
      text: text || '',
    };

    setTimestamps(prev => {
      const filtered = prev.filter(t => t.lineIndex !== lineIndex);
      return [...filtered, newTimestamp].sort((a, b) => a.lineIndex - b.lineIndex);
    });
  };

  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const exportTimestamps = () => {
    const output = timestamps.map(t => ({
      lineIndex: t.lineIndex,
      time: t.time.toFixed(2),
      text: t.text,
    }));

    console.log(`\n=== Scene ${selectedSceneId}: ${currentScene.title} ===`);
    console.log(JSON.stringify(output, null, 2));

    // Also create a formatted version for easy copying
    const formatted = timestamps.map(t =>
      `  { lineIndex: ${t.lineIndex}, timestamp: ${t.time.toFixed(2)} }, // ${t.text}`
    ).join('\n');

    console.log('\nFormatted for scenes.ts:');
    console.log(formatted);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const ms = Math.floor((time % 1) * 10);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${ms}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Audio Timestamp Mapper</h1>

        {/* Scene Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">Select Scene</label>
          <select
            value={selectedSceneId}
            onChange={(e) => {
              setSelectedSceneId(Number(e.target.value));
              setTimestamps([]);
              setCurrentTime(0);
              if (audioRef.current) {
                audioRef.current.load();
              }
            }}
            className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-full max-w-md"
          >
            {scenes.map(scene => (
              <option key={scene.id} value={scene.id}>
                Scene {scene.id}: {scene.title}
              </option>
            ))}
          </select>
        </div>

        {/* Audio Player */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <audio ref={audioRef} src={audioSrc} preload="metadata" />

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={togglePlayback}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <div className="text-lg font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative h-2 bg-gray-700 rounded cursor-pointer" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            seek(percentage * duration);
          }}>
            <div
              className="absolute h-full bg-blue-500 rounded"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            {timestamps.map((ts, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-1 bg-green-400"
                style={{ left: `${(ts.time / duration) * 100}%` }}
                title={`${ts.text} @ ${formatTime(ts.time)}`}
              />
            ))}
          </div>
        </div>

        {/* Text Lines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lines to Mark */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Text Lines</h2>
            <div className="space-y-2">
              {currentScene.textLines.map((line, index) => {
                const text = 'english' in line ? line.english : line.urdu;
                const isMarked = timestamps.some(t => t.lineIndex === index);
                const markedTime = timestamps.find(t => t.lineIndex === index)?.time;

                return (
                  <div
                    key={index}
                    className={`p-4 rounded border-2 transition ${
                      isMarked
                        ? 'bg-green-900/30 border-green-500'
                        : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-1">Line {index + 1}</div>
                        <div className="text-lg">{text}</div>
                        {isMarked && markedTime !== undefined && (
                          <div className="text-sm text-green-400 mt-2">
                            ✓ Marked at {formatTime(markedTime)}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => markTimestamp(index)}
                        className={`px-4 py-2 rounded font-medium ml-4 ${
                          isMarked
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        {isMarked ? 'Update' : 'Mark'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timestamps Preview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Timestamps ({timestamps.length}/{currentScene.textLines.length})
            </h2>
            <div className="bg-gray-800 rounded p-4 mb-4">
              <div className="space-y-2">
                {timestamps.length === 0 ? (
                  <p className="text-gray-500">No timestamps marked yet</p>
                ) : (
                  timestamps.map((ts, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="font-mono text-green-400 w-16">
                        {formatTime(ts.time)}
                      </span>
                      <span className="text-gray-400">→</span>
                      <span className="flex-1">{ts.text}</span>
                      <button
                        onClick={() => seek(ts.time)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Go
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {timestamps.length > 0 && (
              <button
                onClick={exportTimestamps}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-medium w-full"
              >
                Export to Console
              </button>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gray-800 rounded p-6">
          <h3 className="text-xl font-bold mb-3">How to Use</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Select a scene from the dropdown</li>
            <li>Play the audio and listen carefully</li>
            <li>When you hear a text line, click "Mark" to save the current timestamp</li>
            <li>You can click on the timeline to jump to specific times</li>
            <li>Green markers on the timeline show marked timestamps</li>
            <li>Once done, click "Export to Console" and copy the output</li>
            <li>Update lib/scenes.ts with the timestamp data</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
