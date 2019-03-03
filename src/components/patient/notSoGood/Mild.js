import React, { Component } from "react";

class Mild extends Component{

    componentDidMount(){
        document.title = "Mild";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    mild = () => {
        //stuff
    }

    render(){
        return(
            <div>
                <p>Hm, alright, </p>
            </div>
        )
    }
}

export default Mild;