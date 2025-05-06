import React from 'react';
import { useRecetasContext } from '../context/RecetasContext';

const Favoritas = () => {
  const { recetas } = useRecetasContext();
  const favoritas = recetas.filter((receta) => receta.favorita);

  return (
    <div className="favoritas-container">
      <h2>Recetas Favoritas</h2>
      {favoritas.map((receta) => (
        <div key={receta.id} className="receta-card">
          <h3>{receta.nombre}</h3>
          {receta.imagen && <img src={receta.imagen} alt={receta.nombre} />}
        </div>
      ))}
    </div>
  );
};

export default Favoritas;
