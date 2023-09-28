import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export function GlobalState({ children }) {
  const [qstn, setQstn] = useState(null);

  return (
    <GlobalContext.Provider value={{ qstn, setQstn }}>
      {children}
    </GlobalContext.Provider>
  );
}