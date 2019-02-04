import React, { Component } from "react";

class InitialDiagnosis extends Component{
    constructor(props){
        super(props);
        this.state = {
            general: props,
        }
    }

    componentDidMount(){
        document.title = "Initial Diagnosis";
    }

    render(){
        return(
            <div>
                <h1>Intial Diagnosis</h1>
                <p>Hi, what did you want to talk to a doctor for?</p>
            </div>
        )
    }
}

export default InitialDiagnosis;