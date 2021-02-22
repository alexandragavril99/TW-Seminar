import "./App.css";
import React, { Component } from "react";
import "./users/Users";
import Users from "./users/Users";

class App extends Component {
  render() {
    //render e ce se va afisa efectiv pe ecran
    return (
      <div className="App">
        {true ? <Users></Users> : <div>Other component</div>}
      </div>
    );
  }
}

export default App;
