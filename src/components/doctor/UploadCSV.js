import React, { Component } from "react";
import Navbar from "./Navbar";
import Papa from "papaparse";
import axios from "axios";

export default class UploadCSV extends Component{
    constructor(props){
        super(props);
        this.state = {
            csvFile: undefined
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Upload Questions";
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

        // axios.post("", questionsAnswers)
        // .then(
        //     () => {
        //         console.log("Finished adding!");
        //         this.sendEmail();
        //         this.props.history.push("/dashboard");
        //     }
        // )
        // .catch(err => console.log(err));
    }

    sendEmail = () => {
        console.log("Sent email");
        // send email to patient, call from db?
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

    render = () => {
        return(
            <div>
                <Navbar />
                <h1>Upload your new questions here!</h1>
                <form onSubmit={this.parseQuestions}>
                    <label>
                        <input type="file" id="csv" name="csv" accept=".csv" required/>
                    </label>
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        )
    }
}