"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const GeneralContext = React.createContext({
  activeNavItem: "",
  isNavOpen: false,
  navButtonHandler: () => {},
  navActiveItemHandler: () => {},
  screenSize: {},
});

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export const GeneralContextProvider = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(1);
  const [screenSize, setScreenSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowSize());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navButtonHandler = (e) => {
    setIsNavOpen((prevState) => {
      return !prevState;
    });
  };

  const navActiveItemHandler = (e) => {
    setActiveNavItem(e.target.id);
    //nav itemlara isim vericez sonra üzerinden hangisi olduğunu alıp ona göre highlight edicez.
  };

  return (
    <GeneralContext.Provider
      value={{
        isNavOpen,
        activeNavItem,
        navButtonHandler,
        navActiveItemHandler,
        screenSize,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
