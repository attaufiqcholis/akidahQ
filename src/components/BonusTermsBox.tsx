import React, { useState } from 'react';
import { Brain, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { BONUS_TERMS } from '../data/missionsData';
import { soundFx } from '../utils/sound';

export const BonusTermsBox: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleTerm = (idx: number) => {
    soundFx.playClick();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="mt-6 p-5 rounded-2xl bg-[#F4F1EA] dark:bg-[#19221B] border-2 border-stone-300 dark:border-stone-700">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2.5 py-0.5 rounded-md bg-[#3D5A40] text-white font-bold text-xs flex items-center gap-1">
          <Brain className="w-3.5 h-3.5 text-[#D4AF37]" /> ISTILAH BONUS
        </span>
        <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-white">
          5 Istilah Aqidah dalam Mengenal Sifat Allah
        </h3>
      </div>

      <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 mb-3 shadow-2xs">
        <p className="text-xs text-stone-700 dark:text-stone-300 font-medium leading-relaxed">
          💡 <em>“Istilah-istilah ini akan kita pelajari lebih dalam pada kajian berikutnya di sekolah. Tujuannya sekarang hanya mengenalkan istilahnya agar kamu tidak asing saat mendengarnya, bukan untuk dihafal mati hari ini!”</em>
        </p>
      </div>

      {/* Accordion / Cards List */}
      <div className="space-y-2">
        {BONUS_TERMS.map((term, idx) => {
          const isOpen = expandedIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1E2620] overflow-hidden transition shadow-2xs"
            >
              <button
                onClick={() => toggleTerm(idx)}
                className="w-full p-3.5 text-left flex items-center justify-between gap-2 hover:bg-[#F4F1EA]/60 dark:hover:bg-stone-800/50 transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[#F4F1EA] dark:bg-stone-800 text-[#3D5A40] dark:text-[#A7CCA9] font-bold text-xs flex items-center justify-center shrink-0 border border-stone-200 dark:border-stone-700">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-100">
                    {term.name}
                  </span>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
              </button>

              {isOpen && (
                <div className="px-4 pb-3.5 pt-1 text-xs text-stone-600 dark:text-stone-300 border-t border-stone-100 dark:border-stone-700/60 space-y-1.5 animate-fadeIn font-medium">
                  <p><strong>Artinya:</strong> {term.meaning}</p>
                  <p className="text-[#3D5A40] dark:text-[#8CB490]">
                    🔍 <strong>Contoh/Ibarat:</strong> {term.analogy}
                  </p>
                  <p className="text-[10px] text-stone-400">
                    {term.status}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
