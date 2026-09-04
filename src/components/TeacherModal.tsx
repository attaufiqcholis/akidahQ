import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  BookOpen, 
  MessageSquare, 
  CheckCircle2, 
  Play, 
  Compass, 
  FileText,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { TEACHER_GUIDES, CLASSROOM_DISCUSSIONS } from '../data/teacherData';
import { MISSIONS } from '../data/missionsData';
import { MissionId } from '../types';
import { soundFx } from '../utils/sound';

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToMission: (missionId: MissionId) => void;
}

export const TeacherModal: React.FC<TeacherModalProps> = ({
  isOpen,
  onClose,
  onJumpToMission
}) => {
  const [activeTab, setActiveTab] = useState<'kurikulum' | 'diskusi' | 'lompat'>('kurikulum');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-[#F4F1EA] dark:bg-[#1E2620]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3D5A40] text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                <span>👨‍🏫 MODE GURU & USTADZ</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#3D5A40]/15 dark:bg-[#3D5A40]/40 text-[#3D5A40] dark:text-[#A7CCA9]">
                  Attaufiq Jambi
                </span>
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                Panduan Mengajar, Kunci Jawaban, Bahan Diskusi, & Kontrol Level Kelas
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 px-4 pt-2 gap-2 bg-[#F4F1EA]/60 dark:bg-[#19221B] text-xs sm:text-sm font-bold">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('kurikulum');
            }}
            className={`px-4 py-2.5 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'kurikulum'
                ? 'border-[#3D5A40] text-[#3D5A40] dark:text-[#A7CCA9]'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Ringkasan & Dalil</span>
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('diskusi');
            }}
            className={`px-4 py-2.5 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'diskusi'
                ? 'border-[#3D5A40] text-[#3D5A40] dark:text-[#A7CCA9]'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pertanyaan Diskusi Kelas</span>
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('lompat');
            }}
            className={`px-4 py-2.5 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'lompat'
                ? 'border-[#3D5A40] text-[#3D5A40] dark:text-[#A7CCA9]'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Mulai dari Level Tertentu</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 bg-[#F9F7F2] dark:bg-[#151D17]">
          {/* TAB 1: KURIKULUM & DALIL */}
          {activeTab === 'kurikulum' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs text-stone-900 dark:text-amber-200 font-medium">
                <strong>Pedoman Pengajaran:</strong> Materi bersumber dari Kitab <em>“Jalan Golongan Yang Selamat”</em>. Sajikan materi secara interaktif, hubungkan dengan kehidupan remaja, dan hindari perdebatan kusir.
              </div>

              {TEACHER_GUIDES.map(guide => (
                <div
                  key={guide.missionId}
                  className="p-5 rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1E2620] shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                      {guide.title}
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F4F1EA] dark:bg-stone-800 text-[#3D5A40] dark:text-[#A7CCA9] border border-stone-200 dark:border-stone-700">
                      Misi {guide.missionId}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 mb-3 font-medium">
                    <strong>Tujuan:</strong> {guide.objective}
                  </p>

                  <div className="space-y-1 mb-3 text-xs text-stone-700 dark:text-stone-200 font-medium">
                    <strong className="text-stone-900 dark:text-white">Poin Kunci Penjelasan Guru:</strong>
                    {guide.keyConcepts.map((concept, i) => (
                      <div key={i} className="flex items-start gap-1.5 ml-1">
                        <span className="text-[#3D5A40] font-bold">•</span>
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] border border-stone-200 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-200 flex items-center gap-2 font-medium">
                    <span className="font-bold text-[#3D5A40] dark:text-[#8CB490]">Dalil Utama:</span>
                    <span>{guide.dalil}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: DISKUSI KELAS */}
          {activeTab === 'diskusi' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600 dark:text-stone-300 font-medium">
                Gunakan pertanyaan pemantik ini saat menghentikan game di tengah-tengah pelajaran untuk memicu keaktifan siswa berfikir kritis:
              </p>

              {CLASSROOM_DISCUSSIONS.map(item => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1E2620] shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-[#3D5A40] text-white font-bold text-xs flex items-center justify-center">
                      {item.id}
                    </span>
                    <span className="text-[11px] font-bold text-[#3D5A40] dark:text-[#8CB490] uppercase tracking-wide">
                      {item.contextNote}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-serif font-bold text-stone-900 dark:text-white mb-2.5">
                    “{item.question}”
                  </h3>

                  <div className="p-3.5 rounded-xl bg-[#F4F1EA] dark:bg-[#171E19] border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 font-medium">
                    <strong className="text-[#3D5A40] dark:text-[#8CB490]">💡 Panduan Guru Mengarahkan Jawaban Siswa:</strong>
                    <p className="mt-1 leading-relaxed">{item.teachingGuide}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: QUICK JUMP (MULAI DARI LEVEL TERTENTU) */}
          {activeTab === 'lompat' && (
            <div className="space-y-3">
              <p className="text-xs text-stone-600 dark:text-stone-300 mb-2 font-medium">
                Pilih misi di bawah ini untuk langsung memproyeksikan dan memainkannya di depan kelas tanpa harus menyelesaikan misi sebelumnya:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MISSIONS.map(m => (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundFx.playClick();
                      onJumpToMission(m.id);
                      onClose();
                    }}
                    className="p-4 rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1E2620] hover:border-[#3D5A40] hover:bg-[#F4F1EA]/60 dark:hover:bg-stone-800/50 text-left transition flex items-center justify-between gap-2 cursor-pointer shadow-2xs"
                  >
                    <div>
                      <div className="text-[10px] font-bold uppercase text-[#3D5A40] dark:text-[#8CB490]">
                        Misi {m.id}
                      </div>
                      <div className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-white">
                        {m.title}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#F4F1EA] dark:bg-stone-800 text-[#3D5A40] dark:text-[#A7CCA9] border border-stone-200 dark:border-stone-700">
                      <Play className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-[#F4F1EA] dark:bg-[#1E2620] flex justify-end">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#3D5A40] text-white font-bold text-xs sm:text-sm hover:bg-[#2F4531] transition cursor-pointer"
          >
            Tutup Mode Guru
          </button>
        </div>
      </div>
    </div>
  );
};
