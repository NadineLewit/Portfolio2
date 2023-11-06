import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Favs from "./components/Favs";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Detalle from "./components/Detalle";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
  
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favs" component={Favs} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detalle/:id" component={Detalle} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
