import React, { Component } from "react";

class InitialDiagnosis extends Component{
    constructor(props){
        super(props);
        this.state = {
            general: props,
        }
    }

    render(){
        return(
            <div>
                {this.state.props.firstName}
            </div>
        )
    }
}

export default InitialDiagnosis;