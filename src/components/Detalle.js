import React, {useState, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../fotoMia.jpg";
import { useParams } from "react-router-dom";
import { useProyectos } from "../MyContext";
import "../clases.css"

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
  descContainer: {
     padding: theme.spacing(20),
    // paddingBlock: "2% 2%",
  },
  descripcion: {
    color: "#fff",
    textAlign: "center",
    fontSize: theme.typography.h6.fontSize,
  },
}));

const Detalle = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { projects } = useProyectos();
  const [proyecto, setProyecto] = useState([]);

  useEffect(() => {
    const elProyecto = projects.find((item) => item.id == id);
    setProyecto(elProyecto);
  }, [id, projects]);


  return (
    <>
      <center>
        <div className={classes.detalleContainer}>
          <Typography className={classes.title} variant="h4">
            {proyecto && proyecto.name && (
              <Typed strings={[proyecto.name]} typeSpeed={40} />
            )}      
          </Typography>
          <img className="imgDetalle" src={proyecto.image2}></img>
          <div className={classes.descContainer}>
          <Typography className={classes.descripcion} variant="h6">
          {proyecto && proyecto.description && (
            proyecto.description
            )}    
          </Typography>
          </div>
          {/* <Typography variant="h5" className={classes.heading}>
              Contactame...
          </Typography> */}
        </div>
      </center>
    </>
  );
};

export default Detalle;
