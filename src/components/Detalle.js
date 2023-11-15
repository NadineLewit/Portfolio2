import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../fotoMia.jpg";
import { useParams } from "react-router-dom";
import { useProyectos } from "../MyContext";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
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
    alignContent: "center",
    zIndex: 1,
  },
  detalleContainer: {
    background: "#233",
    width: "70%",
    heigth: "100%",
  },
}));

const Detalle = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { projects } = useProyectos();
  const [proyecto, setProyecto] = useState([]);

  console.log(projects)
  // setProyecto(pro.filter((p) => p.id === id))
  


  return (

    // <Box>
    <center>
      {projects.map((item) => {
    // if(item.id === id){
    //   setProyecto(item)  
      console.log(item)

    }
  )}
      <div className={classes.detalleContainer}>
      <Typography className={classes.title} variant="h4">
        {/* <Typed strings={id.name} typeSpeed={40} /> */}
      </Typography>

      <Typography variant="h5" className={classes.heading}>
            Contactame...
          </Typography>
      </div>

      </center>

    // </Box>

  );
};

export default Detalle;
