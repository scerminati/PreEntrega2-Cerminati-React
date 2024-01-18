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

  const titulo = idCategoria
    ? `Categoría: Juegos ${idCategoria
        .charAt(0)
        .toUpperCase()}${idCategoria.slice(1)}`
    : "¡Bienvenido a la Tienda!";

  return (
    <body>
      <h2>{titulo}</h2>
      <ItemList productos={productos} />
    </body>
  );
};

export default ItemListContainer;
