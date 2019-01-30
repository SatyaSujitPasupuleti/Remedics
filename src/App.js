import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import General from "./components/General";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/general" component={General}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
