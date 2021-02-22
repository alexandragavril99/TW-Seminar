import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import Photos from "./components/Photos";
import Photo from "./components/Photo";

class App extends Component {
  render() {
    return (
      //browserrouter - pentru a ne folosi de rute in front
      //route defineste o ruta
      //switch - pt a schimba rutele intre ele
      //exact - pt a afisat strict acea componenta si strict - limiteaza ruta(daca pui spatiu e gresit sau chestii)
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact strict component={Home}></Route>
            <Route path="/about" exact strict component={About}></Route>
            <Route path="/photos" exact strict component={Photos}></Route>
            <Route path="/photos/:id" exact strict component={Photo}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
