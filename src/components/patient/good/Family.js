import React, { Component } from "react";

export default class Family extends Component{
    constructor(props){
        super(props);
        this.state = {
            connect: "connect",
            personal: "personal",
            testing: "testing",
            treatments: "treatments",
            healthcare: "healthcare"
        }
    }

    componentDidMount(){
        document.title = "Remedics | Family";
    }
    
    render(){
        return(
            <div>
                <button value={this.state.connect} onClick={() => this.selectQuestion(this.state.connect)}>Connections</button>
            </div>
        )
    }
}