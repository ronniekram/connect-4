import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 768,
    height: 1024,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener(`resize`, handleResize);

    handleResize();
    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  return windowSize;
};