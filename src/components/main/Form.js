import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            questions: [
                ["Question Type", "Questions", "Selections", "If Selected", "IF Not selected", "DOCTORS NOTE"],
                ["Single Select ", "What is the reason for today’s consultation?", "Follow up|Physical|Acute Visit", "Follow up|Physical|Acute Visit", "", "Patient is Here today for a: "],
                ["multiselect", "Please select each of the General symptoms that applies to you:", "Fever|Chills|Sweat|Fatigue|Weight Loss|Weight Gain", "(+)Fever|(+)Chills|(+)Sweat|(+)Fatigue|(+)Weight Loss|(+)Weight Gain", "(-)Fever|(-)Chills|(-)Sweat|(-)Fatigue|(-)Weight Loss|(-)Weight Gain", "General Symptoms:"],
                ["multiselect", "Please select each of the symptoms affecting your Heart that apply to you:", "Intermittent Nightly Shortness of Breath|Shortness of Breath On Exertion|Shortness of Breath At Rest|Palpitations (Feel your Heart Beat) |Pedal Edema (Leg Swelling)|Chest Pain(intermittent)|Chest Pain(On Exertion)|Chest Pain(At Rest)", "(+)Intermittent Nightly Shortness of Breath|(+)Shortness of Breath On Exertion|(+)Shortness of Breath At Rest|(+)Palpitations (Feel your Heart Beat) |(+)Pedal Edema (Leg Swelling)|(+)Chest Pain(intermittent)|(+)Chest Pain(On Exertion)|(+)Chest Pain(At Rest)", "(-)Intermittent nocturnal Shortness of Breath|(-)Shortness of Breath On Exertion|(-)Shortness of Breath At Rest|(-)Palpitations (Feel your Heart Beat) |(-)Pedal Edema (Leg Swelling)|(-)Chest Pain(intermittent)|(-)Chest Pain(On Exertion)|(-)Chest Pain(At Rest)\n", "Cardiac:"],
                ["multiselect", "Please select each of the symptoms affecting your Lungs that applies to you:", "Abdominal pain| Coughing of blood | Shortness of breath |Congestion| Painful breathing ", "(+)Abdominal pain|(+)Coughing of blood |(+)Shortness of breath |(+)Congestion|(+)Painful breathing ", "(-)Abdominal pain|(-)Coughing of blood |(-)Shortness of breath |(-)Congestion|(-)Painful breathing ", "Pulmonary:"]
            ]
        }
    }

    componentDidMount = () => {
        document.title = "Remedics | Form"
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