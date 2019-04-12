import React, { Component } from "react";

export default class Questions extends Component{
    constructor(props){
        super(props);
        this.state = {
            family: "family",
            personal: "personal",
            testing: "testing",
            treatments: "treatments",
            healthcare: "healthcare"
        }
    }
    
    componentDidMount(){
        document.title = "Remedics | Questions";
    }

    selectQuestion = (question) => {
        this.props.history.push(`$/{question}"`);
    }
    
    render(){
        return(
            <div>
                <button value={this.state.family} onClick={() => this.selectQuestion(this.state.family)}>Family/Friends</button>
                <button value={this.state.personal} onClick={() => this.selectQuestion(this.state.personal)}>Personal Wellbeing</button>
                <button value={this.state.testing} onClick={() => this.selectQuestion(this.state.testing)}>Testing</button>
                <button value={this.state.treatments} onClick={() => this.selectQuestion(this.state.treatments)}>Treatments</button>
                <button value={this.state.healthcare} onClick={() => this.selectQuestion(this.state.healthcare)}>Healthcare</button>
            </div>
        )
    }
}