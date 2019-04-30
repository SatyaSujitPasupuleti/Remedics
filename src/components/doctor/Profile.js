import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default class Profile extends Component{
    constructor(){
        super();
        this.state = {
            name: "Example",
            practice: "Example",
            email: "Example",
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Profile";

        // axios.get("more doc info")
        // .then(
        //     (response) => this.setState({
        //         name: response.name,
        //         practice: response.practice,
        //         email: response.email
        //     })
        // )
        // .catch(err => console.log(err));
    }

    render = () => {
        return(
            <div className="mainContent">
                <Navbar name={this.state.name} />
                <h1>{this.state.name}</h1>
                <p>{this.state.practice}</p>
                <p>{this.state.email}</p>
            </div>
        )
    }
}