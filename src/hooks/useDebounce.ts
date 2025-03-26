import { useState, useEffect } from "react";

/**
 * Retorna un valor debounced tras esperar el delay indicado.
 *
 * @param value Valor a "debouncear"
 * @param delay Milisegundos a esperar (por defecto 500ms)
 * @returns El valor actualizado tras el delay
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearch = useDebounce(searchTerm, 300);
 * useEffect(() => {
 *   if (debouncedSearch) {
 *     fetchResults(debouncedSearch);
 *   }
 * }, [debouncedSearch]);
 */
export const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Ignorar si el delay no es válido
    if (delay <= 0) {
      setDebouncedValue(value);
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup del timeout si cambia el valor antes de tiempo
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
