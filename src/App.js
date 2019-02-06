import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Returning from "./components/Returning";
import Home from "./components/Home";
import General from "./components/General";
import InitialDiagnosis from "./components/InitialDiagnosis";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/returning" component={Returning}/>
          <Route exact={true} path="/general" component={General}/>
          <Route exact={true} path="/initial" component={InitialDiagnosis}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;