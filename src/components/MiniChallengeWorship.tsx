import React, { useState } from 'react';
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { WORSHIP_CHALLENGE_ITEMS } from '../data/missionsData';
import { soundFx } from '../utils/sound';

interface MiniChallengeWorshipProps {
  onCompleted: () => void;
}

export const MiniChallengeWorship: React.FC<MiniChallengeWorshipProps> = ({ onCompleted }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  const toggleSelect = (id: string) => {
    soundFx.playClick();
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(x => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleVerify = () => {
    soundFx.playCorrect();
    setHasChecked(true);
  };

  const handleReset = () => {
    soundFx.playClick();
    setSelectedIds([]);
    setHasChecked(false);
  };

  return (
    <div className="mt-6 p-5 rounded-2xl bg-[#F4F1EA] dark:bg-[#19221B] border-2 border-dashed border-stone-300 dark:border-stone-700">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-[#D4AF37] text-stone-950 font-bold text-xs">
            MINI CHALLENGE
          </span>
          <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-white">
            Aktivitas Mana yang Bisa Menjadi Ibadah?
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 flex items-center gap-1 font-semibold cursor-pointer"
          title="Ulangi Pilihan"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mb-4 font-medium">
        Pilih aktivitas di bawah ini yang menurutmu bisa berubah bernilai pahala ibadah di sisi Allah:
      </p>

      {/* Grid of Choices */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
        {WORSHIP_CHALLENGE_ITEMS.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggleSelect(item.id)}
              className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-bold transition flex items-center justify-between gap-2 cursor-pointer ${
                isSelected
                  ? 'border-2 border-[#3D5A40] bg-white dark:bg-[#212E23] text-stone-900 dark:text-stone-100 ring-1 ring-[#3D5A40]/30'
                  : 'border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#171E19] text-stone-700 dark:text-stone-300 hover:border-stone-400'
              }`}
            >
              <span>{item.name}</span>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${
                isSelected 
                  ? 'bg-[#3D5A40] border-[#3D5A40] text-white' 
                  : 'border-stone-300 dark:border-stone-600'
              }`}>
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>
            </button>
          );
        })}
      </div>

      {!hasChecked ? (
        <div className="flex justify-end">
          <button
            onClick={handleVerify}
            disabled={selectedIds.length === 0}
            className="px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c59f2e] disabled:opacity-50 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Periksa Jawaban</span>
          </button>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-white dark:bg-[#171E19] border border-stone-200 dark:border-stone-700 animate-fadeIn shadow-sm">
          <div className="flex items-center gap-2 text-[#3D5A40] dark:text-[#8CB490] font-bold text-sm mb-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>JAWABAN MENAKJUBKAN: SEMUANYA BISA MENJADI IBADAH!</span>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed mb-3">
            Tahukah kamu? Dalam Islam, aktivitas sehari-hari—bahkan makan, tidur, olahraga, hingga belajar dan membantu orang tua—<strong>semuanya dapat bernilai pahala ibadah</strong> apabila:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 text-xs">
            <div className="p-3 rounded-xl bg-[#F4F1EA] dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200">
              <strong className="text-[#3D5A40] dark:text-[#8CB490]">1. Niat yang Ikhlas:</strong> Diniatkan karena Allah untuk menjaga kekuatan tubuh atau menuntut ilmu yang bermanfaat.
            </div>
            <div className="p-3 rounded-xl bg-[#F4F1EA] dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200">
              <strong className="text-[#D4AF37] dark:text-amber-300">2. Sesuai Tuntunan:</strong> Dilakukan dengan cara yang halal, menjaga adab, dan tidak melalaikan kewajiban sholat.
            </div>
          </div>

          <div className="space-y-1.5 mb-4 text-xs text-stone-600 dark:text-stone-400">
            {WORSHIP_CHALLENGE_ITEMS.map((item) => (
              <div key={item.id} className="flex items-start gap-1.5">
                <span className="text-[#3D5A40] dark:text-[#8CB490] font-bold">✓</span>
                <span><strong>{item.name}:</strong> {item.note}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={onCompleted}
              className="px-6 py-2.5 rounded-xl bg-[#3D5A40] hover:bg-[#2F4531] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <span>Lanjut & Buka Badge Misi 1</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
