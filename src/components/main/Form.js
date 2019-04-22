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
        axios.get("/")
    }

    render = () => {
        return(
            <div></div>
        )
    }
}