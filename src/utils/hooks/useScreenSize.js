"use client";

import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    function debouncedResizeHandler() {
      setScreenSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }
    if (typeof window !== "undefined") {
      debouncedResizeHandler();
      window.addEventListener("resize", debouncedResizeHandler);
      return () => window.removeEventListener("resize", debouncedResizeHandler);
    }
  }, []);

  return screenSize;
}
