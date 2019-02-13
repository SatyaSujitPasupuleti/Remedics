import React, { Component } from "react";

class Home extends Component{

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
                <button onClick={this.doctor}><img title="Doctor" src={require("./img/doc.png")}></img></button> <button onClick={this.patient}><img title="Patient" src={require("./img/patient.png")}></img></button>
            </div>
        )
    }
}

export default Home;