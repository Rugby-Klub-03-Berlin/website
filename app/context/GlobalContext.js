"use client";

import { createContext, useContext, useState } from "react";

export const useDateContext = () => useContext(createContext);

const GlobalContext = createContext({
  category: "",
  setCategory: () => "",
  data: [],
  setData: () => [],
  appear: false,
  setAppear: () => false,
  selectedEvent: null,
  setSelectedEvent: () => null,
});

export const GlobalContextProvider = ({ children }) => {
  const [category, setCategory] = useState("herren1");
  const [data, setData] = useState([]);
  const [appear, setAppear] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        category,
        setCategory,
        data,
        setData,
        appear,
        setAppear,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
