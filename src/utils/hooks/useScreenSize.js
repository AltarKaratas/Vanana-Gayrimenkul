"use client";

import { useState, useLayoutEffect } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window === "undefined" ? 0 : window.innerWidth,
    height: typeof window === "undefined" ? 0 : window.innerHeight,
  });

  useLayoutEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setScreenSize({ width: window?.innerWidth, height: window?.innerHeight });
    }, 300);
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);

  return screenSize;
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
