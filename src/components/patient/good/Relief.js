import React, { Component } from "react";
import Questions from "./Questions";

export default class Relief extends Component{
    componentDidMount(){
        document.title = "Remedics | Relief";
    }
    
    render(){
        return(
            <div>
                <h1>Hello there!</h1>
                <p>That's good to hear! But you must be here for a reason. You probably have some questions.</p>
                <Questions />
            </div>
        )
    }
}