import React, { Component } from "react";

export default class Symptoms extends Component{

    selectSymptom = (e) => {
        let symptom = e.target.innerHTML;

        // also add to db, then redirect to another page
    }

    render(){
        return(
            <div>
                <p>So what kinds of things are you experiencing? List all that apply.</p>
                <button onClick={(e) => this.selectSymptom(e)}>Ache/Sore</button>
                <button onClick={(e) => this.selectSymptom(e)}>Rash</button>
                <button onClick={(e) => this.selectSymptom(e)}>Inflammation</button>
                <button onClick={(e) => this.selectSymptom(e)}>Bleeding</button>
                <button onClick={(e) => this.selectSymptom(e)}>Cough</button>
                <button onClick={(e) => this.selectSymptom(e)}>Running nose</button>
                <button onClick={(e) => this.selectSymptom(e)}>Lumps</button>
                <button onClick={(e) => this.selectSymptom(e)}>Dizzyness</button>
            </div>
        )
    }
}