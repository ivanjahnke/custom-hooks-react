import { useEffect } from "react";
/**
 * Hook para deshabilitar el clic derecho en la aplicación o un componente específico.
 */
export const useDisableRightClick = () => {
    useEffect(() => {
        const handleRightClick = (event) => {
            event.preventDefault();
        };
        document.addEventListener("contextmenu", handleRightClick);
        return () => {
            document.removeEventListener("contextmenu", handleRightClick);
        };
    }, []);
};
