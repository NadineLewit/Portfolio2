import React, { createContext, useContext, useState } from 'react';

import img1 from "../src/images/1.png";
import img2 from "../src/images/2.png";
import img3 from "../src/images/3.png";
import img4 from "../src/images/4.png";
import img5 from "../src/images/5.png";
import img6 from "../src/images/6.png";
import img7 from "../src/images/7.png";
import img8 from "../src/images/8.png";
import img9 from "../src/images/9.png";

import img11 from "../src/images/catalogoImg.png";
import img22 from "../src/images/hardwareImg.jpg";
import img33 from "../src/images/clinicaImg.jpg";
import img44 from "../src/images/comidaImg.jpg";
import img55 from "../src/images/contextImg.jfif";
import img66 from "../src/images/personasImg.avif";
import img77 from "../src/images/disneyImg.jpg";
import img88 from "../src/images/banderasImg.jpg";
import img99 from "../src/images/citasImg.jpg";

const MyContext = createContext();

export function ContextProvider ({ children }) {

const projects = [
    {
        id: 0,  
        name: "Catalogo de productos",
        description: `Un catalogo de productos variados hecho con React con diferentes funciones.`,
        image: img1,
        image2: img11,
        url: "https://github.com/NadineLewit/TP_Productos.git",
    },
    {
        id: 1,
        name: "Trabajo de hardware",
        description: `Un trabajo centrado en 4 funcionalidades de hardware en React.`,
        image: img2,
        image2: img22,
        url: "https://github.com/NadineLewit/TP_Hardware.git",
    },
    {
        id: 2,  
        name: "Turnos de clinica",
        description: `Una pagina web completa y funcional basada en la facilitacion de la gestion de turnos y su administracion, tanto desde la perspectiva del paciente, como la del administrador.`,
        image: img3,
        image2: img33,
        url: "https://github.com/JulianaPansowyFurno/PF.git",
    },
    {        
        id: 3,  
        name: "Catalogo de platos de comida",
        description: `Un catalogo de diferentes platos de comida con un respectivo menu en el que podras agregar y quitar los platos de tu preferencia.`,
        image: img4,
        image2: img44,
        url: "https://github.com/JulianaPansowyFurno/TPComidas.git",
    },
    {        
        id: 4,  
        name: "Trabajo con Context State",
        description: `Una demostracion del uso de Context State llevado a la practica.`,
        image: img5,
        image2: img55,
        url: "https://github.com/JulianaPansowyFurno/tp07_Context.git",
    },
    {        
        id: 5,
        name: "Directorio de personas",
        description: `Un listado de personas con ciertos datos suyos, realizado con React Router.`,
        image: img6,
        image2: img66,
        url: "https://github.com/JulianaPansowyFurno/TP07_Directorio_de_personas.git",
    },
    {
        id: 6,  
        name: "Peliculas de disney",
        description: `Una API que explora el mundo de Disney, la cual permite conocer y modificar los personajes que lo componen y entender en qué películas estos participaron.`,
        image: img7,
        image2: img77,
        url: "https://github.com/JulianaPansowyFurno/TPPeliculas.git",
    },
    {
        id: 7,
        name: "Banderas del mundo",
        description: `Utilizando una API de banderas, este trabajo te da el desafio de adivinar la que te muestra, cada vez que adivine, suma 10 puntos y cada vez que no adivine, reste 1 punto.`,
        image: img8,
        image2: img88,
        url: "https://github.com/JulianaPansowyFurno/TP6_Banderas.git",
    },
    {
        id: 8,  
        name: "Gestor de citas",
        description: `Este trabajo simula la accion de sacarle un turno a tu mascota a traves de una pagina web.`,
        image: img9,
        image2: img99,
        url: "https://github.com/JulianaPansowyFurno/TP4_GestordeCitas.git",
    },
  ]


return (
<MyContext.Provider value={{ projects }}>
    {children}
</MyContext.Provider>
);
}

export function useProyectos() {
return useContext(MyContext);
}