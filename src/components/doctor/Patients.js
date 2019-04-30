import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class Patients extends Component{
    constructor(){
        super();
        this.state = {
            name: "Example",
            patientsList: []
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Patients";

        // axios.post("get patients list")
        // .then(
        //     (res) => this.setState({
        //         patientsList: res
        //     })
        // )
        // .catch(err => {
        //     throw err;
        // });
    }

    listPatients = () => {
        if (this.state.patientsList.length < 1){
            return <div>You currently have no patients.</div>
        }
        return(
            <div className="table">
                {this.state.patientsList.map(
                    item => <div className="row" key={item.id}>
                        {item.name}
                        {item.dob}
                    </div>
                )}
            </div>
        )
    }

    render = () => {
        return(
            <div className="mainContent">
                <Navbar name={this.state.name}/>
                <h1>Your patients:</h1>
                {this.listPatients()}
            </div>
        )
    }
}