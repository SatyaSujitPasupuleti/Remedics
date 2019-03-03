import React, { Component } from "react";

class Pain extends Component{
    constructor(props){
        super(props);
        this.state = {
            painLevel: "",
        }
    }

    componentDidMount(){
        document.title = "Pain";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    level = () => {
        if (parseInt(this.state.painLevel) < 4){
            this.props.history.push("/mild");
        }
        else if (parseInt(this.state.painLevel) >= 4 && parseInt(this.state.painLevel) < 7){
            this.props.history.push("/noticeable");
        }
        else{
            this.props.history.push("/severe");
        }
    }

    render(){
        return(
            <div>
                <p>Sorry to hear that. Can you specify how bad it is?</p>
                <form id="diagnosis" onSubmit={this.level}>
                    <label>
                        Pain: <input type="range" id="pain" onChange={this.handleChange} name="painLevel" min="0" max="10"></input>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Pain;