import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2, Heart, BookOpen, Compass, ShieldCheck } from 'lucide-react';

export const TauhidDiagram: React.FC = () => {
  return (
    <div className="mt-6 p-6 sm:p-7 rounded-[2rem] bg-[#F4F1EA] dark:bg-[#19221B] border-2 border-stone-300 dark:border-stone-700 shadow-natural">
      <div className="text-center mb-6">
        <span className="px-3.5 py-1 rounded-full bg-[#3D5A40] text-white text-xs font-bold uppercase tracking-wider">
          ALUR PIKIR UTAMA
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-white mt-3">
          Apa Hubungan Firqah Najiyah dengan Tauhid?
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto mt-1 font-medium">
          Jangan pandang ini sebagai istilah yang terpisah-pisah. Perhatikan alur mata rantai keimanan yang menyatu berikut ini:
        </p>
      </div>

      {/* Step by Step Visual Flow */}
      <div className="max-w-md mx-auto space-y-2.5">
        {/* Step 1: Tauhid */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border-2 border-[#3D5A40] shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#3D5A40] text-white flex items-center justify-center font-bold text-sm shrink-0">
            1
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#3D5A40] dark:text-[#8CB490] uppercase tracking-wide">
              <Heart className="w-3.5 h-3.5" /> TAUHID
            </div>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              “Aku hanya beribadah kepada Allah semata.”
            </p>
          </div>
        </div>

        <div className="flex justify-center text-[#3D5A40]">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Step 2: Al-Quran & Sunnah */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border-2 border-[#3D5A40]/60 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#3D5A40]/80 text-white flex items-center justify-center font-bold text-sm shrink-0">
            2
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#3D5A40] dark:text-[#8CB490] uppercase tracking-wide">
              <BookOpen className="w-3.5 h-3.5" /> AL-QUR'AN & SUNNAH SHAHIH
            </div>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              “Aku ingin mengetahui bagaimana cara beragama dan beribadah dengan benar.”
            </p>
          </div>
        </div>

        <div className="flex justify-center text-[#3D5A40]">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Step 3: Rasulullah & Para Sahabat */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border-2 border-stone-300 dark:border-stone-600 shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-stone-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
            3
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-xs text-stone-700 dark:text-stone-300 uppercase tracking-wide">
              <Compass className="w-3.5 h-3.5" /> RASULULLAH ﷺ & PARA SAHABAT
            </div>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              “Aku mengikuti petunjuk dan teladan praktis mereka dalam mengamalkan wahyu.”
            </p>
          </div>
        </div>

        <div className="flex justify-center text-[#D4AF37]">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Step 4: Firqah Najiyah */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E2620] border-2 border-[#D4AF37] shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-stone-950 flex items-center justify-center font-bold text-sm shrink-0">
            ★
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-xs text-[#D4AF37] uppercase tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" /> FIRQAH NAJIYAH (Golongan yang Selamat)
            </div>
            <p className="text-sm font-bold text-stone-900 dark:text-white">
              “Berpegang teguh pada jalan lurus keselamatan akhirat.”
            </p>
          </div>
        </div>
      </div>

      {/* Core Summary Quote Box */}
      <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-200 dark:border-stone-700 text-center shadow-sm">
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 font-medium leading-relaxed">
          ✨ <strong>Kalimat Inti yang Wajib Diingat:</strong>
          <br />
          <span className="text-[#3D5A40] dark:text-[#8CB490] font-semibold">“Tauhid menjelaskan <strong>SIAPA</strong> yang kita sembah.</span>
          <br />
          <span className="text-[#3D5A40] dark:text-[#A7CCA9] font-semibold">Sunnah menjelaskan <strong>BAGAIMANA</strong> kita mengikuti petunjuk Rasulullah ﷺ.</span>
          <br />
          <span className="text-[#D4AF37] font-semibold">Dan Firqah Najiyah mengingatkan kita untuk selalu berpegang teguh kepada Al-Qur’an dan Sunnah shahih di atas jalan para sahabat.”</span>
        </p>
      </div>
    </div>
  );
};
