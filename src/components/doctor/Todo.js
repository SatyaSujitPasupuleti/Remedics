import React, { Component } from "react";
import axios from "axios";

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            toDoList: []
        }
    }

    componentDidMount(){
        document.title = "Remedics | To Dos";
        
        // get to do list from DB
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}