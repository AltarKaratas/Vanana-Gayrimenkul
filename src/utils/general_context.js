"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import useScreenSize from "./hooks/useScreenSize";

export const GeneralContext = React.createContext({
  screenSize: {},
});

export default function GeneralContextProvider(props) {
  const screenSize = useScreenSize();

 
  return (
    <GeneralContext.Provider
      value={{
        screenSize,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};


