import { useEffect, useRef, RefObject } from "react";

/**
 * Ejecuta una función cuando se hace clic fuera del elemento referenciado.
 *
 * @param ref Referencia al elemento que quieres proteger
 * @param callback Función a ejecutar si se hace clic fuera
 *
 * @example
 * const dropdownRef = useRef<HTMLDivElement>(null);
 * useClickOutside(dropdownRef, () => {
 *   setDropdownOpen(false);
 * });
 * return (
 *   <div ref={dropdownRef}>
 *     contenido del dropdown
 *   </div>
 * );
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  const savedCallback = useRef(callback);

  // Mantiene siempre la versión actualizada del callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!ref?.current) return;

    const handleClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        savedCallback.current();
      }
    };

    document.addEventListener("pointerdown", handleClick);
    return () => {
      document.removeEventListener("pointerdown", handleClick);
    };
  }, [ref]);
};
