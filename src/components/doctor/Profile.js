import React, { Component } from "react";
import axios from "axios";

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            practice: "",
            email: "",
        }
    }

    componentDidMount(){
        document.title = "Profile";
        
        // axios.get("more doc info")
        // .then(
        //     (response) => this.setState({
        //         name: response.name,
        //         practice: response.practice,
        //         email: response.email
        //     })
        // )
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.practice}</p>
                <p>{this.state.email}</p>
                <a href="/dashboard">Back to dashboard.</a>
            </div>
        )
    }
}