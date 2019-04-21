import React, { Component } from "react";

export default class PatientLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            dob: "",
            email: ""
        }
    }

    componentDidMount(){
        document.title = "Remedics | Patient Login";
    }

    submitForm = () => {
        this.props.history.push("/general");
    }
    
    render(){
        return(
            <div>
                <h1>Hello there!</h1>
                <p>Remedics would like you to answer a few questions about yourself. It will help us with properly diagnosing the issues that you may have.</p>
                <p>Please enter some information to see if you are already with us!</p>
                <form onSubmit={this.submitForm}>
                    <label>
                        First Name: <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Last Name: <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Date of Birth: <input type="text" value={this.state.dob} name="dob" pattern="\d{4}[-]\d{2}[-]\d{2}" onChange={this.handleChange} placeholder="YYYY-MM-DD" maxLength="10" required/>
                    </label>
                    <label>
                        Email: <input type="text" value={this.state.email} name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange} required/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}