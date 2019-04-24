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
                    let allData = results.data;
                    console.log(allData);
                    // localStorage.setItem("questions", JSON.stringify(allData));
                    // axios.post("http://localhost:4000", allData)
                    // .then(
                    //     () => {
                    //         console.log("Finished!");
                    //         this.sendEmail();
                    //         this.props.history.push("/dashboard");
                    //     }
                    // )
                    // .catch(err => console.log(err));
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