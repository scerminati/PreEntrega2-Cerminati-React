import React from "react";

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <p>ID: {id}</p>
      <p>{descripcion}</p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
