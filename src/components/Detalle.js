import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../fotoMia.jpg";
import { useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
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
  detalleContainer: {
    background: "#233",
    width: "100%",
    heigth: "100%",
  },
}));

const Detalle = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <Box className={classes.typedContainer}>
        <div className={classes.detalleContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Nadine Lewit"/>
      </Grid>
      <Typography className={classes.title} variant="h4">
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
      </div>
    </Box>
  );
};

export default Detalle;
