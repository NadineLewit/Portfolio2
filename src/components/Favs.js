import React, { useEffect, useState, View } from "react";
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
import Typed from "react-typed";
import Avatar from "@material-ui/core/Avatar";
import { useProyectos } from "../MyContext";
import tacho from "../images/trash.png"

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
  title: {
    color: "tomato",
  },
  titleCustom: {
    marginLeft: "7%",
    marginTop: "10%"
  }
}));

const Favs = () => {
  const classes = useStyles();
  const storedItems = JSON.parse(localStorage.getItem("favoritos")) || [];
  const [favs, setFavs] = useState(storedItems)

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favs));
  }, [favs]);


  return (
    <Box component="div" className={classes.mainContainer}>
      <br></br>
      <br></br>
      <br></br>
      <Typography className={classes.title} variant="h4">
        <Typed className={classes.titleCustom} strings={["Tus proyectos favoritos:"]} typeSpeed={40} />
      </Typography>
      <Grid container justify="center">
        {favs.map((project, i) => (
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
                <Button size="small" color="primary" onClick={() => setFavs(favs.filter((item, index) => index !== i))}>
                  <img src={tacho} style={{ width: '10%', marginRight: "-80%"}} className={classes.root}/>
                </Button>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favs;
