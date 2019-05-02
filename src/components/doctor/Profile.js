import React, { Component } from "react";
import Navbar from "./Navbar";

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