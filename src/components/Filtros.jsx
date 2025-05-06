import React, { useState } from 'react';
import { useRecetasContext } from '../context/RecetasContext';

const Filtros = () => {
  const { recetas } = useRecetasContext();
  const [busqueda, setBusqueda] = useState('');

  const recetasFiltradas = recetas.filter(
    (receta) =>
      receta.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      receta.ingredientes.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="filtro-container">
      <h2>Filtro</h2>
      <input
        type="text"
        placeholder="Buscar por nombre o ingredientes"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div>
        {recetasFiltradas.map((receta) => (
          <div key={receta.id}>
            <h3>{receta.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtros;
