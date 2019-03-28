import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Dashboard extends Component{

    componentDidMount(){
        document.title = "Remedics | Dashboard";
    }

    render(){
        return(
            <div className="mainContent">
                <Navbar />
                <h1>Welcome to the Dashboard!</h1>
                <p>Check out your profile, look at the questions, or check what you need to do!</p>
            </div>
        )
    }
}