/**
 * Web Speech API text-to-speech helper for Indonesian narration.
 */

class SpeechHelper {
  public enabled: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  public speak(text: string) {
    if (!this.enabled || typeof window === 'undefined' || !window.speechSynthesis) {
      return;
    }

    try {
      window.speechSynthesis.cancel(); // cancel any ongoing speech

      // Clean text from Arabic brackets or code if needed for smoother reading
      const cleanText = text
        .replace(/ﷺ/g, 'shallallahu alaihi wa sallam')
        .replace(/[،؛]/g, ',')
        .replace(/["“”]/g, '');

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'id-ID';
      utterance.rate = 0.95; // Slightly measured pace for clarity in education

      // Try to find an Indonesian voice if available
      const voices = window.speechSynthesis.getVoices();
      const idVoice = voices.find(v => v.lang.includes('id') || v.lang.includes('ID'));
      if (idVoice) {
        utterance.voice = idVoice;
      }

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      // ignore
    }
  }

  public stop() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
}

export const speechHelper = new SpeechHelper();
