import React, { Component } from "react";

class InitialDiagnosis extends Component{
    constructor(props){
        super(props);
        this.state = {
            pain: "",
            description:"",
            painResponse: "",
        }
    }

    componentDidMount(){
        document.title = "Initial Diagnosis";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
            <div>
                <h1>Intial Diagnosis</h1>
                <form id="diagnosis">
                    <label>
                        Pain: <input type="range" id="pain" name="pain" min="0" max="10"></input>
                    </label>
                    <label>
                        Area: <select>
                            <option>Head</option>
                            <option>Neck</option>
                            <option>Head</option>
                            <option>Head</option>
                            <option>Head</option>
                            <option>Head</option>
                            <option>Head</option>
                            <option>Head</option>
                            <option>Head</option>
                        </select>
                    </label>
                    <label>
                        Description: <textarea value={this.state.description} onChange={this.handleChange} cols={40} rows={10} />
                    </label>
                </form>
            </div>
        )
    }
}

export default InitialDiagnosis;