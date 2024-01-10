import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <img src="../images/banner.png" className="banner" alt="" />
      <div className="navBar">
        <div className="titulos">
          <h1>SoGames</h1>
          <h2>Tienda de Juegos de Mesa</h2>
        </div>
        <ul>
          <li>Top 10</li>
          <li>Competitivos</li>
          <li>Cooperativos</li>
          <li>Estrategia</li>
          <li>Familia</li>
        </ul>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
