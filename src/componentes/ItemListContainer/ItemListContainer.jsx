import { useEffect, useState } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludoInicial }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>{saludoInicial}</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;