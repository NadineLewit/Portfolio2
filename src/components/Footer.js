import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    overflow: "hidden",
    position: "fixed",
    bottom: 0, 
    width: "100%",
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
});

const Footer = () => {
  const classes = useStyles();

  const handleButtonClickFB = () => {
    window.open("https://www.facebook.com/profile.php?id=100011436930733&locale=es_LA", "_blank");
};
const handleButtonClickIG = () => {
  window.open("https://www.instagram.com/nadulewit/", "_blank");
};
const handleButtonClickTwitter = () => {
  window.open("https://twitter.com/nadulewit", "_blank");
};

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} onClick={handleButtonClickFB}/>
      <BottomNavigationAction icon={<Twitter />} className={classes.root} onClick={handleButtonClickTwitter}/>
      <BottomNavigationAction icon={<Instagram />} className={classes.root} onClick={handleButtonClickIG}/>
    </BottomNavigation>
  );
};
export default Footer;
