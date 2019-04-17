import React, { Component } from "react";

export default class Family extends Component{
    constructor(props){
        super(props);
        this.state = {
            death: "death",
            finance: "finance"
        }
    }

    componentDidMount(){
        document.title = "Remedics | Family"
    }

    selectQuestion = () => {
        this.props.history.push("/death");
    }
    
    render(){
        return(
            <div>
                <p>Anything that we can elaborate?</p>
                <button onClick={() => this.selectQuestion(this.state.death)}>Dealing with Death</button>
            </div>
        )
    }
}