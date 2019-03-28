import React, { Component } from "react";

export default class Noticeable extends Component{
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
    render(){
        return(
            <div>
                <p>Is there anything else you might be able to share?</p>
            </div>
        )
    }
}