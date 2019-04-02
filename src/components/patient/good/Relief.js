import React, { Component } from "react";

export default class Relief extends Component{
    componentDidMount(){
        document.title = "Remedics | Relief";
    }
    
    render(){
        return(
            <div>
                <h1>Hello there!</h1>
                <p>That's good to hear! But you must be here for a reason. Anything else you'd like to share?</p>
                <button>Vent</button>
                <button>Confide</button>
                <button>Concerns</button>
            </div>
        )
    }
}