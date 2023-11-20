import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/fotoMia1.jpg";
import star from "../estrella.png";
import rayas from "../rayas.png";
import personita from "../images/avatarIcon.png"

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    // width: theme.spacing(13),
    // height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  
}));

const menuItems = [
  { listIcon: <Home />, listText: "Inicio", listPath: "/" },
  {listIcon: (
    <div style={{ display: 'flex', alignItems: 'center' }} >
      <img src={star} style={{ width: '22px', marginRight: '-900px'}} alt="a" />
    </div>
  ),
  listText: "Favoritos",
  listPath: "/favs"
  },
  {listIcon: (
    <div style={{ display: 'flex', alignItems: 'center' }} >
      <img src={personita} style={{ width: '22px', marginRight: '-900px'}} alt="a" />
    </div>
  ),
  listText: "Sobre mí",
  listPath: "/info"
  },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contáctame", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    setOpen(true);
  };

  // Cuando cierras el menú lateral
  const handleClose = () => {
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    setOpen(false);
  };


  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Nadine Lewit" sx={{ width: 99, height: 99 }}/>
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => {
              handleClose();
            }}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => { handleOpen(); }}>
              <img src={rayas} style={{ width: 27, height: 27 }} />
              <Typography variant="h5" className={classes.title} style={{marginLeft: '18px'}}>
              Menu
            </Typography>
            </IconButton>
            
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClick={() => { handleClose(); }}>
        {sideList()}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
