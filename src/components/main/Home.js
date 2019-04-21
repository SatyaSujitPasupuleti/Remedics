import React, { Component } from "react";

export default class Home extends Component{

    doctor = () => {
        this.props.history.push("/login");
    }

    patient = () => {
        this.props.history.push("/patient_login");
    }
    
    render(){
        return(
            <div>
                <button className="homeButton" onClick={this.doctor}><img title="Doctor" src={require("../img/doc.png")}></img></button> <button className="homeButton" onClick={this.patient}><img title="Patient" src={require("../img/patient.png")}></img></button>
            </div>
        )
    }
}