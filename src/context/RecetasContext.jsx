import React, { createContext, useContext } from 'react';
import useRecetas from '../hooks/useRecetas';

const RecetasContext = createContext();

export const useRecetasContext = () => useContext(RecetasContext);

export const RecetasProvider = ({ children }) => {
  const recetasHook = useRecetas();

  return (
    <RecetasContext.Provider value={recetasHook}>
      {children}
    </RecetasContext.Provider>
  );
};
