import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Dashboard extends Component{

    componentDidMount = () => {
        document.title = "Remedics | Dashboard";
    }

    render = () => {
        return(
            <div className="mainContent">
                <Navbar name="Example"/>
                <h1>Welcome to Remedics!</h1>
                <p>Check out your profile, look at the questions, or check what you need to do!</p>
            </div>
        )
    }
}