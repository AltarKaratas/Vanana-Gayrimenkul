"use client";

import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
  });

  

  useEffect(() => {
    function debouncedResizeHandler() {
      setScreenSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }
    debouncedResizeHandler();
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);

  return screenSize;
}
