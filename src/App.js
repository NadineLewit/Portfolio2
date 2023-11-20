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
import Info from "./components/Info"
import "./App.css";
import {ContextProvider} from "./MyContext";

function App() {
  return (
    <React.Fragment>
          <ContextProvider>

      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favs" component={Favs} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detalle/:id" component={Detalle} />
      </Switch>
      <Footer/>
      </ContextProvider>

    </React.Fragment>

  );
}

export default App;
