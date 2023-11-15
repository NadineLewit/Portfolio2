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
import { Link } from "react-router-dom";
import { useProyectos } from "../MyContext";


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





const Portfolio = () => {
  const classes = useStyles();
  const storedItems = JSON.parse(localStorage.getItem('favoritos')) || [];
  const [favs, setFavs] = useState(storedItems)
  const { projects } = useProyectos();

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
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Portfolio;
