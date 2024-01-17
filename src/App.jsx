import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <body>
        <ItemListContainer saludoInicial="¡Bienvenido a SoGames!" />
        <ItemDetailContainer />
      </body>
    </>
  );
};

export default App;
