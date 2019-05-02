import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            firstName: "",
            lastName: "",
            dob: "",
            email: "",
            questions: {},
            selections: {}
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Questionnaire";

        axios.get("/")
        .then(
            (results) => {
                this.setState(
                    { questions: results }
                )
            }
        )
        .catch(err => console.log(err));
    }

    submitForm = (e) => {
        e.preventDefault();
        axios.put("http://localhost:4000/answers")
        .then(
            () => {
                this.props.history.push("/");
                document.body = "Thank you for participating! You will know your results shortly.";
            } 
        )
        
    }

    isMultiple = (multiple) => {
        return true ? multiple === "multiselect" : false 
    }

    handleChange = (e, questionNo) => {
        let options = e.target.options;
        let selections = [];
        let updateAnswer = {...this.state.selections};
        
        for (let i = 0; i < options.length; i++){
            if (options[i].selected){
                selections.push(options[i].value);
            }
        }
        
        updateAnswer[questionNo] = selections;
        this.setState({ selections: updateAnswer });
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render = () => {
        return(
            <div>
                <h1>Hello there!</h1>
                <p>Remedics would like you to answer a few questions about yourself. It will help us with properly diagnosing the issues that you may have.</p>
                <p>Please enter some information below. We need to see if you are already with us. You may answer the questions after you are done.</p>
                <form id="mainForm" onSubmit={this.submitForm}>
                    <label>
                        First Name: <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleInput} required/>
                    </label>
                    <label>
                        Last Name: <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleInput} required/>
                    </label>
                    <label>
                        Date of Birth: <input type="text" value={this.state.dob} name="dob" pattern="\d{4}[-]\d{2}[-]\d{2}" onChange={this.handleInput} placeholder="YYYY-MM-DD" maxLength="10" required/>
                    </label>
                    <label>
                        Email: <input type="text" value={this.state.email} name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleInput} required/>
                    </label>
                    {Object.keys(this.state.questions).map(
                        (questionNo) =>
                            <label key={questionNo}>
                                {/* have the question */}
                                <p>{this.state.questions[questionNo][1]}</p>
                                {/* all of the answers as dropdown */}
                                <select multiple={this.isMultiple(this.state.questions[questionNo][0])} onChange={e => this.handleChange(e, questionNo)}>
                                    <option></option>
                                    {this.state.questions[questionNo][2].split("|").map(
                                        options => 
                                        <option type="button" id="option" value={options}>{options}</option>
                                    )}
                                </select>
                            </label>
                        )
                    }
                    <input type="submit" value="Diagnose"/>
                </form>
            </div>
        )
    }
}