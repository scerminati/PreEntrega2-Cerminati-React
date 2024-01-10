import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </>
  );
};

export default ItemList;
