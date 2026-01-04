'use client';

import { useState, useEffect, useCallback } from 'react';
import { scenes } from '@/lib/scenes';
import { toFullLanguageName } from '@/lib/types';
import { useLanguagePreference } from '@/hooks/useLanguagePreference';
import { useScrollAudioSync } from '@/hooks/useScrollAudioSync';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useTheme } from '@/hooks/useTheme';
import ScrollScene from '@/components/ScrollScene';
import AudioPool, { AudioPoolHandle } from '@/components/AudioPool';
import { AudioSubtitles } from '@/components/AudioSubtitles';
import { LanguageToggle } from '@/components/LanguageToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Toast } from '@/components/Toast';
import { announceToScreenReader } from '@/lib/utils/announceToScreenReader';
import { isAudioAvailable, getAvailableLanguageForScene, getLanguageName } from '@/lib/audioAvailability';

export default function NarrativePage() {
  // === HYDRATION STATE ===
  const [hydrated, setHydrated] = useState(false);

  // === AUDIO POOL ===
  const [audioPoolHandle, setAudioPoolHandle] = useState<AudioPoolHandle | null>(null);

  // === USER PREFERENCES ===
  const { language, setLanguage, cycleLanguage, hasSelected } = useLanguagePreference();
  const { isDarkMode, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion();

  // === TOAST NOTIFICATIONS ===
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // === SCROLL-AUDIO SYNC ===
  const { activeSceneId, isPlaying, togglePlayback } = useScrollAudioSync({
    audioPool: audioPoolHandle,
    autoPlay: true, // Audio drives scroll
  });

  // === AUDIO SUBTITLE TRACKING ===
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  // Update audio time for subtitles
  useEffect(() => {
    if (!audioPoolHandle || !isPlaying) return;

    const interval = setInterval(() => {
      const audio = audioPoolHandle.getAudio(activeSceneId);
      if (audio) {
        setAudioTime(audio.currentTime);
        setAudioDuration(audio.duration || 0);
      }
    }, 100); // Update every 100ms for smooth subtitle sync

    return () => clearInterval(interval);
  }, [audioPoolHandle, activeSceneId, isPlaying]);

  // === AUTO-SWITCH LANGUAGE IF SCENE AUDIO NOT AVAILABLE ===
  useEffect(() => {
    if (!hydrated) return;

    // Check if current language has audio for this scene
    if (!isAudioAvailable(activeSceneId, language)) {
      const availableLang = getAvailableLanguageForScene(activeSceneId, language);

      if (availableLang !== language) {
        const currentLangName = getLanguageName(language);
        const newLangName = getLanguageName(availableLang);

        setLanguage(availableLang);
        setToastMessage(`Audio not available in ${currentLangName} for this scene. Switched to ${newLangName}.`);
        setShowToast(true);

        console.log(`🔄 Auto-switched from ${language} to ${availableLang} for scene ${activeSceneId}`);
      }
    }
  }, [activeSceneId, language, hydrated, setLanguage]);

  // === SCREEN READER ANNOUNCEMENTS ===
  useEffect(() => {
    if (!hydrated) return;

    const currentScene = scenes.find(s => s.id === activeSceneId);
    if (currentScene) {
      announceToScreenReader(
        `Scene ${activeSceneId} of ${scenes.length}: ${currentScene.title}`,
        'polite'
      );
    }
  }, [activeSceneId, hydrated]);

  // === HYDRATION ===
  useEffect(() => {
    setHydrated(true);
  }, []);

  // === KEYBOARD SHORTCUTS ===
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyL':
          cycleLanguage();
          break;
        case 'KeyT':
          toggleTheme();
          break;
        case 'KeyP':
        case 'Space':
          e.preventDefault(); // Prevent space from scrolling
          togglePlayback();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [cycleLanguage, toggleTheme, togglePlayback]);

  // === LOADING STATE ===
  if (!hydrated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg">Loading The Bridge...</p>
        </div>
      </div>
    );
  }

  // === MAIN RENDER ===
  return (
    <main className="relative w-full overflow-hidden">
      {/* Audio Pool - manages all audio files with multilingual support */}
      <AudioPool language={language} onReady={setAudioPoolHandle} />

      {/* Continuous Scroll Container - all 12 scenes */}
      <div className="narrative-container">
        {scenes.map((scene, index) => (
          <ScrollScene
            key={scene.id}
            sceneData={scene}
            sceneIndex={index}
            language={toFullLanguageName(language)}
          />
        ))}
      </div>

      {/* Language Selection Modal (Scene 0) */}
      <LanguageSelector
        currentLanguage={language}
        onLanguageSelect={setLanguage}
        isVisible={!hasSelected && activeSceneId === 0}
        currentSceneId={activeSceneId}
      />

      {/* Floating Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* Language Toggle */}
        <LanguageToggle
          language={language}
          onLanguageChange={setLanguage}
        />

        {/* Play/Pause */}
        <button
          onClick={togglePlayback}
          className="bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        {/* Progress Indicator */}
        <div className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm">
          Scene {activeSceneId}/{scenes.length}
        </div>
      </div>

      {/* Screen Reader Announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        Scene {activeSceneId} of {scenes.length}
        {isPlaying ? ' - Playing' : ' - Paused'}
      </div>

      {/* Keyboard Shortcuts Help */}
      <div className="fixed bottom-8 left-8 z-50 bg-black/80 backdrop-blur-md text-white/60 px-4 py-2 rounded-lg text-xs">
        <div>L: Language</div>
        <div>P / Space: Play/Pause</div>
      </div>

      {/* Audio Subtitles */}
      <AudioSubtitles
        audioScript={(() => {
          const scene = scenes.find(s => s.id === activeSceneId);
          if (!scene) return '';
          const langKey = language === 'en' ? 'english' :
                         language === 'ur' ? 'urdu' :
                         language === 'pa' ? 'punjabi' : 'danish';
          return scene.audioScripts[langKey];
        })()}
        currentTime={audioTime}
        duration={audioDuration}
        isPlaying={isPlaying}
        language={language}
      />

      {/* Toast Notifications */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="warning"
        duration={5000}
      />
    </main>
  );
}
