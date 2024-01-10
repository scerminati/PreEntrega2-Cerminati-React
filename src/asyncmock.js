const productos = [
  { id: 1, nombre: "Yerba", precio: 200, img: "./images/yerba.jpg" },
  { id: 2, nombre: "Fideos", precio: 500, img: "./images/fideos.jpg" },
  { id: 3, nombre: "Arroz", precio: 400, img: "./images/arroz.jpg" },
  { id: 4, nombre: "Aceite", precio: 900, img: "./images/aceite.jpg" },
];

export const getProductos = () => {
  return new Promise((respuesta) => {
    setTimeout(() => {
      respuesta(productos);
    }, 100);
  });
};
