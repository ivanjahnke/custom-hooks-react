import { useState, useEffect, useRef } from "react";

/**
 * Hook para copiar texto al portapapeles.
 *
 * @param resetDelay Tiempo en milisegundos para resetear `copied` (por defecto 2000ms)
 * @returns { copied, copy }
 *
 * @example
 * const { copied, copy } = useCopyToClipboard();
 * return (
 *   <button onClick={() => copy("Texto a copiar")}>
 *     {copied ? "✅ Copiado!" : "📋 Copiar"}
 *   </button>
 * );
 */
export const useCopyToClipboard = (resetDelay: number = 2000) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const copy = async (text: string) => {
    if (!navigator?.clipboard?.writeText) {
      console.warn("Clipboard API not supported");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Reiniciar estado después del delay
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), resetDelay);
    } catch (error) {
      console.error("useCopyToClipboard: error al copiar", error);
      setCopied(false);
    }
  };

  // Limpiar el timeout si el componente se desmonta
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { copied, copy };
};
