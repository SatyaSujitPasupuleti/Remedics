import React, { Component } from "react";

class Home extends Component{

    componentDidMount(){
        document.title = "Home";
    }

    returning = () => {
        this.props.history.push("/initialDiagnosis")
    }

    newPatient = () => {
        this.props.history.push("/general");
    }
    
    render(){
        return(
            <div>
                <h1>Hello there!</h1>
                <p>Remedics would like you to fill out this form. It will help us with properly diagnosing the issues that you may have.</p>
                <p>Before we start, are you a returning patient?</p>
                <button onClick={this.returning}>Yes</button> <button onClick={this.newPatient}>No</button>
            </div>
        )
    }
}

export default Home;