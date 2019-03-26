import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            //
        }
    }

    componentDidMount(){
        document.title = "Dashboard";
        // call db to get doctor's name, i guess
        // axios.get("").then()
    }

    render(){
        return(
            <div className="mainContent">
                <Navbar />
                <p>Welcome to the Dashboard!</p>
            </div>
        )
    }
}