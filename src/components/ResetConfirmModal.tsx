import React from 'react';
import { RotateCcw, X, AlertTriangle } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    soundFx.playClick();
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    soundFx.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-md rounded-[2rem] bg-white border-2 border-stone-300 shadow-2xl overflow-hidden p-6 sm:p-7 text-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-modal-title"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#9C7A14] flex items-center justify-center">
          <RotateCcw className="w-7 h-7 animate-spin-slow" />
        </div>

        <h3 id="reset-modal-title" className="font-serif font-bold text-xl text-stone-900 mb-2">
          Mulai Ulang Petualangan?
        </h3>

        <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed mb-6">
          Tindakan ini akan <strong>mengulang kembali seluruh progres</strong> petualangan Misi Tauhid dari awal. Skor XP dan lencana yang telah kamu raih akan dimulai kembali dari 0.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleCancel}
            className="flex-1 py-3 px-4 rounded-xl border border-stone-300 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs sm:text-sm transition cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ya, Mulai Ulang</span>
          </button>
        </div>
      </div>
    </div>
  );
};
