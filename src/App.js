import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/main/Home";
import Dashboard from "./components/doctor/Dashboard";
import Profile from "./components/doctor/Profile";
import Form from "./components/main/Form";
import UploadCSV from "./components/doctor/UploadCSV";
import PatientAnswers from "./components/doctor/PatientAnswers";
import "./App.css";

export default class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <div className="App">
            <Route exact={true} path="/" component={ Home }/>
            <Route exact={true} path="/dashboard" component={ Dashboard }/>
            <Route exact={true} path="/profile" component={ Profile }/>
            <Route exact={true} path="/form" component={ Form }/>
            <Route exact={true} path="/patient_answers" component={ PatientAnswers }/>
            <Route exact={true} path="/upload_questions" component={ UploadCSV }/>
        </div>
      </BrowserRouter>
    );
  }
}