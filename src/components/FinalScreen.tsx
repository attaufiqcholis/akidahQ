import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  School, 
  Home, 
  CheckCircle2, 
  RotateCcw, 
  HeartHandshake, 
  ShieldCheck, 
  Compass, 
  BookOpen
} from 'lucide-react';
import { SCHOOL_HABITS, HOME_HABITS, getRankFromXp } from '../data/missionsData';
import { soundFx } from '../utils/sound';

interface FinalScreenProps {
  xp: number;
  onRestart: () => void;
  onOpenScoreModal: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({
  xp,
  onRestart,
  onOpenScoreModal
}) => {
  const [activeTab, setActiveTab] = useState<'sekolah' | 'rumah'>('sekolah');
  const [checkedSchool, setCheckedSchool] = useState<string[]>([]);
  const [checkedHome, setCheckedHome] = useState<string[]>([]);
  const rank = getRankFromXp(xp);

  useEffect(() => {
    soundFx.playLevelComplete();
    try {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    } catch {
      // ignore
    }
  }, []);

  const toggleSchoolCheck = (id: string) => {
    soundFx.playClick();
    if (checkedSchool.includes(id)) {
      setCheckedSchool(checkedSchool.filter(x => x !== id));
    } else {
      setCheckedSchool([...checkedSchool, id]);
    }
  };

  const toggleHomeCheck = (id: string) => {
    soundFx.playClick();
    if (checkedHome.includes(id)) {
      setCheckedHome(checkedHome.filter(x => x !== id));
    } else {
      setCheckedHome([...checkedHome, id]);
    }
  };

  return (
    <div className="py-8 sm:py-12 px-4 max-w-4xl mx-auto text-center">
      {/* Celebration Header */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-stone-900 dark:text-amber-200 text-xs sm:text-sm font-bold mb-4 shadow-2xs">
        <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" />
        <span>SELURUH MISI TELAH BERHASIL DISELESAIKAN!</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#3D5A40] dark:text-[#E2EBD8] tracking-tight mb-3">
        🎉 ALHAMDULILLAH, MISI SELESAI!
      </h1>

      <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto font-medium mb-10">
        Selamat kepada pejuang tauhid SMP/SMA Islam Attaufiq Jambi! Kamu telah menempuh seluruh rute penjelajahan aqidah dan memetik buah pemahaman yang kokoh.
      </p>

      {/* 4 Main Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-left">
        {/* Badge 1: Rububiyah */}
        <div className="p-5 rounded-[2rem] bg-white dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-natural relative overflow-hidden">
          <div className="w-11 h-11 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] text-[#3D5A40] dark:text-[#8CB490] flex items-center justify-center mb-3 border border-stone-200 dark:border-stone-700">
            <Trophy className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D5A40] dark:text-[#8CB490]">
            Lencana Utama 1
          </span>
          <h2 className="text-base font-serif font-bold text-stone-900 dark:text-white mt-0.5">
            🏆 RUBUBIYAH
          </h2>
          <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 font-medium">
            Allah adalah Rabb, Pencipta, Pemilik, dan Pengatur kehidupanku.
          </p>
        </div>

        {/* Badge 2: Uluhiyah */}
        <div className="p-5 rounded-[2rem] bg-white dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-natural relative overflow-hidden">
          <div className="w-11 h-11 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] text-[#3D5A40] dark:text-[#8CB490] flex items-center justify-center mb-3 border border-stone-200 dark:border-stone-700">
            <Trophy className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D5A40] dark:text-[#8CB490]">
            Lencana Utama 2
          </span>
          <h2 className="text-base font-serif font-bold text-stone-900 dark:text-white mt-0.5">
            🏆 ULUHIYAH
          </h2>
          <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 font-medium">
            Aku beribadah, berdoa, dan bertawakkal hanya kepada Allah semata.
          </p>
        </div>

        {/* Badge 3: Asma wa Shifat */}
        <div className="p-5 rounded-[2rem] bg-white dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-natural relative overflow-hidden">
          <div className="w-11 h-11 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] text-[#3D5A40] dark:text-[#8CB490] flex items-center justify-center mb-3 border border-stone-200 dark:border-stone-700">
            <Trophy className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D5A40] dark:text-[#8CB490]">
            Lencana Utama 3
          </span>
          <h2 className="text-base font-serif font-bold text-stone-900 dark:text-white mt-0.5">
            🏆 ASMA’ WA SHIFAT
          </h2>
          <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 font-medium">
            Mengenal Allah berdasarkan Al-Qur’an dan hadits shahih tanpa menyerupakan makhluk.
          </p>
        </div>

        {/* Badge 4: Jalan Rasulullah */}
        <div className="p-5 rounded-[2rem] bg-white dark:bg-[#1E2620] border-b-4 border-[#D4AF37]/50 dark:border-stone-700 shadow-natural relative overflow-hidden">
          <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/20 text-[#9C7A14] dark:text-amber-300 flex items-center justify-center mb-3 border border-[#D4AF37]/40">
            <Trophy className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] dark:text-amber-300">
            Lencana Utama 4
          </span>
          <h2 className="text-base font-serif font-bold text-stone-900 dark:text-white mt-0.5">
            🏆 JALAN RASULULLAH ﷺ
          </h2>
          <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 font-medium">
            Berpegang teguh pada As-Sunnah & manhaj para sahabat (Firqah Najiyah).
          </p>
        </div>
      </div>

      {/* Interactive Action Section: SEKARANG, APA BUKTINYA? */}
      <div className="p-6 sm:p-9 rounded-[2.5rem] bg-[#F4F1EA] dark:bg-[#19221B] border-2 border-stone-300 dark:border-stone-700 mb-12 text-left shadow-natural">
        <div className="text-center mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#3D5A40] text-white text-xs font-bold uppercase tracking-wider">
            KOMITMEN AMAL NYATA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-white mt-2">
            SEKARANG, APA BUKTINYA?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto mt-1 font-medium">
            Tauhid bukan sekadar wacana di kepala, melainkan terwujud dalam adab dan integritas sehari-hari:
          </p>

          {/* Toggle Buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#1E2620] border border-stone-300 dark:border-stone-700 gap-2 mt-5">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('sekolah');
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'sekolah'
                  ? 'bg-[#3D5A40] text-white shadow-sm'
                  : 'text-stone-700 dark:text-stone-300 hover:text-[#3D5A40]'
              }`}
            >
              <School className="w-4 h-4" />
              <span>🏫 DI SEKOLAHKU</span>
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('rumah');
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'rumah'
                  ? 'bg-[#3D5A40] text-white shadow-sm'
                  : 'text-stone-700 dark:text-stone-300 hover:text-[#3D5A40]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>🏠 DI RUMAHKU</span>
            </button>
          </div>
        </div>

        {/* Tab Content Checklist */}
        {activeTab === 'sekolah' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn">
            {SCHOOL_HABITS.map(habit => {
              const isChecked = checkedSchool.includes(habit.id);
              return (
                <div
                  key={habit.id}
                  onClick={() => toggleSchoolCheck(habit.id)}
                  className={`p-4 rounded-2xl border transition flex items-center gap-3 cursor-pointer ${
                    isChecked
                      ? 'border-2 border-[#3D5A40] bg-white dark:bg-[#202E23] text-stone-900 dark:text-stone-100 shadow-sm'
                      : 'border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1E2620] text-stone-700 dark:text-stone-300 hover:border-stone-400'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${
                    isChecked ? 'bg-[#3D5A40] border-[#3D5A40] text-white' : 'border-stone-300 dark:border-stone-600'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold leading-snug">
                    {habit.text}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn">
            {HOME_HABITS.map(habit => {
              const isChecked = checkedHome.includes(habit.id);
              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHomeCheck(habit.id)}
                  className={`p-4 rounded-2xl border transition flex items-center gap-3 cursor-pointer ${
                    isChecked
                      ? 'border-2 border-[#3D5A40] bg-white dark:bg-[#202E23] text-stone-900 dark:text-stone-100 shadow-sm'
                      : 'border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1E2620] text-stone-700 dark:text-stone-300 hover:border-stone-400'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ${
                    isChecked ? 'bg-[#3D5A40] border-[#3D5A40] text-white' : 'border-stone-300 dark:border-stone-600'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold leading-snug">
                    {habit.text}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Animated Closing Vow / Kalimat Penutup */}
      <div className="p-7 sm:p-9 rounded-[2.5rem] bg-white dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-natural mb-10 max-w-2xl mx-auto text-center relative">
        <span className="text-xs font-bold text-[#3D5A40] dark:text-[#8CB490] uppercase tracking-widest">
          IKRAR PEJUANG TAUHID
        </span>

        <div className="mt-4 space-y-3 font-medium text-stone-800 dark:text-stone-100 text-base sm:text-lg leading-relaxed font-serif">
          <p className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Aku diciptakan oleh Allah.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            Aku diciptakan untuk beribadah kepada Allah.
          </p>
          <p className="animate-fadeIn text-[#3D5A40] dark:text-[#A7CCA9] font-bold" style={{ animationDelay: '0.8s' }}>
            Aku hanya beribadah kepada Allah semata.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: '1.1s' }}>
            Aku mengenal Allah melalui petunjuk-Nya dalam Al-Qur'an dan Sunnah shahih.
          </p>
          <p className="animate-fadeIn" style={{ animationDelay: '1.4s' }}>
            Aku mengikuti petunjuk Rasulullah ﷺ dan para sahabat.
          </p>
          <p className="animate-fadeIn font-bold text-[#D4AF37] pt-3 border-t border-stone-200 dark:border-stone-700" style={{ animationDelay: '1.7s' }}>
            Dan aku berusaha membawa cahaya tauhid itu ke sekolah, rumah, dan seluruh kehidupanku.
          </p>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onRestart}
          className="px-6 py-3.5 rounded-2xl bg-white dark:bg-[#1E2620] hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-bold text-sm shadow-xs transition flex items-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>🔄 Main Lagi</span>
        </button>

        <button
          onClick={onOpenScoreModal}
          className="px-8 py-3.5 rounded-2xl bg-[#3D5A40] hover:bg-[#2F4531] text-white font-bold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
        >
          <Trophy className="w-4 h-4 text-[#D4AF37]" />
          <span>🏆 Lihat Skorku ({xp} XP)</span>
        </button>
      </div>
    </div>
  );
};
