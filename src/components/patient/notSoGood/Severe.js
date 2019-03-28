import React, { Component } from "react";

export default class Severe extends Component{

    componentDidMount(){
        document.title = "Remedics | Severe";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    severe = () => {
        //stuff
    }

    render(){
        return(
            <div>
                <p>Oh boy, let's get that checked out right away.</p>
                <p>Can you tell us where it hurts?</p>
            </div>
        )
    }
}