import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class PatientAnswers extends Component{
    constructor(){
        super();
        this.state = {
            name: "Patients",
            patients: {
                firstName: "",
                lastName: "",
                dob: "",
                email: "",
                questions: {},
                selections: {}
            },
            data: []
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Patients";

        axios.get("http://localhost:4000/getall")
        .then(
            (response) => this.setState({ patients: response.data })
        )
        .catch(err => console.log(err));
       
    }

    render = () => {
        console.log(this.state.patients);
        return(
            <div>
                <Navbar name={this.state.name} />
                <div id="info">
                    <p class="info-item">Name: {this.state.patients.firstName} {this.state.patients.lastName} </p>
                    <p class="info-item">Email: {this.state.patients.email}</p>
                    <p class="info-item">Date of Birth: {this.state.patients.dob}</p>
                </div>
                <div>
                    {
                        //this is a huge fucking mess and the only way i could get it to set the patient before rendering
                        this.state && this.state.patients && this.state.patients.selections && this.state.patients.questions &&
                        Object.keys(this.state.patients.selections).map(
                            (select) => <div key={select}>
                                <p> {this.state.patients.questions[select][3] } {this.state.patients.selections[select][0]}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}