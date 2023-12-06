"use client";

import { useState, useLayoutEffect } from "react";

export default function useScreenSize() {
  
  const [screenSize, setScreenSize] = useState({ width:window?.innerWidth, height:window?.innerHeight });
  
  useLayoutEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      console.log("!*******debounced resize");
      setScreenSize({width:window.innerWidth,height:window.innerHeight});
    }, 100);
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);

  return screenSize;
} 

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    },ms);
  };
}
