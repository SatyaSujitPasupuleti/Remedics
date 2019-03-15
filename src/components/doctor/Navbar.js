import React, { Component } from "react";
import axios from "axios";

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }

    // componentDidMount(){
    //     axios.get("doc info")
    //     .then(
    //         (response) => this.setState({name: response.name})
    //     )
    // }

    render(){
        return(
            <div>
                <nav id="side-nav">
                    <p>Welcome to the Dashboard!</p>
                    <a href="/questions">Questionnaire</a>
                </nav>
                <nav id="top-nav">
                    <div className="dropdown">
                        <button class="dropbtn">{this.state.name}</button>
                        <div class="dropdown-content">
                            <a href="/profile">Profile</a>
                            <a href="/patients">Patients</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}