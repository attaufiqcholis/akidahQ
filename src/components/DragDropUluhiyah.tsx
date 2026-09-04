import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';
import { DRAG_DROP_ITEMS } from '../data/missionsData';
import { soundFx } from '../utils/sound';

interface DragDropUluhiyahProps {
  onCompleted: () => void;
}

export const DragDropUluhiyah: React.FC<DragDropUluhiyahProps> = ({ onCompleted }) => {
  // item id mapped to destination 'allah' | 'manusia' | 'unassigned'
  const [placements, setPlacements] = useState<Record<string, 'allah' | 'manusia'>>({});
  const [checked, setChecked] = useState(false);
  const [isAllCorrect, setIsAllCorrect] = useState(false);

  const unassignedItems = DRAG_DROP_ITEMS.filter(item => !placements[item.id]);
  const allahItems = DRAG_DROP_ITEMS.filter(item => placements[item.id] === 'allah');
  const manusiaItems = DRAG_DROP_ITEMS.filter(item => placements[item.id] === 'manusia');

  const moveItem = (itemId: string, destination: 'allah' | 'manusia') => {
    soundFx.playClick();
    setPlacements(prev => ({ ...prev, [itemId]: destination }));
    setChecked(false);
  };

  const removeItem = (itemId: string) => {
    soundFx.playClick();
    setPlacements(prev => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
    setChecked(false);
  };

  const handleCheck = () => {
    let allCorrect = true;
    for (const item of DRAG_DROP_ITEMS) {
      if (placements[item.id] !== item.target) {
        allCorrect = false;
        break;
      }
    }
    setChecked(true);
    setIsAllCorrect(allCorrect);
    if (allCorrect) {
      soundFx.playCorrect();
    } else {
      soundFx.playWrong();
    }
  };

  const handleReset = () => {
    soundFx.playClick();
    setPlacements({});
    setChecked(false);
    setIsAllCorrect(false);
  };

  return (
    <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F4F1EA] dark:bg-[#19221B] border-2 border-stone-300 dark:border-stone-700">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-[#3D5A40] text-white font-bold text-xs">
            GAME KLASIFIKASI
          </span>
          <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-white">
            Pilah: Untuk Allah atau Usaha ke Manusia?
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 flex items-center gap-1 font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mb-4 font-medium">
        Klik atau sentuh tombol di setiap kartu untuk memasukkannya ke kolom yang tepat:
      </p>

      {/* Unassigned Pool */}
      {unassignedItems.length > 0 && (
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 mb-4 shadow-sm">
          <p className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
            PILIHAN TINDAKAN (Belum Dikelompokkan):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {unassignedItems.map(item => (
              <div
                key={item.id}
                className="p-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-[#F4F1EA]/60 dark:bg-[#171E19] flex flex-col justify-between gap-2.5 shadow-2xs"
              >
                <span className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-100">
                  “{item.text}”
                </span>
                <div className="flex items-center gap-2 pt-1 border-t border-stone-200 dark:border-stone-700">
                  <button
                    onClick={() => moveItem(item.id, 'allah')}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-[#3D5A40] hover:bg-[#2F4531] text-white text-[11px] font-bold shadow-2xs transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>🌿 Untuk Allah</span>
                  </button>
                  <button
                    onClick={() => moveItem(item.id, 'manusia')}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-stone-600 hover:bg-stone-500 text-white text-[11px] font-bold shadow-2xs transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>🤝 Usaha Manusia</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Two Sorting Buckets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Bucket 1: UNTUK ALLAH */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border-2 border-[#3D5A40] shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-serif font-bold text-xs sm:text-sm text-[#3D5A40] dark:text-[#A7CCA9] flex items-center gap-1.5">
              <span>🌿 UNTUK ALLAH (Ibadah Mutlak)</span>
            </span>
            <span className="text-xs font-bold text-[#3D5A40] dark:text-stone-200 bg-[#F4F1EA] dark:bg-[#171E19] px-2.5 py-0.5 rounded-full border border-stone-300 dark:border-stone-700">
              {allahItems.length} Tindakan
            </span>
          </div>
          <p className="text-[11px] text-stone-600 dark:text-stone-400 mb-3 font-medium">
            Hanya boleh dipersembahkan kepada Allah tanpa sekutu apapun
          </p>

          <div className="space-y-2 min-h-[90px]">
            {allahItems.length === 0 ? (
              <div className="p-4 rounded-xl border-2 border-dashed border-stone-200 dark:border-stone-700 text-center text-xs text-stone-400">
                Belum ada tindakan di sini.
              </div>
            ) : (
              allahItems.map(item => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] border border-stone-200 dark:border-stone-700 flex items-center justify-between text-xs font-semibold text-stone-800 dark:text-stone-200 shadow-2xs"
                >
                  <span>{item.text}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-stone-400 hover:text-rose-500 text-xs font-bold px-1.5 py-0.5 cursor-pointer"
                    title="Hapus / Pindahkan kembali"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bucket 2: USAHA KEPADA MANUSIA */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border-2 border-stone-400 dark:border-stone-600 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-serif font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
              <span>🤝 USAHA MANUSIA (Ikhtiar Nyata)</span>
            </span>
            <span className="text-xs font-bold text-stone-700 dark:text-stone-300 bg-[#F4F1EA] dark:bg-[#171E19] px-2.5 py-0.5 rounded-full border border-stone-300 dark:border-stone-700">
              {manusiaItems.length} Tindakan
            </span>
          </div>
          <p className="text-[11px] text-stone-600 dark:text-stone-400 mb-3 font-medium">
            Ikhtiar mengambil sebab yang manusia mampu lakukan
          </p>

          <div className="space-y-2 min-h-[90px]">
            {manusiaItems.length === 0 ? (
              <div className="p-4 rounded-xl border-2 border-dashed border-stone-200 dark:border-stone-700 text-center text-xs text-stone-400">
                Belum ada tindakan di sini.
              </div>
            ) : (
              manusiaItems.map(item => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] border border-stone-200 dark:border-stone-700 flex items-center justify-between text-xs font-semibold text-stone-800 dark:text-stone-200 shadow-2xs"
                >
                  <span>{item.text}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-stone-400 hover:text-rose-500 text-xs font-bold px-1.5 py-0.5 cursor-pointer"
                    title="Hapus / Pindahkan kembali"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Check Answer or Feedback Result */}
      {!isAllCorrect ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {checked && !isAllCorrect && (
            <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
              Belum tepat. Coba perhatikan kembali: doa dan tawakkal hanya untuk Allah, sedangkan bertanya pelajaran atau berobat adalah ikhtiar manusia.
            </p>
          )}
          <button
            onClick={handleCheck}
            disabled={unassignedItems.length > 0}
            className="w-full sm:w-auto ml-auto px-7 py-3 rounded-2xl bg-[#D4AF37] hover:bg-[#c59f2e] disabled:opacity-40 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Periksa Pengelompokan</span>
          </button>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 animate-fadeIn shadow-sm">
          <div className="flex items-center gap-2 text-[#3D5A40] dark:text-[#8CB490] font-bold text-sm mb-2">
            <CheckCircle2 className="w-5 h-5 text-[#3D5A40]" />
            <span>MASYA ALLAH! SEMUA KLASIFIKASI TEPAT!</span>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed font-medium mb-4">
            <strong>Konsep Kunci Tauhid Uluhiyah:</strong> Kita diperbolehkan mengambil sebab dan meminta bantuan sesama manusia dalam hal-hal yang wajar dan mampu mereka lakukan (seperti berobat ke dokter atau bertanya ke guru). Namun <strong>ibadah (doa, tawakkal, menyembelih, nazar) mutlak hanya ditujukan kepada Allah!</strong>
          </p>

          <div className="flex justify-end">
            <button
              onClick={onCompleted}
              className="px-6 py-3 rounded-2xl bg-[#3D5A40] hover:bg-[#2F4531] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <span>Klaim Badge Uluhiyah & Lanjut</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
