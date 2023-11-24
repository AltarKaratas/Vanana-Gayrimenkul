import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width:0,
    height: 0,
  });
  console.log(window);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenSize;
};
export default useScreenSize;
