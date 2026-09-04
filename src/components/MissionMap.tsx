import React from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Play, 
  Sparkles, 
  Award, 
  Compass, 
  Key, 
  Flame, 
  BookOpen, 
  MapPin, 
  Milestone, 
  Crown,
  ArrowDown
} from 'lucide-react';
import { MISSIONS } from '../data/missionsData';
import { MissionId } from '../types';

interface MissionMapProps {
  completedMissions: number[];
  currentMissionId: MissionId;
  onSelectMission: (missionId: MissionId) => void;
  onOpenTeacherMode: () => void;
}

export const MissionMap: React.FC<MissionMapProps> = ({
  completedMissions,
  currentMissionId,
  onSelectMission,
  onOpenTeacherMode
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Key': return <Key className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Flame': return <Flame className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'MapPin': return <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Milestone': return <Milestone className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Crown': return <Crown className="w-5 h-5 sm:w-6 sm:h-6" />;
      default: return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <div className="py-6 sm:py-10 px-4 max-w-3xl mx-auto">
      {/* Map Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4F1EA] dark:bg-[#1C251F] border border-stone-300 dark:border-stone-700 text-[#3D5A40] dark:text-[#8CB490] text-xs font-bold mb-2">
          <Compass className="w-3.5 h-3.5 text-[#3D5A40] dark:text-[#8CB490]" />
          <span>ALUR PERJALANAN TAUHID</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#3D5A40] dark:text-[#E2EBD8] tracking-tight">
          🗺️ Peta Misi Petualangan
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-lg mx-auto">
          Selesaikan setiap tahapan misi secara bertahap untuk membuka kunci gerbang berikutnya dan raih seluruh lencana tauhid!
        </p>
      </div>

      {/* Mission Path Flow */}
      <div className="relative space-y-4">
        {MISSIONS.map((mission, idx) => {
          const isCompleted = completedMissions.includes(mission.id);
          const isUnlocked = mission.id === 1 || completedMissions.includes(mission.id - 1);
          const isCurrent = currentMissionId === mission.id;
          const isBoss = mission.id === 7;

          return (
            <div key={mission.id} className="relative flex flex-col items-center">
              {/* Mission Card Button */}
              <div 
                className={`w-full p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative ${
                  isBoss
                    ? 'border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/15 via-[#F4F1EA] to-[#D4AF37]/15 dark:from-[#D4AF37]/10 dark:to-[#1E2620] border-b-4 shadow-sm'
                    : isCurrent
                    ? 'border-2 border-[#3D5A40] bg-white dark:bg-[#1E2620] ring-2 ring-[#3D5A40]/25 shadow-natural border-b-4 border-b-[#3D5A40]'
                    : isCompleted
                    ? 'border-stone-200 dark:border-stone-700/80 bg-[#F4F1EA]/60 dark:bg-[#1E2620]/60 hover:bg-white dark:hover:bg-[#1E2620] border-b-4 border-b-stone-300 dark:border-b-stone-700'
                    : isUnlocked
                    ? 'border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1E2620] hover:border-[#3D5A40] border-b-4 border-b-stone-300'
                    : 'border-stone-200/60 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/40 opacity-60'
                }`}
              >
                <div className="flex items-start sm:items-center justify-between gap-3">
                  {/* Left: Icon & Mission Info */}
                  <div className="flex items-start sm:items-center gap-3.5">
                    {/* Node Icon Avatar */}
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform ${
                        isBoss
                          ? 'bg-[#D4AF37] text-stone-950 ring-2 ring-[#D4AF37]/50 font-bold'
                          : isCompleted
                          ? 'bg-[#3D5A40] text-white'
                          : isCurrent
                          ? 'bg-[#3D5A40] text-white ring-2 ring-[#D4AF37]'
                          : isUnlocked
                          ? 'bg-[#F4F1EA] dark:bg-stone-800 text-[#3D5A40] dark:text-stone-300 border border-stone-200 dark:border-stone-700'
                          : 'bg-stone-200 dark:bg-stone-800 text-stone-400'
                      }`}
                    >
                      {getIcon(mission.icon)}
                    </div>

                    {/* Text Details */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                          isBoss ? 'text-[#D4AF37] dark:text-amber-300' : 'text-[#3D5A40] dark:text-[#8CB490]'
                        }`}>
                          {mission.category}
                        </span>
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#3D5A40]/15 dark:bg-[#3D5A40]/30 text-[#3D5A40] dark:text-[#A7CCA9]">
                            <CheckCircle2 className="w-3 h-3" /> Selesai
                          </span>
                        )}
                        {isCurrent && !isCompleted && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37]/25 text-amber-900 dark:text-amber-200 animate-pulse">
                            Misi Aktif
                          </span>
                        )}
                        {!isUnlocked && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-stone-200 dark:bg-stone-800 text-stone-500">
                            <Lock className="w-3 h-3" /> Terkunci
                          </span>
                        )}
                      </div>

                      <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-snug">
                        {mission.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-1 mt-0.5">
                        {mission.subtitle}
                      </p>

                      <div className="flex items-center gap-3 mt-2 text-[11px] text-stone-500 dark:text-stone-400">
                        <span className="flex items-center gap-1 font-semibold text-[#D4AF37] dark:text-amber-300">
                          <Award className="w-3.5 h-3.5" /> Badge: {mission.badge.title}
                        </span>
                        <span>•</span>
                        <span>+100 s/d +200 XP</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Action Button */}
                  <div className="shrink-0 self-center">
                    {isUnlocked ? (
                      <button
                        onClick={() => onSelectMission(mission.id)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition flex items-center gap-1.5 cursor-pointer ${
                          isBoss
                            ? 'bg-[#D4AF37] hover:bg-[#c59f2e] text-stone-950 font-black shadow-sm'
                            : isCurrent
                            ? 'bg-[#3D5A40] hover:bg-[#2F4531] text-white shadow-[#3D5A40]/20'
                            : isCompleted
                            ? 'bg-[#F4F1EA] hover:bg-stone-200 text-[#3D5A40] dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-200 border border-stone-300 dark:border-stone-700'
                            : 'bg-[#3D5A40] hover:bg-[#2F4531] text-white'
                        }`}
                      >
                        {isCompleted ? (
                          <>
                            <span>Ulangi</span>
                            <Play className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>{isBoss ? 'Tantang Boss' : 'Jalankan'}</span>
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </>
                        )}
                      </button>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-400">
                        <Lock className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Connecting Stepper Line Arrow */}
              {idx < MISSIONS.length - 1 && (
                <div className="py-1 flex flex-col items-center justify-center text-stone-300 dark:text-stone-600">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Classroom Teacher Note */}
      <div className="mt-8 p-4 rounded-2xl bg-[#F4F1EA] dark:bg-[#1E2620] border-2 border-stone-300 dark:border-stone-700 text-center">
        <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">
          💡 <strong>Tips Pembelajaran di Kelas:</strong> Guru dapat memproyeksikan game ini ke layar kelas, menghentikan di setiap misi untuk diskusi santai, atau menggunakan tombol <strong>Mode Guru</strong> untuk navigasi langsung ke level tertentu.
        </p>
        <button
          onClick={onOpenTeacherMode}
          className="mt-2 text-xs font-bold text-[#3D5A40] dark:text-[#8CB490] underline hover:text-[#2F4531] cursor-pointer"
        >
          Buka Panduan & Kunci Jawaban Guru →
        </button>
      </div>
    </div>
  );
};
