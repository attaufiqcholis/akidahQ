import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  School, 
  Home, 
  Milestone,
  RotateCcw,
  Check
} from 'lucide-react';
import { MissionData, MissionId } from '../types';
import { MiniChallengeWorship } from './MiniChallengeWorship';
import { RububiyahGame } from './RububiyahGame';
import { DragDropUluhiyah } from './DragDropUluhiyah';
import { BonusTermsBox } from './BonusTermsBox';
import { TauhidDiagram } from './TauhidDiagram';
import { soundFx } from '../utils/sound';
import { speechHelper } from '../utils/speech';

interface MissionLevelProps {
  mission: MissionData;
  onCompleteMission: (missionId: MissionId) => void;
  onAddXp: (amount: number) => void;
  onNavigateToMap: () => void;
  onNextMission: () => void;
  isCompleted: boolean;
  narrationEnabled: boolean;
}

export const MissionLevel: React.FC<MissionLevelProps> = ({
  mission,
  onCompleteMission,
  onAddXp,
  onNavigateToMap,
  onNextMission,
  isCompleted: alreadyCompleted,
  narrationEnabled
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showBadgeUnlock, setShowBadgeUnlock] = useState(false);
  const [widgetCompleted, setWidgetCompleted] = useState(false);

  // Reset all state when mission.id changes to prevent next mission from being marked as answered
  useEffect(() => {
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowBadgeUnlock(false);
    setWidgetCompleted(false);
  }, [mission.id]);

  const handleResetLevel = () => {
    soundFx.playClick();
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setShowBadgeUnlock(false);
    setWidgetCompleted(false);
  };

  const step = mission.steps[currentStepIndex];
  const totalSteps = mission.steps.length;

  // Trigger TTS narration if enabled when step changes
  useEffect(() => {
    if (narrationEnabled && step) {
      speechHelper.speak(`${step.question}.`);
    }
    return () => {
      speechHelper.stop();
    };
  }, [step, narrationEnabled]);

  const handleSelectOption = (optionId: string) => {
    soundFx.playClick();
    setSelectedOptionId(optionId);
    const chosen = step.options.find(opt => opt.id === optionId);
    if (!chosen) return;

    setIsAnswered(true);
    if (chosen.isCorrect) {
      setIsCorrect(true);
      soundFx.playCorrect();
      onAddXp(100);
      if (narrationEnabled) {
        speechHelper.speak(`Tepat sekali! ${step.explanation}`);
      }
    } else {
      setIsCorrect(false);
      soundFx.playWrong();
      if (narrationEnabled) {
        speechHelper.speak('Belum tepat. Coba perhatikan kembali konsepnya.');
      }
    }
  };

  const handleRetry = () => {
    soundFx.playClick();
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const handleNextStep = () => {
    soundFx.playClick();
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      // Finished all steps in mission
      triggerMissionComplete();
    }
  };

  const triggerMissionComplete = () => {
    soundFx.playLevelComplete();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
    setShowBadgeUnlock(true);
    onCompleteMission(mission.id);
  };

  const handleWidgetDone = () => {
    setWidgetCompleted(true);
    if (currentStepIndex >= totalSteps - 1) {
      triggerMissionComplete();
    }
  };

  return (
    <div className="py-6 sm:py-10 px-3 sm:px-6 max-w-3xl mx-auto">
      {/* Top Navigation & Breadcrumb */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <button
          onClick={onNavigateToMap}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-600 dark:text-stone-400 hover:text-[#3D5A40] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Peta Misi</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetLevel}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-600 text-xs font-bold transition cursor-pointer shadow-2xs"
            title="Mulai Ulang Misi Ini dari Langkah 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ulangi Misi</span>
          </button>
          <span className="text-xs font-semibold text-stone-500">
            {mission.id === 7 ? 'Tantangan Terakhir' : `Langkah ${currentStepIndex + 1} dari ${totalSteps}`}
          </span>
        </div>
      </div>

      {/* Mission Header Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-sm mb-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
            mission.id === 7
              ? 'bg-[#D4AF37]/20 text-amber-900 dark:text-amber-200 border border-[#D4AF37]/40'
              : 'bg-[#F4F1EA] dark:bg-[#171E19] text-[#3D5A40] dark:text-[#8CB490] border border-stone-300 dark:border-stone-700'
          }`}>
            {mission.category}
          </span>
          <span className="text-xs font-bold text-[#D4AF37] dark:text-amber-300 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" /> Lencana: {mission.badge.title}
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#3D5A40] dark:text-[#E2EBD8] leading-tight">
          {mission.title}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
          {mission.subtitle}
        </p>
      </div>

      {/* Specific Visual for Mission 6: Satu Jalan Lurus vs Banyak Jalan Bercabang */}
      {mission.id === 6 && (
        <div className="mb-6 p-5 rounded-2xl bg-[#3D5A40] text-white shadow-natural border-b-4 border-[#2F4531]">
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase mb-1">
            <Milestone className="w-4 h-4" /> ILUSTRASI HADITS IBNU MAS'UD
          </div>
          <h3 className="font-serif font-bold text-base sm:text-lg mb-2 text-white">
            Satu Jalan Lurus dan Banyak Jalan Bercabang
          </h3>
          <p className="text-xs sm:text-sm text-stone-100/90 leading-relaxed font-sans">
            Rasulullah ﷺ pernah menggariskan satu garis lurus di tanah dan bersabda: <em>"Ini adalah jalan Allah."</em> Lalu beliau membuat banyak garis bercabang di kiri dan kanannya dan bersabda: <em>"Ini adalah jalan-jalan yang di setiap pintunya ada setan yang mengajak kepadanya."</em>
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 p-3 bg-black/20 rounded-xl border border-white/10 text-center font-bold text-xs sm:text-sm text-amber-200">
            <span>🛤️ Jalan Lurus: Al-Qur'an & As-Sunnah (Jalan Para Sahabat)</span>
          </div>
        </div>
      )}

      {/* Main Question & Story Section */}
      <div className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[#1E2620] border-b-4 border-stone-300 dark:border-stone-700 shadow-natural">
        {step.contextStory && (
          <div className="p-4 rounded-2xl bg-[#F4F1EA] dark:bg-[#171E19] border border-stone-200 dark:border-stone-700 mb-5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
            {step.contextStory}
          </div>
        )}

        <div className="flex items-start justify-between gap-3 mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-serif font-bold text-stone-900 dark:text-white leading-snug">
            {step.question}
          </h2>
          <button
            onClick={() => speechHelper.speak(step.question)}
            className="p-2 rounded-xl bg-[#F4F1EA] dark:bg-stone-800 hover:bg-stone-200 text-[#3D5A40] dark:text-stone-300 shrink-0 border border-stone-300 dark:border-stone-700"
            title="Dengarkan Pertanyaan (Suara)"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-3 mb-6">
          {step.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let btnStyle = 'border-2 border-stone-200 dark:border-stone-700 bg-white dark:bg-[#19221B] text-stone-800 dark:text-stone-200 hover:border-[#3D5A40] hover:bg-[#F4F1EA]/60';
            
            if (isAnswered) {
              if (option.isCorrect) {
                btnStyle = 'border-2 border-[#3D5A40] bg-[#F4F1EA] dark:bg-[#202E23] text-[#1E3021] dark:text-stone-100 ring-2 ring-[#3D5A40]/30';
              } else if (isSelected && !option.isCorrect) {
                btnStyle = 'border-2 border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 ring-1 ring-rose-400';
              } else {
                btnStyle = 'border-2 border-stone-200 dark:border-stone-700/60 bg-stone-50/50 dark:bg-[#171E19]/40 text-stone-400 opacity-60';
              }
            } else if (isSelected) {
              btnStyle = 'border-2 border-[#3D5A40] bg-[#F4F1EA] dark:bg-stone-800 ring-2 ring-[#3D5A40]/40';
            }

            return (
              <button
                key={option.id}
                onClick={() => !isAnswered && handleSelectOption(option.id)}
                disabled={isAnswered && isCorrect}
                className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-bold transition flex items-center justify-between gap-3 cursor-pointer shadow-2xs ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                    isSelected || (isAnswered && option.isCorrect)
                      ? 'bg-[#3D5A40] text-white'
                      : 'bg-[#F4F1EA] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700'
                  }`}>
                    {option.id}
                  </span>
                  <span>{option.text}</span>
                </div>
                {isAnswered && option.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-[#3D5A40] dark:text-[#8CB490] shrink-0" />
                )}
                {isAnswered && isSelected && !option.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isAnswered && (
          <div className="space-y-4 animate-fadeIn">
            {isCorrect ? (
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F4F1EA] dark:bg-[#1A251D] border-2 border-[#3D5A40]/30 dark:border-[#3D5A40]/40">
                <div className="flex items-center gap-2 text-[#3D5A40] dark:text-[#8CB490] font-bold text-sm sm:text-base mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>JAWABAN TEPAT! (+100 XP)</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed mb-4 font-medium">
                  {step.explanation}
                </p>

                {/* Quran Quote if provided */}
                {step.arabicQuote && (
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#171E19] border border-stone-200 dark:border-stone-700 mb-4 shadow-sm">
                    <p className="font-arabic text-xl sm:text-2xl text-[#3D5A40] dark:text-[#A7CCA9] text-center mb-2 leading-loose">
                      {step.arabicQuote.arabic}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-300 font-serif italic text-center">
                      “{step.arabicQuote.translation}”
                    </p>
                    <p className="text-[11px] font-bold text-[#D4AF37] dark:text-amber-300 text-center mt-2">
                      — {step.arabicQuote.reference}
                    </p>
                  </div>
                )}

                {/* Real-life Application */}
                {step.lifeApplication && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#171E19] border border-stone-200 dark:border-stone-700">
                      <div className="flex items-center gap-1.5 font-bold text-stone-800 dark:text-stone-200 mb-1">
                        <School className="w-4 h-4 text-[#3D5A40] dark:text-[#8CB490]" />
                        <span>🏫 Di Sekolah</span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-300">
                        {step.lifeApplication.school}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#171E19] border border-stone-200 dark:border-stone-700">
                      <div className="flex items-center gap-1.5 font-bold text-stone-800 dark:text-stone-200 mb-1">
                        <Home className="w-4 h-4 text-[#D4AF37] dark:text-amber-300" />
                        <span>🏠 Di Rumah</span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-300">
                        {step.lifeApplication.home}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <strong>Belum tepat.</strong> Coba perhatikan kembali konsepnya dan pilih kembali jawaban yang paling tepat.
                </div>
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-rose-300 dark:border-rose-700 font-bold text-xs text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Coba Lagi</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Embedded Interactive Components for Specific Missions */}
        {isCorrect && (
          <>
            {mission.id === 1 && !widgetCompleted && (
              <MiniChallengeWorship onCompleted={handleWidgetDone} />
            )}

            {mission.id === 2 && !widgetCompleted && (
              <RububiyahGame onCompleted={handleWidgetDone} />
            )}

            {mission.id === 3 && !widgetCompleted && (
              <DragDropUluhiyah onCompleted={handleWidgetDone} />
            )}

            {mission.id === 4 && (
              <BonusTermsBox />
            )}

            {mission.id === 6 && (
              <TauhidDiagram />
            )}
          </>
        )}

        {/* Step Forward / Finish Button */}
        {isCorrect && (
          <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-700 flex justify-end">
            {([1, 2, 3].includes(mission.id) && !widgetCompleted) ? (
              <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                *Selesaikan tantangan interaktif di atas untuk melanjutkan
              </p>
            ) : currentStepIndex < totalSteps - 1 ? (
              <button
                onClick={handleNextStep}
                className="px-6 py-3.5 rounded-2xl bg-[#3D5A40] hover:bg-[#2F4531] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <span>Langkah Berikutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : !showBadgeUnlock ? (
              <button
                onClick={triggerMissionComplete}
                className="px-7 py-3.5 rounded-2xl bg-[#D4AF37] hover:bg-[#c59f2e] text-stone-950 font-black text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Selesaikan Misi Ini!</span>
              </button>
            ) : null}
          </div>
        )}
      </div>

      {/* Badge Unlock Celebration Card */}
      {showBadgeUnlock && (
        <div className="mt-6 p-7 sm:p-9 rounded-[2rem] bg-[#3D5A40] text-white shadow-natural-lg text-center animate-fadeIn border-b-4 border-[#2F4531]">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-2xl bg-[#D4AF37] text-stone-950 flex items-center justify-center font-bold shadow-lg ring-4 ring-white/20 animate-bounce">
            <Award className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-amber-200 text-xs font-bold tracking-wider uppercase">
            🔓 MISI {mission.id} SELESAI • +200 BONUS XP
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-3 mb-1">
            Lencana Dibuka: {mission.badge.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-200 max-w-md mx-auto mb-6">
            {mission.badge.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onNavigateToMap}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition cursor-pointer border border-white/20"
            >
              Lihat Peta Misi
            </button>
            <button
              onClick={() => {
                handleResetLevel();
                onNextMission();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c59f2e] text-stone-950 font-bold text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{mission.id === 7 ? 'Lihat Hasil Akhir' : 'Lanjut ke Misi Berikutnya'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
