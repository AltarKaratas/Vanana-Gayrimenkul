"use client";

import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  function debouncedResizeHandler () {
    setScreenSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
  };

  useEffect(() => {
    debouncedResizeHandler();
  })

  useEffect(() => {
      window.addEventListener("resize", debouncedResizeHandler);
      return () => window.removeEventListener("resize", debouncedResizeHandler);
    
  }, []);

  return screenSize;
}
