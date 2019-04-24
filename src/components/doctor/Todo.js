import React, { Component } from "react";
// import axios from "axios";
import Navbar from "./Navbar";

export default class Todo extends Component{
    constructor(){
        super();
        this.state = {
            toDoList: []
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | To Dos";
        
        // get to do list from DB
    }

    render = () => {
        return(
            <div>
                <Navbar />
            </div>
        )
    }
}