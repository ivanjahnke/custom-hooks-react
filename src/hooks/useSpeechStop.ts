import { useEffect } from "react";

/**
 * Hook para detener la síntesis de voz cuando la pestaña está oculta.
 * @param stopSpeech Función para detener la síntesis de voz.
 */
export const useSpeechStop = (stopSpeech: () => void) => {
  useEffect(() => {
    console.log("useSpeechStop");

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopSpeech();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopSpeech();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [stopSpeech]);
};
