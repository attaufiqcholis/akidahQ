import React from 'react';
import { 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  GraduationCap, 
  Sparkles, 
  Compass, 
  RotateCcw,
  Headphones
} from 'lucide-react';
import { getRankFromXp } from '../data/missionsData';

interface HeaderProps {
  xp: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  narrationEnabled: boolean;
  onToggleNarration: () => void;
  onOpenTeacherMode: () => void;
  onOpenScoreModal: () => void;
  onResetProgress: () => void;
  onNavigateToMap: () => void;
  currentView: 'hero' | 'map' | 'level' | 'final';
}

export const Header: React.FC<HeaderProps> = ({
  xp,
  soundEnabled,
  onToggleSound,
  narrationEnabled,
  onToggleNarration,
  onOpenTeacherMode,
  onOpenScoreModal,
  onResetProgress,
  onNavigateToMap,
  currentView
}) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const rank = getRankFromXp(xp);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  React.useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#3D5A40] dark:bg-[#1C261E] text-white border-b border-[#314833] dark:border-stone-800 transition-colors shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Brand & School */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onNavigateToMap}
            className="flex items-center gap-2.5 text-left group focus:outline-hidden"
            title="Kembali ke Peta Misi"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-stone-950 flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-105 transition-transform font-bold">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif italic text-base sm:text-lg tracking-wide text-white">
                  Misi Tauhid
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold rounded-full bg-white/20 text-amber-200 border border-white/10 uppercase tracking-wider">
                  Attaufiq Jambi
                </span>
              </div>
              <p className="text-[11px] text-stone-200/80 dark:text-stone-300/70 line-clamp-1">
                Kajian Tauhid Tematik SMP/SMA Islam Attaufiq
              </p>
            </div>
          </button>
        </div>

        {/* Center: XP & Grade Pill */}
        <div className="flex items-center gap-2 order-3 sm:order-2">
          <button 
            onClick={onOpenScoreModal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/20 hover:bg-black/30 text-white text-xs font-semibold shadow-xs transition"
            title="Klik untuk melihat detail skor dan badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-bold">{xp} XP</span>
            <span className="text-white/40 font-normal">|</span>
            <span className="hidden md:inline font-medium text-amber-200">{rank.title}</span>
          </button>

          {currentView !== 'map' && currentView !== 'hero' && (
            <button
              onClick={onNavigateToMap}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs font-semibold transition"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Peta</span>
            </button>
          )}
        </div>

        {/* Right: Actions (Teacher Mode, Audio, Dark, Fullscreen) */}
        <div className="flex items-center gap-1.5 order-2 sm:order-3">
          {/* Teacher Mode Button */}
          <button
            onClick={onOpenTeacherMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F4F1EA] hover:bg-stone-200 text-[#3D5A40] text-xs font-bold border border-stone-300 transition shadow-xs"
            title="Buka Mode Guru (Kunci Jawaban, Panduan Kelas, Diskusi)"
          >
            <GraduationCap className="w-4 h-4 text-[#3D5A40]" />
            <span className="hidden sm:inline">Mode Guru</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-xl border transition ${
              soundEnabled
                ? 'bg-[#D4AF37]/25 text-amber-200 border-[#D4AF37]/50'
                : 'bg-black/20 text-white/50 border-white/10'
            }`}
            title={soundEnabled ? 'Efek Suara Aktif (Klik untuk Mematikan)' : 'Efek Suara Mati (Klik untuk Menyalakan)'}
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* TTS Narration Toggle */}
          <button
            onClick={onToggleNarration}
            className={`p-2 rounded-xl border transition ${
              narrationEnabled
                ? 'bg-white/30 text-white border-white/50 ring-1 ring-white/50'
                : 'bg-black/20 text-white/50 border-white/10'
            }`}
            title={narrationEnabled ? 'Suara Narasi Aktif (Bicara Otomatis)' : 'Aktifkan Mode Suara Narasi (Audio TTS)'}
            aria-label="Toggle Audio Narration"
          >
            <Headphones className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle for Projector/Classroom */}
          <button
            onClick={toggleFullscreen}
            className="hidden sm:inline-flex p-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white transition"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Mode Layar Penuh (Cocok untuk Proyektor Kelas)'}
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Reset progress menu */}
          <button
            onClick={onResetProgress}
            className="p-2 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition"
            title="Mulai Ulang Permainan dari Awal"
            aria-label="Reset Game Progress"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
