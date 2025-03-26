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
export declare const useLocalStorage: <T>(key: string, initialValue: T | (() => T)) => readonly [T, import("react").Dispatch<import("react").SetStateAction<T>>, () => void];
