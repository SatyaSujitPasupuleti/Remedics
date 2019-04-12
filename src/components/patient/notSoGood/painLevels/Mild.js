import React, { Component } from "react";
import BodyArea from "../BodyArea";

export default class Mild extends Component{
    constructor(props){
        super(props);
        this.state = {
            painLevel: "",
        }
    }

    render(){
        return(
            <div>
                <p>Sorry to hear that. Can you show us where it feels this way?</p>
                <BodyArea />
            </div>
        )
    }
}