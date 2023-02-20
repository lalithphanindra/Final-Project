import { useState, useContext, createContext } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  return (
    <StateContext.Provider value={{ user, setUser }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
