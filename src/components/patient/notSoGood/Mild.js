import React, { Component } from "react";

export default class Mild extends Component{
    componentDidMount(){
        document.title = "Remedics | Mild";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    mild = () => {
        //stuff
    }

    render(){
        return(
            <div>
                <p>Hm, alright, but you must be here for a reason.</p>
                <p>Can you see which of the following would apply to you?</p>
            </div>
        )
    }
}