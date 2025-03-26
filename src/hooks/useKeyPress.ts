import { useEffect, useState } from "react";

/**
 * Hook que detecta si una tecla específica está siendo presionada.
 *
 * @param targetKey La tecla que quieres escuchar (ej: "Enter", "Escape", "a")
 * @returns `true` si la tecla está presionada
 *
 * @example
 * const isEscapePressed = useKeyPress("Escape");
 * useEffect(() => {
 *   if (isEscapePressed) {
 *     console.log("Escape presionado → cerrar modal");
 *     // closeModal();
 *   }
 * }, [isEscapePressed]);
 */
export const useKeyPress = (targetKey: string): boolean => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const downHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey && !pressed) {
        setPressed(true);
      }
    };

    const upHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey && pressed) {
        setPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey, pressed]);

  return pressed;
};
