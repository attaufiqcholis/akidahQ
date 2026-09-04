import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ArrowRight, XCircle, HeartHandshake, RotateCcw } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface RububiyahGameProps {
  onCompleted: () => void;
}

export const RububiyahGame: React.FC<RububiyahGameProps> = ({ onCompleted }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [ans1, setAns1] = useState<boolean | null>(null);
  const [ans2, setAns2] = useState<boolean | null>(null);

  const handleReset = () => {
    soundFx.playClick();
    setStep(1);
    setAns1(null);
    setAns2(null);
  };

  const handleAns1 = (val: boolean) => {
    soundFx.playClick();
    setAns1(val);
    if (val) {
      soundFx.playCorrect();
      setTimeout(() => setStep(2), 500);
    } else {
      soundFx.playWrong();
    }
  };

  const handleAns2 = (val: boolean) => {
    soundFx.playClick();
    setAns2(val);
    if (val) {
      soundFx.playCorrect();
      setTimeout(() => setStep(3), 500);
    } else {
      soundFx.playWrong();
    }
  };

  return (
    <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F4F1EA] dark:bg-[#19221B] border-2 border-stone-300 dark:border-stone-700">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-[#3D5A40] text-white font-bold text-xs">
            GAME INTERAKTIF
          </span>
          <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-white">
            Siapa di Balik Semuanya?
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 flex items-center gap-1 font-semibold cursor-pointer"
          title="Ulangi Kasus Ini"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 mb-4 shadow-sm">
        <p className="text-xs font-bold text-[#3D5A40] dark:text-[#8CB490] uppercase tracking-wider mb-1">
          Kasus Nyata Siswa:
        </p>
        <p className="text-sm sm:text-base text-stone-800 dark:text-stone-100 font-medium font-serif italic">
          “Raka belajar keras berhari-hari untuk ujian IPA, membaca buku, dan berlatih soal. Saat pengumuman, Raka mendapat nilai 95!”
        </p>
      </div>

      {step === 1 && (
        <div className="space-y-3 animate-fadeIn">
          <p className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200">
            Pertanyaan 1: Apakah usaha dan kerja keras Raka itu penting?
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleAns1(true)}
              className="p-3.5 rounded-2xl border-2 border-[#3D5A40] bg-white hover:bg-[#F4F1EA] dark:bg-[#202E23] dark:border-[#3D5A40] text-stone-900 dark:text-stone-100 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-[#3D5A40] dark:text-[#8CB490]" />
              <span>Ya, Sangat Penting!</span>
            </button>
            <button
              onClick={() => handleAns1(false)}
              className="p-3.5 rounded-2xl border border-stone-300 bg-white hover:bg-stone-100 dark:bg-[#171E19] dark:border-stone-700 text-stone-600 dark:text-stone-400 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <XCircle className="w-4 h-4 text-stone-400" />
              <span>Tidak Penting</span>
            </button>
          </div>
          {ans1 === false && (
            <p className="text-xs text-rose-500 font-medium">
              Belum tepat. Usaha (ikhtiar) manusia sangat penting dan diperintahkan dalam Islam!
            </p>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3 animate-fadeIn">
          <p className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200">
            Pertanyaan 2: Apakah kecerdasan otak, kesehatan tubuh, dan pemahaman materi yang dimiliki Raka juga merupakan karunia dan nikmat dari Allah?
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleAns2(true)}
              className="p-3.5 rounded-2xl border-2 border-[#3D5A40] bg-white hover:bg-[#F4F1EA] dark:bg-[#202E23] dark:border-[#3D5A40] text-stone-900 dark:text-stone-100 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-[#3D5A40] dark:text-[#8CB490]" />
              <span>Ya, Dari Allah Rabb Kita</span>
            </button>
            <button
              onClick={() => handleAns2(false)}
              className="p-3.5 rounded-2xl border border-stone-300 bg-white hover:bg-stone-100 dark:bg-[#171E19] dark:border-stone-700 text-stone-600 dark:text-stone-400 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <XCircle className="w-4 h-4 text-stone-400" />
              <span>Bukan, Dari Diri Sendiri</span>
            </button>
          </div>
          {ans2 === false && (
            <p className="text-xs text-rose-500 font-medium">
              Ingat kembali: Siapa yang menciptakan otak, indra penglihatan, dan akal pikiran kita? Allah!
            </p>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 shadow-sm">
            <div className="flex items-center gap-2 text-[#3D5A40] dark:text-[#8CB490] font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>KESIMPULAN INDAH TAUHID RUBUBIYAH</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 font-medium leading-relaxed mb-4">
              <strong>Usaha kita penting.</strong> Tetapi seorang yang bertauhid tetap mengakui bahwa <strong>Allah adalah Rabb dan Pemberi nikmat</strong> yang memudahkan segalanya.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              {/* Di Sekolah */}
              <div className="p-3.5 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] border border-stone-200 dark:border-stone-700">
                <div className="font-bold text-stone-800 dark:text-stone-200 mb-1.5 flex items-center gap-1.5">
                  <span>🏫 Di Sekolah (Saat Berhasil)</span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>❌ "Aku hebat sendiri karena otakku jenius."</span>
                  </div>
                  <div className="text-[#3D5A40] dark:text-[#8CB490] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>✅ "Alhamdulillah, Allah yang memberikan kemudahan dan kecerdasan."</span>
                  </div>
                </div>
              </div>

              {/* Di Rumah */}
              <div className="p-3.5 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] border border-stone-200 dark:border-stone-700">
                <div className="font-bold text-stone-800 dark:text-stone-200 mb-1.5 flex items-center gap-1.5">
                  <span>🏠 Di Rumah (Keseharian)</span>
                </div>
                <div className="space-y-1 text-stone-700 dark:text-stone-300">
                  <p>• Mendapat makanan lezat ➔ <strong>"Alhamdulillah"</strong></p>
                  <p>• Mendapat rezeki / hadiah ➔ <strong>"Alhamdulillah"</strong></p>
                  <p>• Selamat sampai di rumah ➔ <strong>"Alhamdulillah"</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onCompleted}
              className="px-6 py-3 rounded-2xl bg-[#3D5A40] hover:bg-[#2F4531] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
              <span>Raih Badge Rububiyah & Lanjut</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
