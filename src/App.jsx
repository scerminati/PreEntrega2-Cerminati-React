import React from "react";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer saludoInicial="¡Bienvenido a SoGames!"/>
    </>
  );
};

export default App;
