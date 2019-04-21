import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PatientLogin from "./components/main/PatientLogin";
import Home from "./components/main/Home";
import Login from "./components/doctor/Login";
import Dashboard from "./components/doctor/Dashboard";
import Profile from "./components/doctor/Profile";
import Patients from "./components/doctor/Patients";
// import { PrivateRoute } from "./components/PrivateRoute";
import Form from "./components/main/Form";
import UploadCSV from "./components/doctor/UploadCSV";
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
            <Route exact={true} path="/patient_login" component={PatientLogin}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/form" component={Form}/>
            <Route exact={true} path="/upload_questions" component={UploadCSV}/>
        </div>
      </BrowserRouter>
    );
  }
}