import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Hook que devuelve el tamaño actual de la ventana (`window.innerWidth`, `innerHeight`).
 * Se actualiza automáticamente al hacer resize.
 *
 * @example
 * const { width } = useWindowSize();
 * return (
 *   <div>
 *     {width < 768 ? "Pantalla móvil" : "Pantalla grande"}
 *   </div>
 * );
 */
export const useWindowSize = (): WindowSize => {
  const getSize = (): WindowSize => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const [windowSize, setWindowSize] = useState<WindowSize>(getSize);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = getSize();
      setWindowSize((prev) => {
        if (prev.width !== width || prev.height !== height) {
          return { width, height };
        }
        return prev;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
