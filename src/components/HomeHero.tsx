import React from 'react';
import { 
  Compass, 
  Rocket, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  HeartHandshake, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { getRankFromXp } from '../data/missionsData';

interface HomeHeroProps {
  completedMissionsCount: number;
  totalMissions: number;
  xp: number;
  onStartMission: () => void;
  onOpenTeacherMode: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  completedMissionsCount,
  totalMissions,
  xp,
  onStartMission,
  onOpenTeacherMode
}) => {
  const rank = getRankFromXp(xp);
  const progressPercent = Math.round((completedMissionsCount / totalMissions) * 100);

  return (
    <div className="relative overflow-hidden py-10 sm:py-16 px-4 max-w-4xl mx-auto text-center">
      {/* Subtle Natural Tones Geometric Background SVG */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none -z-10">
        <svg width="340" height="340" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q50 10 90 50 T10 90" stroke="#3D5A40" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="36" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="10" cy="50" r="2" fill="#3D5A40" />
          <circle cx="90" cy="50" r="2" fill="#3D5A40" />
          <circle cx="50" cy="14" r="2" fill="#D4AF37" />
          <circle cx="50" cy="86" r="2" fill="#D4AF37" />
        </svg>
      </div>
      
      {/* School Badge Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F1EA] dark:bg-[#1C251F] border border-stone-300 dark:border-stone-700 text-[#3D5A40] dark:text-[#8CB490] text-xs sm:text-sm font-bold mb-6 shadow-2xs">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
        <span>Kajian Tauhid Tematik • SMP/SMA Islam Attaufiq Jambi</span>
      </div>

      {/* Main Title & Iconic Adventure Compass */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#3D5A40] p-1 shadow-natural-lg animate-soft-float">
            <div className="w-full h-full bg-[#F9F7F2] dark:bg-[#19221B] rounded-[22px] flex items-center justify-center border border-stone-300 dark:border-stone-700">
              <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-[#3D5A40] dark:text-[#8CB490]" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#D4AF37] text-stone-950 flex items-center justify-center font-bold text-xs shadow-md border-2 border-white dark:border-[#19221B]">
            ★
          </div>
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#3D5A40] dark:text-[#E2EBD8] mb-2">
        MISI TAUHID
      </h1>

      <p className="text-xl sm:text-2xl font-serif italic font-bold text-[#D4AF37] dark:text-amber-300 mb-4">
        &ldquo;Aku Diciptakan untuk Apa?&rdquo;
      </p>

      <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto font-medium mb-6">
        Mengenal Allah, Memurnikan Ibadah, dan Menelusuri Jalan Rasulullah ﷺ
      </p>

      {/* Quote Box */}
      <div className="max-w-xl mx-auto p-6 sm:p-7 rounded-[2rem] bg-white dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-natural mb-8 relative">
        <span className="text-5xl absolute -top-4 left-6 text-[#3D5A40] dark:text-[#8CB490] font-serif leading-none select-none opacity-40">
          “
        </span>
        <blockquote className="italic text-base sm:text-lg text-stone-800 dark:text-stone-100 font-serif leading-relaxed pt-2">
          Sebelum kita bertanya bagaimana menjadi hebat, kita perlu bertanya:
          <br />
          <span className="text-[#3D5A40] dark:text-[#8CB490] not-italic font-sans font-bold block mt-1">
            Untuk apa sebenarnya kita hidup?
          </span>
        </blockquote>
      </div>

      {/* Main CTA Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <button
          onClick={onStartMission}
          id="btn-start-mission"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#3D5A40] hover:bg-[#2F4531] text-white font-bold text-base sm:text-lg shadow-lg shadow-[#3D5A40]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
        >
          <Rocket className="w-5 h-5 text-[#D4AF37]" />
          <span>{completedMissionsCount > 0 ? 'LANJUTKAN MISI' : 'MULAI MISI'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          onClick={onOpenTeacherMode}
          className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#F4F1EA] hover:bg-stone-200 dark:bg-[#1E2620] dark:hover:bg-[#253028] text-[#3D5A40] dark:text-[#8CB490] font-bold text-sm sm:text-base border-2 border-stone-300 dark:border-stone-700 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <GraduationCap className="w-5 h-5 text-[#3D5A40] dark:text-[#8CB490]" />
          <span>👨‍🏫 Panduan Ustadz / Guru</span>
        </button>
      </div>

      {/* Progress & Stats Cards */}
      <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#F4F1EA] dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-sm">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
          <span className="text-stone-600 dark:text-stone-300">
            Progress Petualangan
          </span>
          <span className="text-[#3D5A40] dark:text-[#8CB490] font-bold">
            {completedMissionsCount}/{totalMissions} Misi Selesai ({progressPercent}%)
          </span>
        </div>
        <div className="w-full h-3 bg-stone-300/60 dark:bg-stone-800 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-[#D4AF37] rounded-full transition-all duration-700"
            style={{ width: `${Math.max(5, progressPercent)}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-300/80 dark:border-stone-700">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Total: <strong className="text-stone-800 dark:text-stone-200">{xp} XP</strong>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#151A16] border border-stone-300 dark:border-stone-700 font-bold text-stone-700 dark:text-stone-300">
            Gelar: {rank.title}
          </span>
        </div>
      </div>

      {/* Highlights / Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto mt-8 text-left">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700/80 shadow-sm">
          <div className="w-8 h-8 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] text-[#3D5A40] dark:text-[#8CB490] flex items-center justify-center mb-2.5 border border-stone-200 dark:border-stone-700">
            <BookOpen className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white">Al-Qur'an & Sunnah</h2>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
            Berdasarkan dalil shahih Kitab "Jalan Golongan Yang Selamat"
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700/80 shadow-sm">
          <div className="w-8 h-8 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] text-[#3D5A40] dark:text-[#8CB490] flex items-center justify-center mb-2.5 border border-stone-200 dark:border-stone-700">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white">Dekat dengan Siswa</h2>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
            Menjawab dilema nyata: ulangan, pertemanan, dan adab di rumah
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700/80 shadow-sm">
          <div className="w-8 h-8 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] text-[#D4AF37] flex items-center justify-center mb-2.5 border border-stone-200 dark:border-stone-700">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <h2 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white">Bukan Sekadar Hafalan</h2>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
            Fokus membentuk kebiasaan tauhid dalam keseharian nyata
          </p>
        </div>
      </div>
    </div>
  );
};
