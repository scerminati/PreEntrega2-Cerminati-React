import { useEffect, useState } from "react";
import { getProductos, getUnaCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProducto = idCategoria ? getUnaCategoria : getProductos;

    funcionProducto(idCategoria)
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <main>
      <ItemList productos={productos} />
    </main>
  );
};

export default ItemListContainer;
