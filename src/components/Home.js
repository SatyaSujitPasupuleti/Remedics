import React, { Component } from "react";

class Returning extends Component{

    componentDidMount(){
        document.title = "Home";
    }

    doctor = () => {
        this.props.history.push("/")
    }

    patient = () => {
        this.props.history.push("/returning");
    }
    
    render(){
        return(
            <div>
                <p>Hello, it is a pleasure to meet you. Before we start, which one are you?</p>
                <button onClick={this.doctor}>Doctor</button> <button onClick={this.patient}>Patient</button>
            </div>
        )
    }
}

export default Returning;