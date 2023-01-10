import { createContext, useContext, useState } from "react";

const ToggleCardContext = createContext();

export function ToggleCardContextProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleCardContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleCardContext.Provider>
  );
}

export function ToggleAuth() {
  return useContext(ToggleCardContext);
}
