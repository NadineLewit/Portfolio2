// PokemonContext.js
import React, { createContext, useContext, useState } from 'react';
import img1 from "../src/images/img1.png"
import img2 from "../src/images/img2.png"
import img3 from "../src/images/img3.png"
import img4 from "../src/images/img4.png"
import img5 from "../src/images/img5.png"
import img6 from "../src/images/img6.png"
import img7 from "../src/images/img7.png"
import img8 from "../src/images/img8.png"
import img9 from "../src/images/img9.png"

const contextP = createContext();

export function contextPProvider({ children }) {
const [proyectos, setProyectos] = useState(null);

const projects = [
    {
      name: "Catalogo de productos",
      description: `Un catalogo de productos variados hecho con React con diferentes funciones.`,
      image: img1,
      url: "https://github.com/NadineLewit/TP_Productos.git",
    },
    {
      name: "Trabajo de hardware",
      description: `Un trabajo centrado en 4 funcionalidades de hardware en React.`,
      image: img2,
      url: "https://github.com/NadineLewit/TP_Hardware.git",
    },
    {
      name: "Turnos de clinica",
      description: `Una pagina web completa y funcional basada en la facilitacion de la gestion de turnos y su administracion, tanto desde la perspectiva del paciente, como la del administrador.`,
      image: img3,
      url: "https://github.com/JulianaPansowyFurno/PF.git",
    },
    {
      name: "Catalogo de platos de comida",
      description: `Un catalogo de diferentes platos de comida con un respectivo menu en el que podras agregar y quitar los platos de tu preferencia.`,
      image: img4,
      url: "https://github.com/JulianaPansowyFurno/TPComidas.git",
    },
    {
      name: "Trabajo con Context State",
      description: `Una demostracion del uso de Context State llevado a la practica.`,
      image: img5,
      url: "https://github.com/JulianaPansowyFurno/tp07_Context.git",
    },
    {
      name: "Directorio de personas",
      description: `Un listado de personas con ciertos datos suyos, realizado con React Router.`,
      image: img6,
      url: "https://github.com/JulianaPansowyFurno/TP07_Directorio_de_personas.git",
    },
    {
      name: "Peliculas de disney",
      description: `Una API que explora el mundo de Disney, la cual permite conocer y modificar los personajes que lo componen y entender en qué películas estos participaron.`,
      image: img7,
      url: "https://github.com/JulianaPansowyFurno/TPPeliculas.git",
    },
    {
      name: "Banderas del mundo",
      description: `Utilizando una API de banderas, este trabajo te da el desafio de adivinar la que te muestra, cada vez que adivine, suma 10 puntos y cada vez que no adivine, reste 1 punto.`,
      image: img8,
      url: "https://github.com/JulianaPansowyFurno/TP6_Banderas.git",
    },
    {
      name: "Gestor de citas",
      description: `Este trabajo simula la accion de sacarle un turno a tu mascota a traves de una pagina web.`,
      image: img9,
      url: "https://github.com/JulianaPansowyFurno/TP4_GestordeCitas.git",
    },
  ];
  setProyectos(projects)

return (
<contextPProvider.Provider value={{ proyectos }}>
    {children}
</contextPProvider.Provider>
);
}

export function usePokemon() {
return useContext(contextP);
}