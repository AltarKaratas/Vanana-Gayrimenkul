"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const GeneralContext = React.createContext({
  activeNavItem: "",
  isNavOpen: false,
  navButtonHandler: () => {},
  navActiveItemHandler: () => {},
  screenSize:{},
});

export const GeneralContextProvider = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(1);
  const [screenSize,setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
})

useEffect(() => {
  const handleResize = () => {
      setScreenSize({
          width:window.innerWidth,
          height:window.innerHeight,
      });
  }
  window.addEventListener("resize",handleResize);

  return () => {
      window.removeEventListener("resize",handleResize);
  }
},[])

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
        screenSize
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
