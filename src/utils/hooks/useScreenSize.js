import { useState, useEffect } from "react";

export default function useScreenSize(){

    const hasWindow = typeof window !== 'undefined';
  
    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }
  
    const [screenSize, setScreenSize] = useState(getWindowDimensions());
  
    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setScreenSize(getWindowDimensions());
        }
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, [hasWindow]);
  
    return screenSize;
  }
