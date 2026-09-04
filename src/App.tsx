import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeHero } from './components/HomeHero';
import { MissionMap } from './components/MissionMap';
import { MissionLevel } from './components/MissionLevel';
import { FinalScreen } from './components/FinalScreen';
import { TeacherModal } from './components/TeacherModal';
import { ScoreModal } from './components/ScoreModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { MISSIONS } from './data/missionsData';
import { MissionId } from './types';
import { soundFx } from './utils/sound';
import { speechHelper } from './utils/speech';

export default function App() {
  // Navigation view
  const [currentView, setCurrentView] = useState<'hero' | 'map' | 'level' | 'final'>('hero');
  const [activeMissionId, setActiveMissionId] = useState<MissionId>(1);

  // User Game Progress
  const [completedMissions, setCompletedMissions] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('misi_tauhid_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('misi_tauhid_xp');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  // Settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('misi_tauhid_sound');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [narrationEnabled, setNarrationEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('misi_tauhid_narration');
      return saved !== null ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  // Modals
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  // Sync soundFx & speechHelper settings
  useEffect(() => {
    soundFx.enabled = soundEnabled;
    try {
      localStorage.setItem('misi_tauhid_sound', JSON.stringify(soundEnabled));
    } catch {}
  }, [soundEnabled]);

  useEffect(() => {
    speechHelper.enabled = narrationEnabled;
    try {
      localStorage.setItem('misi_tauhid_narration', JSON.stringify(narrationEnabled));
    } catch {}
  }, [narrationEnabled]);

  // Ensure clean natural tone theme by removing dark class
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    try {
      localStorage.removeItem('misi_tauhid_theme');
    } catch {}
  }, []);

  // Sync Progress to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('misi_tauhid_completed', JSON.stringify(completedMissions));
    } catch {}
  }, [completedMissions]);

  useEffect(() => {
    try {
      localStorage.setItem('misi_tauhid_xp', xp.toString());
    } catch {}
  }, [xp]);

  // Handlers
  const handleAddXp = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const handleCompleteMission = (missionId: MissionId) => {
    if (!completedMissions.includes(missionId)) {
      const updated = [...completedMissions, missionId];
      setCompletedMissions(updated);
      handleAddXp(200); // 200 XP bonus for completing mission

      if (updated.length === MISSIONS.length) {
        // Finished all missions bonus +500 XP
        handleAddXp(500);
      }
    }
  };

  const handleStartMission = () => {
    soundFx.playClick();
    setCurrentView('map');
  };

  const handleSelectMission = (missionId: MissionId) => {
    soundFx.playClick();
    setActiveMissionId(missionId);
    setCurrentView('level');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextMission = () => {
    soundFx.playClick();
    if (activeMissionId < 7) {
      const nextId = (activeMissionId + 1) as MissionId;
      setActiveMissionId(nextId);
      setCurrentView('level');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Completed boss battle -> Go to final screen
      setCurrentView('final');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetProgress = () => {
    soundFx.playClick();
    setCompletedMissions([]);
    setXp(0);
    setActiveMissionId(1);
    setCurrentView('hero');
    try {
      localStorage.removeItem('misi_tauhid_completed');
      localStorage.removeItem('misi_tauhid_xp');
    } catch {}
  };

  const handleJumpFromTeacher = (missionId: MissionId) => {
    setActiveMissionId(missionId);
    setCurrentView('level');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeMission = MISSIONS.find(m => m.id === activeMissionId) || MISSIONS[0];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800 flex flex-col font-sans transition-colors duration-200 selection:bg-[#3D5A40] selection:text-white">
      {/* Global Header */}
      <Header
        xp={xp}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(prev => !prev)}
        narrationEnabled={narrationEnabled}
        onToggleNarration={() => {
          soundFx.playClick();
          setNarrationEnabled(prev => !prev);
        }}
        onOpenTeacherMode={() => {
          soundFx.playClick();
          setIsTeacherModalOpen(true);
        }}
        onOpenScoreModal={() => {
          soundFx.playClick();
          setIsScoreModalOpen(true);
        }}
        onResetProgress={() => {
          soundFx.playClick();
          setIsResetConfirmOpen(true);
        }}
        onNavigateToMap={() => {
          soundFx.playClick();
          setCurrentView('map');
        }}
        currentView={currentView}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'hero' && (
          <HomeHero
            completedMissionsCount={completedMissions.length}
            totalMissions={MISSIONS.length}
            xp={xp}
            onStartMission={handleStartMission}
            onOpenTeacherMode={() => setIsTeacherModalOpen(true)}
          />
        )}

        {currentView === 'map' && (
          <MissionMap
            completedMissions={completedMissions}
            currentMissionId={activeMissionId}
            onSelectMission={handleSelectMission}
            onOpenTeacherMode={() => setIsTeacherModalOpen(true)}
          />
        )}

        {currentView === 'level' && (
          <MissionLevel
            key={activeMissionId}
            mission={activeMission}
            onCompleteMission={handleCompleteMission}
            onAddXp={handleAddXp}
            onNavigateToMap={() => {
              soundFx.playClick();
              setCurrentView('map');
            }}
            onNextMission={handleNextMission}
            isCompleted={completedMissions.includes(activeMissionId)}
            narrationEnabled={narrationEnabled}
          />
        )}

        {currentView === 'final' && (
          <FinalScreen
            xp={xp}
            onRestart={() => {
              soundFx.playClick();
              setCurrentView('map');
            }}
            onOpenScoreModal={() => setIsScoreModalOpen(true)}
          />
        )}
      </main>

      {/* Global Modals */}
      <TeacherModal
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
        onJumpToMission={handleJumpFromTeacher}
      />

      <ScoreModal
        isOpen={isScoreModalOpen}
        onClose={() => setIsScoreModalOpen(false)}
        xp={xp}
        completedMissions={completedMissions}
        onResetProgress={() => {
          soundFx.playClick();
          setIsResetConfirmOpen(true);
        }}
      />

      {/* In-App Confirmation Modal for Reset (Fixes browser/iframe confirm blocking) */}
      <ResetConfirmModal
        isOpen={isResetConfirmOpen}
        onClose={() => setIsResetConfirmOpen(false)}
        onConfirm={handleResetProgress}
      />

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-stone-200 bg-[#F4F1EA]/80 text-center text-xs text-stone-500">
        <p className="font-semibold text-stone-700">
          MISI TAUHID • Kajian Tauhid Siswa SMP/SMA Islam Attaufiq Jambi
        </p>
        <p className="mt-1 text-[11px] text-stone-500">
          Materi bersumber dari Kitab "Jalan Golongan Yang Selamat" • Disajikan secara interaktif & ramah remaja
        </p>
      </footer>
    </div>
  );
}
