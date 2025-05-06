import React, { useState } from 'react';
import { useRecetasContext } from '../context/RecetasContext';

const Formulario = () => {
  const { agregarReceta } = useRecetasContext();

  const [nombre, setNombre] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [pasos, setPasos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!nombre.trim() || !ingredientes.trim() || !pasos.trim()) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const nuevaReceta = {
      id: Date.now(),
      nombre: nombre.trim(),
      ingredientes: ingredientes.trim(),
      pasos: pasos.trim(),
      favorita: false,
    };

    agregarReceta(nuevaReceta);

    // Limpiar formulario
    setNombre('');
    setIngredientes('');
    setPasos('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Agregar nueva receta</h2>

      <input
        type="text"
        placeholder="Nombre de la receta"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <textarea
        placeholder="Ingredientes (separados por comas)"
        value={ingredientes}
        onChange={(e) => setIngredientes(e.target.value)}
        required
      />

      <textarea
        placeholder="Pasos de preparación"
        value={pasos}
        onChange={(e) => setPasos(e.target.value)}
        required
      />

      <button type="submit">Agregar Receta</button>
    </form>
  );
};

export default Formulario;
