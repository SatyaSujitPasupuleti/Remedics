import React, { Component } from "react";
import axios from "axios";

export default class BodyArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            painLevel: localStorage.getItem("level"),
            areaChosen: ""
        }
    }

    thresholdLevel = () => {
        if (parseInt(this.state.painLevel) < 4){
            return(
                <div>
                    <p>Sorry to hear that. Can you show us where it feels this way?</p>
                </div>
            )
        }
        else if (parseInt(this.state.painLevel) >= 4 && parseInt(this.state.painLevel) < 7){
            return(
                <div>
                    <p>Is there anything else you might be able to share?</p>
                </div>
            )
        }
        else{
            return(
                <div>
                    <p>Oh boy, let's get that checked out right away.</p>
                    <p>Can you tell us where it hurts?</p>
                </div>
            )
        }
    }

    selectArea = (e) => {
        let area = e.target.innerHTML;
        // add to db body part that hurts?
        // redirect to another page that lists symptoms
    }

    render(){
        return(
            <div id="bodyArea">
                {this.thresholdLevel}
                <button onClick={(e) => this.selectArea(e)}>Head</button>
                <button onClick={(e) => this.selectArea(e)}>Neck</button>
                <button onClick={(e) => this.selectArea(e)}>Left arm</button>
                <button onClick={(e) => this.selectArea(e)}>Right arm</button>
                <button onClick={(e) => this.selectArea(e)}>Left hand</button>
                <button onClick={(e) => this.selectArea(e)}>Right hand</button>
                <button onClick={(e) => this.selectArea(e)}>Chest</button>
                <button onClick={(e) => this.selectArea(e)}>Back</button>
                <button onClick={(e) => this.selectArea(e)}>Stomach</button>
                <button onClick={(e) => this.selectArea(e)}>Left leg</button>
                <button onClick={(e) => this.selectArea(e)}>Right leg</button>
                <button onClick={(e) => this.selectArea(e)}>Left foot</button>
                <button onClick={(e) => this.selectArea(e)}>Right foot</button>
            </div>
        )
    }
}