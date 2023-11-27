import React, {useState, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useProyectos } from "../MyContext";
import "../clases.css"
import Button from "@material-ui/core/Button";
import Githubb from "../images/aa.png"
import Proceso from "../images/enProceso.png"

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
    marginBottom: "4%",
    marginTop: "-18%"
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
     width: "80%",
  },
  descripcion: {
    color: "tan",
    textAlign: "center",
    fontSize: theme.typography.h6.fontSize,
    marginTop: "-15%",
    marginBottom: "15%"
  },
  imgDetalle: {
    textAlign: "center",
    alignContent: "center",
    width: "40%",
    marginTop: "3%"
  },
  imgEjHori1: {
    marginBottom: "4%",
    textAlign: "center",
    alignContent: "center",
    width: "40%",

  },
  imgEjHori2: {
    marginBottom: "4%",
    textAlign: "center",
    alignContent: "center",
    width: "40%",
    marginLeft: "1%"
  },
  imgEjVert1: {
    marginBottom: "4%",
    textAlign: "center",
    alignContent: "center",
    width: "20%",
  },
  imgEjVert2: {
    marginBottom: "4%",
    textAlign: "center",
    alignContent: "center",
    width: "20%",
    marginLeft: "1%"
  },
  imgEjProceso: {
    marginBottom: "4%",
    textAlign: "center",
    alignContent: "center",
    width: "40%",
  },
  button: {
    color: "tan",
    borderColor: "tan",
    marginTop: "-80.5%"
  },
  icon: {
    color: "tomato",
    borderColor: "tan",
    marginTop: "-50%"
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

  const handleButtonClick = () => {
    if (proyecto && proyecto.url) {
      window.open(proyecto.url, "_blank");
    }
  };

  return (
    <>
      <center>
        <div className={classes.detalleContainer}>
          <Typography className={classes.title} variant="h4">
            {proyecto && proyecto.name && (
              <>
              <br></br>
              <Typed strings={[proyecto.name]} typeSpeed={40} />
              </>
            )}      
          </Typography>
          <img className={classes.imgDetalle} src={proyecto.image2}></img>
          <div className={classes.descContainer}>
          <Typography className={classes.descripcion} variant="h6">
          {proyecto && proyecto.desc && (
            proyecto.desc
            )}    
          </Typography>
          </div>
          <Typography variant="h5" className={classes.heading}>
              Fotos del proyecto
          </Typography>
          {proyecto.id === 1 ? (
              <>
                <img className={classes.imgEjVert1} src={proyecto.image3}/>
                <img className={classes.imgEjVert2} src={proyecto.image4}/>
              </>
            ) : (
              proyecto.id === 4 ? (
                <img className={classes.imgEjProceso} src={Proceso}/>
              ) : (
                <>
                  <img className={classes.imgEjHori1} src={proyecto.image3}/>
                  <img className={classes.imgEjHori2} src={proyecto.image4}/>
                </>
              )
            )} 
            
          
          <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form">
        <img src={Githubb} style={{ width: '3%', marginBottom: '37%', marginRight: '-11%'}}/>

          <form>
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            className={classes.button}
            value="Send"
            onClick={handleButtonClick}
          >
            GitHub
          </Button>
          </form>
        </Box>
      </Grid>
    </Box>
        </div>
      </center>
    </>
  );
};

export default Detalle;
