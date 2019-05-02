import React, { Component } from "react";
import Navbar from "./Navbar";
import Papa from "papaparse";
import axios from "axios";

export default class UploadCSV extends Component{

    constructor(){
        super();
        this.state = {
            email: ""
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Upload Questions";
    }

    submitForm = (email, questionsAnswers) => {
        let body = {
            email: email,
            questionsAnswers: questionsAnswers
        }
        axios.post("http://localhost:4000/questions", body)
        .then(
            () => {
                console.log("Finished adding!");
                this.props.history.push("/dashboard");
            }
        )
        .catch(err => console.log(err));
    }

    formatJSON = (data) => {
        let questionsAnswers = {}

        // need to ignore the first array, has the titles
        // pull question type from data[i][0]
        // pull questions from data[i][1]
        // pull answers from data[i][2]
        // pull the doctor's note from data[i][5]

        let questionCounter = 1

        for (let i = 1; i < data.length - 1; i++){
            questionsAnswers[questionCounter] = [];
            questionsAnswers[questionCounter].push(data[i][0]);
            questionsAnswers[questionCounter].push(data[i][1]);
            questionsAnswers[questionCounter].push(data[i][2]);
            questionsAnswers[questionCounter].push(data[i][5]);
            questionCounter++;
        }

        this.submitForm(this.state.email, questionsAnswers);
    }

    parseQuestions = (e) => {
        e.preventDefault();

        let file = document.getElementById("csv");
        // file.files[0] grabs the file that was uploaded
        Papa.parse(file.files[0],
            {
                header: false,
                complete: (results) => {
                    this.formatJSON(results.data);
                }
            }
        );
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render = () => {
        return(
            <div>
                <Navbar name="Example" />
                <h1>Upload your new questions here!</h1>
                <form onSubmit={this.parseQuestions}>
                    <label>
                        <input type="text" name="email" onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="file" id="csv" name="csv" accept=".csv" required/>
                    </label>
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        )
    }
}