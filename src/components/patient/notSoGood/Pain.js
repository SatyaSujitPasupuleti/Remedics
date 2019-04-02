import React, { Component } from "react";

export default class Pain extends Component{
    constructor(props){
        super(props);
        this.state = {
            painLevel: "",
        }
    }

    componentDidMount(){
        document.title = "Remedics | Pain level";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    level = (e) => {
        e.preventDefault();
        localStorage.setItem("level", this.state.painLevel);
        this.props.history.push("/bodyarea");
    }

    render(){
        return(
            <div>
                <p>Sorry to hear that. Can you specify how bad it is?</p>
                <form id="diagnosis" onSubmit={this.level}>
                    <label>
                        Pain: <input type="range" id="pain" onChange={this.handleChange} name="painLevel" min="0" max="10"></input>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}