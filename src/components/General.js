import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

class General extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            street: "",
            city: "",
            state: "",
            phoneNo: "",
            gender: "",
            dob: "",
            race: "",
            ethnicity: "",
            language: "",
            insuranceProvider: "",
        }
    }

    componentDidMount(){
        document.title = "General Information";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitGeneral = (e) => {
        const reqBody = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            phoneNo: this.state.phoneNo,
            gender: this.state.gender,
            dob: this.state.dob,
            race: this.state.race,
            ethnicity: this.state.ethnicity,
            language: this.state.language,
            insuranceProvider: this.state.insuranceProvider,
        }
        
        axios.post("http://localhost:4000/general ", reqBody).then(
            () => {
                this.props.history.push("/feeling");
            }
        )
        .catch(err => console.log(err));
        
    }

    render(){
        return(
            <div>
                <p>Please fill out your information. All are required</p>
                <form onSubmit={this.submitGeneral}>
                    <label>
                        First Name: <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Last Name: <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Street: <input type="text" value={this.state.street} name="street" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        City: <input type="text" value={this.state.city} name="city" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        State: <input type="text" value={this.state.state} name="state" maxLength="2" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Phone #: <input type="text" value={this.state.phoneNo} name="phoneNo" pattern="\d{3}[\-]\d{3}[\-]\d{4}" onChange={this.handleChange} maxLength="12" placeholder="XXX-XXX-XXXX" required/>
                    </label>
                    <label>
                        Gender: <select value={this.state.gender} name="gender" onChange={this.handleChange} required>
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-binary</option>
                        </select>
                    </label>
                    <label>
                        Date of Birth: <input type="text" value={this.state.dob} name="dob" pattern="\d{2}[\/]\d{2}[\/]\d{4}" onChange={this.handleChange} placeholder="MM/DD/YYYY" maxLength="10" required/>
                    </label>
                    <label>
                        Race: <select value={this.state.race} name="race" onChange={this.handleChange} required>
                            <option></option>
                            <option>Hispanic/Latino</option>
                            <option>American Indian/Alaska Native</option>
                            <option>Asian</option>
                            <option>Black/African American</option>
                            <option>Native Hawaiian/Other Pacific Islander</option>
                            <option>White/Caucasian</option>
                            <option>Biracial/Mixed</option>
                        </select>
                    </label>
                    <label>
                        Ethnicity: <input type="text" value={this.state.ethnicity} name="ethnicity" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Language: <input type="text" value={this.state.language} name="language" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Insurance: <input type="text" value={this.state.insuranceProvider} name="insuranceProvider" onChange={this.handleChange} required/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(General);