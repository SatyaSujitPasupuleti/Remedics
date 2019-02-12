import React, { Component } from "react";

class Feeling extends Component{
    constructor(props){
        super(props);
        this.state = {
            painLevel: "",
        }
    }

    componentDidMount(){
        document.title = "Feeling";
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
                <button id="thumbsDown" onClick={this.thumbsDown}></button><button id="thumbsUp" onClick={this.thumbsUp}></button>
            </div>
        )
    }
}

export default Feeling;