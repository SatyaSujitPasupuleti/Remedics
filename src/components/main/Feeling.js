import React, { Component } from "react";

export default class Feeling extends Component{

    componentDidMount(){
        document.title = "Remedics | Feeling";
    }

    thumbsDown = () => {
        //push to page to describe pain level
        this.props.history.push("/pain");
    }

    thumbsUp = () => {
        //push to something w/ different questions
        this.props.history.push("/relief");
    }

    render(){
        return(
            <div>
                <p>How are you feeling today?</p>
                <button id="thumbsUp" onClick={this.thumbsUp}><img title="thumbsup" src={require("../img/thumbsup.png")} height="42" width="42"/> </button>
                <button id="thumbsDown" onClick={this.thumbsDown}><img title="thumbsdown" src={require("../img/thumbsdown.png")} height="42" width="42"/></button>
            </div>
        )
    }
}