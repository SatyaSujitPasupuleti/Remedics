import React, { Component } from "react";
import Navbar from "./Navbar";
import Papa from "papaparse"

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            toDoList: []
        }
    }

    componentDidMount(){
        document.title = "Remedics | Upload Questions";
    }

    parseQuestions = (e) => {
        e.preventDefault();

        let file = document.getElementById("csv");
        let parsed = Papa.parse(file.files[0],
            {
                header: true,
                complete: (results) => {
                    console.log(parsed);
                }
            }
        );
    }

    render(){
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