import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import PaginaError from "./componentes/PaginaError/PaginaError";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="*" element={<PaginaError />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
