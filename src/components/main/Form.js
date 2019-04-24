import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            questions: []
        }
    }

    componentDidMount = () => {
        // axios.get("/")
        // .then(
        //     (results) => {
        //         this.setState(
        //             { questions: results }
        //         )
        //     }
        // )
        // .catch(err => console.log(err));
    }

    render = () => {
        return(
            <div>
                {this.state.questions.map(
                    question =>
                    <div id="question">
                        {question.question}
                        {question.options.map(
                            options =>
                            <button id="option" >{options}</button>
                        )}
                    </div>
                )}
            </div>
        )
    }
}