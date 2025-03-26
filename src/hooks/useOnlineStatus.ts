import { useEffect, useState } from "react";

/**
 * Hook que detecta si el usuario está conectado a Internet.
 *
 * Se actualiza automáticamente al perder o recuperar conexión.
 *
 * @example
 * const isOnline = useOnlineStatus();
 * return (
 *   <div>
 *     Estado de conexión: {isOnline ? "🟢 En línea" : "🔴 Sin conexión"}
 *   </div>
 * );
 */
export const useOnlineStatus = (): boolean => {
  const isBrowser = typeof window !== "undefined" && typeof navigator !== "undefined";

  const getInitialStatus = (): boolean =>
    isBrowser && typeof navigator.onLine === "boolean" ? navigator.onLine : true;

  const [isOnline, setIsOnline] = useState<boolean>(getInitialStatus);

  useEffect(() => {
    if (!isBrowser) return;

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isBrowser]);

  return isOnline;
};
