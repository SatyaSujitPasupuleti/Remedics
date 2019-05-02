import React, { Component } from "react";
// import axios from "axios";
import Navbar from "./Navbar";

export default class PatientAnswers extends Component{
    constructor(){
        super();
        this.state = {
            name: "example",
            patients: []
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | To Dos";
        
        // get get patient list from DB
    }

    render = () => {
        return(
            <div>
                <Navbar name={this.state.name} />
                {this.state.patients.map(
                    patient => {
                        console.log(patient);
                    }
                )}
            </div>
        )
    }
}