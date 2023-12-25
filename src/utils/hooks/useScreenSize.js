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

    if (typeof window !== "undefined") {
      window.addEventListener("resize", debouncedResizeHandler);
      return () => window.removeEventListener("resize", debouncedResizeHandler);
    }
  }, []);

  return screenSize;
}
