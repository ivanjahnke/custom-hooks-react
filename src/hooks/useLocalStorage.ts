import { useState, useEffect, useCallback } from "react";

/**
 * Hook para manejar valores en localStorage.
 * @param key Clave para guardar el valor en localStorage.
 * @param initialValue Valor inicial o función para obtener el valor inicial.
 * @returns Un arreglo con el valor, una función para actualizarlo y otra para eliminarlo.
 *
 * @example
 * const [name, setName, removeName] = useLocalStorage<string>("name", "John Doe");
 * setName("Jane Doe");
 * removeName();
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T | (() => T)
) => {
  const getStoredValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) return JSON.parse(item);
      return typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;
    } catch (error) {
      console.error("useLocalStorage: Error al leer localStorage", error);
      return typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // Actualizar localStorage cuando cambia el valor
  useEffect(() => {
    try {
      if (storedValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.error("useLocalStorage: Error al escribir localStorage", error);
    }
  }, [key, storedValue]);

  // Permite eliminar el valor
  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setStoredValue(
        typeof initialValue === "function"
          ? (initialValue as () => T)()
          : initialValue
      );
    } catch (error) {
      console.error("useLocalStorage: Error al eliminar localStorage", error);
    }
  }, [key, initialValue]);

  return [storedValue, setStoredValue, remove] as const;
};
