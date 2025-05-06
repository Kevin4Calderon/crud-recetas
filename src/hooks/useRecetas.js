import { useState, useEffect } from 'react';

const useRecetas = () => {
  const [recetas, setRecetas] = useState(() => {
    const storedRecetas = localStorage.getItem('recetas');
    return storedRecetas ? JSON.parse(storedRecetas) : [];
  });

  useEffect(() => {
    localStorage.setItem('recetas', JSON.stringify(recetas));
  }, [recetas]);

  const agregarReceta = (receta) => {
    setRecetas((prevRecetas) => [...prevRecetas, receta]);
  };

  const editarReceta = (id, recetaActualizada) => {
    setRecetas((prevRecetas) =>
      prevRecetas.map((receta) =>
        receta.id === id ? { ...receta, ...recetaActualizada } : receta
      )
    );
  };
  

  const eliminarReceta = (id) => {
    setRecetas((prevRecetas) => prevRecetas.filter((receta) => receta.id !== id));
  };

  const toggleFavorita = (id) => {
    setRecetas((prevRecetas) =>
      prevRecetas.map((receta) =>
        receta.id === id ? { ...receta, favorita: !receta.favorita } : receta
      )
    );
  };

  return {
    recetas,
    agregarReceta,
    editarReceta,
    eliminarReceta,
    toggleFavorita,
  };
};

export default useRecetas;