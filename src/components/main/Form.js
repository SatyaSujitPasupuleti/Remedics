import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            questions: {
                1: [ "Single Select ", "What is the reason for today’s consultation?", "Follow up|Physical|Acute Visit", "Patient is Here today for a: "],
                2: ["multiselect", "Please select each of the General symptoms that applies to you:", "Fever|Chills|Sweat|Fatigue|Weight Loss|Weight Gain", "General Symptoms:"],
                3: ["multiselect", "Please select each of the symptoms affecting your Head Ears Eyes Nose and Throat that applies to you:", "Head Ache|Visual Changes|Dizziness|Ear Ache|Sore Throat", "General Symptoms:"],
                4: ["multiselect", "Please select each of the symptoms affecting your Heart that apply to you:", "Intermittent Nightly Shortness of Breath|Shortness of Breath On Exertion|Shortness of Breath At Rest|Palpitations (Feel your Heart Beat) |Pedal Edema (Leg Swelling)|Chest Pain(intermittent)|Chest Pain(On Exertion)|Chest Pain(At Rest)", "Cardiac:"],
                5: ["multiselect", "Please select each of the symptoms affecting your Lungs that applies to you:", "Abdominal pain| Coughing of blood | Shortness of breath |Congestion| Painful breathing ", "Pulmonary:"]
            },
            selections: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: []
            }
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Questionnaire";

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

    submitForm = (e) => {
        e.preventDefault();
        // axios.post()
        // .then(
        //     () => this..history.push("/")
        // )
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

    render = () => {
        return(
            <div>
                <form id="mainForm" onSubmit={this.submitForm}>
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