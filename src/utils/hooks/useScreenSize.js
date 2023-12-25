"use client";

import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function debouncedResizeHandler () {
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
