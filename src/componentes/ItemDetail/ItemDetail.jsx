import React from "react";
import "./ItemDetail.scss";

const ItemDetail = ({
  id,
  ano,
  nombre,
  precio,
  img,
  complejidad,
  tiempo,
  raiting,
  minjug,
  maxjug,
  descripcion,
}) => {
  return (
    <div className="detalle">
      <div className="textoDetalle">
        <h2>{nombre}</h2>
        <h3>Año de Publicación: {ano}</h3>
        <p>
          <strong>Complejidad:</strong> {complejidad}
        </p>
        <p>
          <strong>Tiempo de juego:</strong> {tiempo} min
        </p>
        <p>
          <strong>Raiting:</strong> {raiting}
        </p>
        <p>
          <strong>Número de jugadores:</strong> De {minjug} a {maxjug}.
        </p>
        <p>
          <strong>Precio:</strong> ${precio}
        </p>
        <p>
          <strong>Descripción del juego:</strong>
        </p>
        <p>{descripcion}</p>
        <p><strong>ID:</strong> {id}</p>
      </div>
      <div>
        <img src={img} alt={nombre} />
      </div>
    </div>
  );
};

export default ItemDetail;
