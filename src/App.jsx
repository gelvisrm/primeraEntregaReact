import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;

