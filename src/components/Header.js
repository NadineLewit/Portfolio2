import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/fotoMia1.jpg";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useProyectos } from "../MyContext";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title1: {
    color: "tomato",
  },
  title2: {
    color: "tomato",
    marginLeft: "41.3%"
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  mainContainer: {
    marginTop: "50%",
    marginBottom: "2.9%"
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

const Header = () => {
  const classes = useStyles();
  const storedItems = JSON.parse(localStorage.getItem('favoritos')) || [];
  const [favs, setFavs] = useState(storedItems)
  const { projects } = useProyectos();

  return (
    <>
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Nadine Lewit"/>
      </Grid>
      <Typography className={classes.title1} variant="h4">
        <Typed strings={["Nadine Lewit"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Desarrolladora de Frontend",
            "Desarrolladora en React",
            "Desarrolladora de Backend",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>

      
    </Box>
    <Box component="div" className={classes.mainContainer}>
    <Typography className={classes.title2} variant="h4">
        <Typed strings={["Proyectos destacados"]} typeSpeed={40} />
      </Typography>
    <Grid container justify="center">
    
      {projects.map((project, i) => (
        i < 6 && (
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
              <Link to={`/detalle/${i}`}>
                Mas detalle
              </Link>
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
        )
      ))}
    </Grid>
  </Box>
  </>
  );
};

export default Header;
