import React, { useState } from 'react';
import { useRecetasContext } from '../context/RecetasContext';

const ListaRecetas = () => {
  const { recetas, eliminarReceta, toggleFavorita, editarReceta } = useRecetasContext();
  const [recetaEditando, setRecetaEditando] = useState(null); // Estado para manejar la receta en edición

  // Manejador para cuando se selecciona una receta para editar
  const handleEditar = (receta) => {
    setRecetaEditando(receta);
  };

  // Manejador para cuando el usuario guarda los cambios de la receta editada
  const handleGuardarEdicion = (id, recetaActualizada) => {
    editarReceta(id, recetaActualizada);
    setRecetaEditando(null); // Cerrar el formulario de edición
  };

  return (
    <div className="recetas-container">
      <h2>Recetas agregadas:</h2>
      {recetas.map((receta) => (
        <div key={receta.id} className="receta-card">
          <h3>{receta.nombre}</h3>
          <p>{receta.ingredientes}</p>
          <p>{receta.pasos}</p>
          <button onClick={() => toggleFavorita(receta.id)}>
            {receta.favorita ? 'Quitar de Favoritas' : 'Agregar a Favoritas'}
          </button>
          <button onClick={() => eliminarReceta(receta.id)}>Eliminar</button>
          <button onClick={() => handleEditar(receta)}>Editar</button>
        </div>
      ))}

      {/* Si hay una receta editando, mostrar el formulario */}
      {recetaEditando && (
        <div className="form-container">
          <h3>Editar Receta</h3>
          <input
            type="text"
            value={recetaEditando.nombre}
            onChange={(e) => setRecetaEditando({ ...recetaEditando, nombre: e.target.value })}
            placeholder="Nombre de la receta"
          />
          <textarea
            value={recetaEditando.ingredientes}
            onChange={(e) => setRecetaEditando({ ...recetaEditando, ingredientes: e.target.value })}
            placeholder="Ingredientes"
          />
          <textarea
            value={recetaEditando.pasos}
            onChange={(e) => setRecetaEditando({ ...recetaEditando, pasos: e.target.value })}
            placeholder="Pasos de preparación"
          />
          <button onClick={() => handleGuardarEdicion(recetaEditando.id, recetaEditando)}>
            Guardar cambios
          </button>
          <button onClick={() => setRecetaEditando(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default ListaRecetas;
