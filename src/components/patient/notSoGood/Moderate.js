import React, { Component } from "react";
import BodyArea from "./BodyArea";

export default class Moderate extends Component{

    componentDidMount(){
        document.title = "Remedics | Moderate Pain";
    }

    render(){
        return(
            <div>
                <p>Can you pinpoint where it occurs?</p>
                <BodyArea />
            </div>
        )
    }
}