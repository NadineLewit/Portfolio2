import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
}));



const projects = [
  {
    name: "Catalogo de productos",
    description: `Un catalogo de productos variados hecho con React con diferentes funciones.`,
    image: project1,
    url: "https://github.com/NadineLewit/TP_Productos.git",
  },
  {
    name: "Trabajo de hardware",
    description: `Un trabajo centrado en 4 funcionalidades de hardware en React.`,
    image: project2,
    url: "https://github.com/NadineLewit/TP_Hardware.git",
  },
  {
    name: "Turnos de clinica",
    description: `Una pagina web completa y funcional basada en la facilitacion de la gestion de turnos y su administracion, tanto desde la perspectiva del paciente, como la del administrador.`,
    image: project3,
    url: "https://github.com/JulianaPansowyFurno/PF.git",
  },
  {
    name: "Catalogo de platos de comida",
    description: `Un catalogo de diferentes platos de comida con un respectivo menu en el que podras agregar y quitar los platos de tu preferencia.`,
    image: project4,
    url: "https://github.com/JulianaPansowyFurno/TPComidas.git",
  },
  {
    name: "Trabajo con Context State",
    description: `Una demostracion del uso de Context State llevado a la practica.`,
    image: project5,
    url: "https://github.com/JulianaPansowyFurno/tp07_Context.git",
  },
  {
    name: "Directorio de personas",
    description: `Un listado de personas con ciertos datos suyos, realizado con React Router.`,
    image: project6,
    url: "https://github.com/JulianaPansowyFurno/TP07_Directorio_de_personas.git",
  },
  {
    name: "Peliculas de disney",
    description: `Una API que explora el mundo de Disney, la cual permite conocer y modificar los personajes que lo componen y entender en qué películas estos participaron.`,
    image: project6,
    url: "https://github.com/JulianaPansowyFurno/TPPeliculas.git",
  },
  {
    name: "Banderas del mundo",
    description: `Utilizando una API de banderas, este trabajo te da el desafio de adivinar la que te muestra, cada vez que adivine, suma 10 puntos y cada vez que no adivine, reste 1 punto.`,
    image: project6,
    url: "https://github.com/JulianaPansowyFurno/TP6_Banderas.git",
  },
  {
    name: "Gestor de citas",
    description: `Este trabajo simula la accion de sacarle un turno a tu mascota a traves de una pagina web.`,
    image: project6,
    url: "https://github.com/JulianaPansowyFurno/TP4_GestordeCitas.git",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  const storedItems = JSON.parse(localStorage.getItem('favoritos')) || [];
  const [favs, setFavs] = useState(storedItems)



  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favs))
  }, [])


  return (
    <>
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
                <Button size="small" color="primary" style={{ marginLeft: 'auto' }} onClick={() => {
                    if (!favs.some(unFav => unFav.url === project.url)) {
                      setFavs([...favs, project]);
                      localStorage.setItem('favoritos', JSON.stringify([...favs, project]));
                    } else {
                      alert('Ya agregaste este proyecto a favoritos');
                    }
                  }}>
                  Favs
                  <img  className={classes.root}>
                    
                  </img>
                </Button>
                <Button size="small" color="primary" style={{ marginLeft: 'auto' }} onClick={() => setFavs(favs.filter(unFav => unFav !== unFav))}>
                  sacar favs
                  <img  className={classes.root}>
                    
                  </img>
                </Button>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Portfolio;
