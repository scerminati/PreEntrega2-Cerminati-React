import React from "react";
import "./ItemDetail.scss";

const ItemDetail = ({ id, nombre, precio, img, descripcion }) => {

  return (
    <div className="detalle">
      <div>
        <h2>{nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <p>ID: {id}</p>
        <p>{descripcion}</p>
      </div>
      <div>
        <img src={img} alt={nombre} />
      </div>
    </div>
  );
};

export default ItemDetail;
