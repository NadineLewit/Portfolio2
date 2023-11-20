import React, {useState, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useProyectos } from "../MyContext";
import "../clases.css"
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Githubb from "../images/aa.png"
import avatar from "../images/fotoMia2.jpg";
import ortImg from "../images/ort.png";
import lenguajes from "../images/leng.png";


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: theme.spacing(1),
    marginBottom: "-1%",
    marginTop: "8%"
  },
  title: {
    color: "tomato",
    marginBottom: "-3%"
  },
  heading1: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "4%",
    marginTop: "6%"
  },
  heading2: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: "6%",
    marginBottom: "-2%"
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
    //  padding: theme.spacing(20),
     width: "40%",
     marginLeft: "-25%",
     marginTop: "10%",
  },
  descripcion: {
    color: "tan",
    textAlign: "center",
    fontSize: theme.typography.h6.fontSize,
  },
  imgDetalle: {
    textAlign: "center",
    alignContent: "center",
    width: "40%",
    marginTop: "3%"
  },
  imgOrt: {
    width: '60%',
    marginRight: '-160%',
    marginTop: "-100%",
    marginBottom: "1%"
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
  contactContainer: {
    width: "70%",
    marginTop: "10%",
    marginBottom: "5%"

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

  const handleButtonClickGithub = () => {
      window.open("https://github.com/NadineLewit", "_blank");
  };
  const handleButtonClickIG = () => {
    window.open("https://www.instagram.com/nadulewit/", "_blank");
};
const handleButtonClickTwitter = () => {
    window.open("https://twitter.com/nadulewit", "_blank");
};
const handleButtonClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/nadine-lewit-ab1333293/", "_blank");
};

  return (
    <>
      <center>
        <div className={classes.detalleContainer}>
            <br></br>
        <Avatar className={classes.avatar} src={avatar} alt="Nadine Lewit"/>

          <Typography className={classes.title} variant="h4">
              <br></br>
              <Typed strings={["Nadine Lewit"]} typeSpeed={50} />
            
          </Typography>
          <div className={classes.descContainer}>
          <Typography className={classes.descripcion} variant="h6">
            Hola! Soy Nadine, estudiante de la escuela secundaria ORT, en Buenos Aires, Argentina. Me encuentro en la especialización de informática hace ya tres años, en los cuales me informé sobre distintos lenguajes y aprendí a utilizarlos.

          </Typography>
          <img src={ortImg} className={classes.imgOrt}/>

          </div>
          <br></br>
          <br></br>
          <Typography variant="h5" className={classes.heading1}>
              Lenguajes de programacion
          </Typography>
          <br></br>
          <img src={lenguajes} style={{ width: '50%',}}/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="h5" className={classes.heading2}>
              Redes sociales
          </Typography>
          <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form">
          <form>
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            className={classes.button}
            value="Send"
            onClick={handleButtonClickGithub}
          >
            GitHub
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            className={classes.button}
            value="Send"
            onClick={handleButtonClickIG}
          >
            Instagram
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            className={classes.button}
            value="Send"
            onClick={handleButtonClickTwitter}
          >
            Twitter
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            className={classes.button}
            value="Send"
            onClick={handleButtonClickLinkedin}
          >
            Linkedin
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
