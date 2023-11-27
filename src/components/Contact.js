import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";


const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

    const emailjs = require('emailjs-com');

    emailjs.init("6PfT7_ZLzhUzn1djW");

    const handleSubmit = (event) => {
      event.preventDefault();

      const contactNumber = Math.random() * 100000 | 0;
      const form = event.target;

      emailjs.sendForm('service_bj4tfom', 'template_6zog7pm', form)
        .then((response) => {
          console.log('SUCCESS!', response);
        }, (error) => {
          console.log('FAILED...', error);
        });
    };

    const handleInputChange = (event) => {
      // aa
    };


  return (
    <>
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Contactame...
          </Typography>
          <form onSubmit={handleSubmit}>

          <InputField
            fullWidth={true}
            label="Nombre"
            variant="outlined"
            inputProps={{ className: classes.input }}
            name="user_name"
            onChange={handleInputChange}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            onChange={handleInputChange}
            name="user_email"
          />
          <InputField
            fullWidth={true}
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            onChange={handleInputChange}
            name="message"
          />
          <Button
            type="submit"
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            value="Send"
          >
            Contactame
          </Button>
          </form>

        </Box>
      </Grid>
    </Box>
    </>
  );
};
export default Contact;
