"use client";

import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const debouncedResizeHandler = () => {
      setScreenSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

      window.addEventListener("resize", debouncedResizeHandler);
      debouncedResizeHandler();
      return () => window.removeEventListener("resize", debouncedResizeHandler);
    
  }, []);

  return screenSize;
}
