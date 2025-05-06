import React from 'react';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';
import Favoritas from './components/Favoritas';
import Filtros from './components/Filtros';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="titulo">Gestión de Recetas</h1>
      <Formulario />
      <div className="seccion">
        <Filtros />
        <ListaRecetas />
      </div>
      <Favoritas />
    </div>
  );
};

export default App;