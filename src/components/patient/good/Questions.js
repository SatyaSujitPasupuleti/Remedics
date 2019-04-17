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
                {/* only family works for now */}
                <button onClick={() => this.selectQuestion(this.state.family)}>Family/Friends</button>
                <button onClick={() => this.selectQuestion(this.state.personal)}>Personal Wellbeing</button>
                <button onClick={() => this.selectQuestion(this.state.testing)}>Testing</button>
                <button onClick={() => this.selectQuestion(this.state.treatments)}>Treatments</button>
                <button onClick={() => this.selectQuestion(this.state.healthcare)}>Healthcare</button>
            </div>
        )
    }
}