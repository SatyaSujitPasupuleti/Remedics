import React, { Component } from "react";

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            //
        }
    }

    componentDidMount(){
        document.title = "Dashboard";
        // call db to get doctor's name, i guess
        // axios.get("").then()
    }

    render(){
        return(
            <div>
                Hello World!
            </div>
        )
    }
}