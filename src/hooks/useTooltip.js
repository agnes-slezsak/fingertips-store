import { useState, useRef } from "react";

export const useTooltip = () => {
  const [isVisible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const ref = useRef();

  const showTooltip = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY + 20,
        left: rect.right + window.scrollX - 260 - 20,
      });
    }
    setVisible(true);
  };

  const hideTooltip = () => setVisible(false);

  return {
    ref,
    position,
    isVisible,
    showTooltip,
    hideTooltip,
  };
};
