import React, { Component } from "react";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            //
        }
    }

    componentDidMount(){
        document.title = "Dashboard";
        // call db to get doctor's name, i guess
    }

    render(){
        return(
            <div>
                <nav>
                    <a>Patients</a>
                    <a>Patients</a>
                </nav>
            </div>
        )
    }
}

export default Dashboard;