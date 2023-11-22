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

import img111 from "../src/images/catalogoEj1.JPG";
import img1111 from "../src/images/catalogoEj2.JPG";

import img222 from "../src/images/hardwareEj1.PNG";
import img2222 from "../src/images/hardwareEj2.PNG";

import img333 from "../src/images/clinicaEj1.PNG";
import img3333 from "../src/images/clinicaEj2.PNG";

import img444 from "../src/images/comidaImg.jpg";
import img4444 from "../src/images/comidaImg.jpg";

import img555 from "../src/images/contextImg.jfif";
import img5555 from "../src/images/contextImg.jfif";

import img666 from "../src/images/personasImg.avif";
import img6666 from "../src/images/personasImg.avif";

import img777 from "../src/images/disneyImg.jpg";
import img7777 from "../src/images/disneyImg.jpg";

import img888 from "../src/images/banderasImg.jpg";
import img8888 from "../src/images/banderasImg.jpg";

import img999 from "../src/images/citasImg.jpg";
import img9999 from "../src/images/citasImg.jpg";

const MyContext = createContext();

export function ContextProvider ({ children }) {

const projects = [
    {
        id: 0,  
        name: "Catalogo de productos",
        description: `Un catalogo de productos variados hecho con React con diferentes funciones.`,
        desc: "Un catalogo de productos variados, desde perfumes hasta productos tecnologicos, como smartphones o laptops. Esta programado con React y posee diferentes funciones, como buscar algun producto en especifico, filtrar por categorias o enterarte sobre mas datos del producto en cuestion.",
        image: img1,
        image2: img11,
        image3: img111,
        image4: img1111,
        url: "https://github.com/NadineLewit/TP_Productos.git",
    },
    {
        id: 1,
        name: "Trabajo de hardware",
        description: `Un trabajo centrado en 4 funcionalidades de hardware en React.`,
        desc: "En este proyecto, se creo una aplicacion movil con diferentes funcionalidades, como acceder a tus contactos y sus numeros, ver la temperatura, la hora y tu ubicacion actual, realizar un llamado de emergencia a un numero que vos eligas con tan solo agitar el celular. Tambien presenta la posibilidad de mostrar un QR, que cuando un tercero lo escanee, le muestre los nombres de quienes crearon el proyecto. En este mismo espacio, tambien tendras la posibilidad de vos mismo escanear QRs de otros, mediante una camara que capta estos codigos.",
        image: img2,
        image2: img22,
        image3: img222,
        image4: img2222,
        url: "https://github.com/NadineLewit/TP_Hardware.git",
    },
    {
        id: 2,  
        name: "Turnos de clinica",
        description: `Una pagina web completa y funcional basada en la facilitacion de la gestion de turnos y su administracion, tanto desde la perspectiva del paciente, como la del administrador.`,
        desc: "Este proyecto presenta una pagina web completa y funcional basada en la facilitacion de la gestion de turnos y su administracion, tanto desde la perspectiva del paciente, como la del administrador. Esta preparada para trabajar con una clinica que tenga cierta desorganizacion en el sentido de el manejo de sus turnos, ya que mediante este proyecto, un paciente podra sacar turnos desde la comodidad de su casa, seleccionando todas sus preferencias y luego verlo en su agenda virtual, con la posibilidad de cancelarlo o posponerlo. Por el lado de los administradores, estos tendran acceso a todos los turnos, con la posibilidad de filtrar por medico, paciente, etc. A su vez, en caso de que un medico/a nuevo/a comience a trabajar para dicha clinica, tambien podra agregarlo a la base de datos, sin la necesidad de hardcodear su informacion.",
        image: img3,
        image2: img33,
        image3: img333,
        image4: img3333,
        url: "https://github.com/JulianaPansowyFurno/PF.git",
    },
    {        
        id: 3,  
        name: "Catalogo de platos de comida",
        description: `Un catalogo de diferentes platos de comida con un respectivo menu en el que podras agregar y quitar los platos de tu preferencia.`,
        desc: "asdsad",
        image: img4,
        image2: img44,
        image3: img444,
        image4: img4444,
        url: "https://github.com/JulianaPansowyFurno/TPComidas.git",
    },
    {        
        id: 4,  
        name: "Trabajo con Context State",
        description: `Una demostracion del uso de Context State llevado a la practica.`,
        desc: "asdasd",
        image: img5,
        image2: img55,
        image3: img555,
        image4: img5555,
        url: "https://github.com/JulianaPansowyFurno/tp07_Context.git",
    },
    {        
        id: 5,
        name: "Directorio de personas",
        description: `Un listado de personas con ciertos datos suyos, realizado con React Router.`,
        desc: "dsadsad",
        image: img6,
        image2: img66,
        image3: img666,
        image4: img6666,
        url: "https://github.com/JulianaPansowyFurno/TP07_Directorio_de_personas.git",
    },
    {
        id: 6,  
        name: "Peliculas de disney",
        description: `Una API que explora el mundo de Disney, la cual permite conocer y modificar los personajes que lo componen y entender en qué películas estos participaron.`,
        desc: "asdsad",
        image: img7,
        image2: img77,
        image3: img777,
        image4: img7777,
        url: "https://github.com/JulianaPansowyFurno/TPPeliculas.git",
    },
    {
        id: 7,
        name: "Banderas del mundo",
        description: `Utilizando una API de banderas, este trabajo te da el desafio de adivinar la que te muestra, cada vez que adivine, suma 10 puntos y cada vez que no adivine, reste 1 punto.`,
        desc: "dadsdsa",
        image: img8,
        image2: img88,
        image3: img888,
        image4: img8888,
        url: "https://github.com/JulianaPansowyFurno/TP6_Banderas.git",
    },
    {
        id: 8,  
        name: "Gestor de citas",
        description: `Este trabajo simula la accion de sacarle un turno a tu mascota a traves de una pagina web.`,
        desc: "dasdsa",
        image: img9,
        image2: img99,
        image3: img999,
        image4: img9999,
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