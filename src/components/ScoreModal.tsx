import React from 'react';
import { X, Trophy, Sparkles, Award, Shield, CheckCircle2, RotateCcw } from 'lucide-react';
import { getRankFromXp, MISSIONS } from '../data/missionsData';
import { soundFx } from '../utils/sound';

interface ScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  xp: number;
  completedMissions: number[];
  onResetProgress: () => void;
}

export const ScoreModal: React.FC<ScoreModalProps> = ({
  isOpen,
  onClose,
  xp,
  completedMissions,
  onResetProgress
}) => {
  if (!isOpen) return null;

  const rank = getRankFromXp(xp);
  const totalMissions = MISSIONS.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-[#F4F1EA] dark:bg-[#1E2620]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37] text-stone-950 flex items-center justify-center font-bold shadow-xs">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                Pencapaian & Skor Misi
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                Statistik Petualangan Tauhid Siswa
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-5 max-h-[75vh] overflow-y-auto bg-[#F9F7F2] dark:bg-[#151D17]">
          {/* XP & Grade Banner */}
          <div className="p-5 rounded-2xl bg-[#F4F1EA] dark:bg-[#1E2620] border-2 border-[#D4AF37] text-center shadow-natural">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D5A40] text-white text-xs font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Gelar Saat Ini</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-white mb-1">
              {rank.title}
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 max-w-xs mx-auto mb-3 font-medium">
              {rank.desc}
            </p>
            <div className="inline-block px-5 py-2 rounded-xl bg-white dark:bg-[#171E19] shadow-2xs border border-stone-200 dark:border-stone-700 font-serif font-bold text-lg sm:text-xl text-[#3D5A40] dark:text-[#A7CCA9]">
              {xp} <span className="text-xs text-stone-400 font-sans">XP Terkumpul</span>
            </div>
          </div>

          {/* Tier Milestones Breakdown */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 text-xs space-y-2 font-medium">
            <span className="font-serif font-bold text-stone-800 dark:text-stone-200 block mb-1">
              Sistem Gelar Kelulusan:
            </span>
            <div className="flex justify-between text-stone-600 dark:text-stone-400">
              <span>0 – 999 XP:</span>
              <strong className="text-[#3D5A40] dark:text-[#8CB490]">Penjelajah Tauhid</strong>
            </div>
            <div className="flex justify-between text-stone-600 dark:text-stone-400">
              <span>1000 – 1799 XP:</span>
              <strong className="text-[#3D5A40] dark:text-[#A7CCA9]">Pejuang Tauhid</strong>
            </div>
            <div className="flex justify-between text-stone-600 dark:text-stone-400">
              <span>1800 – 2499 XP:</span>
              <strong className="text-[#3D5A40] dark:text-[#8CB490]">Penjaga Tauhid</strong>
            </div>
            <div className="flex justify-between text-stone-600 dark:text-stone-400">
              <span>2500+ XP:</span>
              <strong className="text-[#D4AF37]">Master Misi Tauhid</strong>
            </div>
          </div>

          {/* Badges Collection */}
          <div>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-white uppercase tracking-wider mb-2.5">
              Koleksi Lencana Misi ({completedMissions.length}/{totalMissions})
            </h4>
            <div className="space-y-2">
              {MISSIONS.map(m => {
                const isEarned = completedMissions.includes(m.id);
                return (
                  <div
                    key={m.id}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${
                      isEarned
                        ? 'bg-white dark:bg-[#1E2620] border-2 border-[#3D5A40] text-stone-900 dark:text-white shadow-2xs'
                        : 'bg-[#F4F1EA]/60 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800 text-stone-400 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isEarned ? 'bg-[#3D5A40] text-white' : 'bg-stone-200 dark:bg-stone-700 text-stone-400'
                      }`}>
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-serif font-bold text-xs sm:text-sm leading-tight">
                          {m.badge.title}
                        </p>
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1 font-medium">
                          {m.badge.subtitle}
                        </p>
                      </div>
                    </div>
                    {isEarned ? (
                      <span className="text-[11px] font-bold text-white bg-[#3D5A40] px-2.5 py-0.5 rounded-full shadow-2xs">
                        Diraih ✓
                      </span>
                    ) : (
                      <span className="text-[10px] text-stone-400 font-medium">
                        Belum Diraih
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-[#F4F1EA] dark:bg-[#1E2620] flex items-center justify-between">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
              onResetProgress();
            }}
            className="text-xs text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#3D5A40] hover:bg-[#2F4531] text-white font-bold text-xs sm:text-sm cursor-pointer transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
