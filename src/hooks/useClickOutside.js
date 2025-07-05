import { useEffect } from "react";

export const useClickOutside = (ref, onClickOutside, ignoreSelector) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore if click is inside the ref
      if (ref.current && ref.current.contains(event.target)) return;
      // Ignore if click is on an element matching the ignoreSelector
      if (ignoreSelector && event.target.closest(ignoreSelector)) return;
      onClickOutside();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside, ignoreSelector]);
};
