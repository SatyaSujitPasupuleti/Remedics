import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Returning from "./components/main/Returning";
import Home from "./components/main/Home";
import General from "./components/main/General";
import Feeling from "./components/main/Feeling";
import Pain from "./components/patient/notSoGood/Pain";
import Relief from "./components/patient/good/Relief";
import Login from "./components/doctor/Login";
import Dashboard from "./components/doctor/Dashboard";
import Profile from "./components/doctor/Profile";
import Patients from "./components/doctor/Patients";
// import { PrivateRoute } from "./components/PrivateRoute";
import BodyArea from "./components/patient/notSoGood/BodyArea";
import Symptoms from "./components/patient/notSoGood/Symptoms";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/profile" component={Profile} />
            <Route exact={true} path="/patients" component={Patients} />
            <Route exact={true} path="/returning" component={Returning}/>
            <Route exact={true} path="/general" component={General}/>
            <Route exact={true} path="/feeling" component={Feeling}/>
            <Route exact={true} path="/pain" component={Pain}/>
            <Route exact={true} path="/relief" component={Relief}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/bodyarea" component={BodyArea}/>
            <Route exact={true} path="/symptoms" component={Symptoms}/>
        </div>
      </BrowserRouter>
    );
  }
}