import React, { Component } from "react";
import axios from "axios";
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
        
        axios.get("http://localhost:4000/")
        .then(
            (response) => this.setState({ patients: response })
        )
        .catch(err => console.log(err));
    }

    render = () => {
        return(
            <div>
                <Navbar name={this.state.name} />
                {this.state.patients.map(
                    patient =>
                        <div>
                            {console.log(patient)}
                            This is the patient:
                        </div>
                    )
                }
            </div>
        )
    }
}