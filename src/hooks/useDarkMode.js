import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkModeBoolean, setDarkModeBoolean] = useLocalStorage(darkModeToggle);
  useEffect(() => {
    darkModeToggle
      ? body.classList.add(dark - mode)
      : body.classList.remove(dark - mode);
  }, [useDarkMode]);
  return [darkModeBoolean, setDarkModeBoolean];
};
