import React, { Component } from "react";
import BodyArea from "./BodyArea";

export default class Severe extends Component{

    componentDidMount(){
        document.title = "Remedics | Severe Pain";
    }
    
    render(){
        return(
            <div>
                <p>Oh boy, let's get that checked out right away.</p>
                <p>Can you tell us where it hurts?</p>
                <BodyArea />
            </div>
        )
    }
}