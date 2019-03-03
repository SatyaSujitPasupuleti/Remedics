import React, { Component } from "react";
import axios from "axios";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount(){
        document.title = "Login";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = (e) => {
        e.preventDefault();
        const reqBody = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("", reqBody)
        .then()
        .catch(err => console.log(err));
}

    render(){
        return(
            <div className="login">
                <h2>Please login.</h2>
                <form className="form" onSubmit={this.login}>
                    <label>
                        Username: <input value={this.state.username} type="text" name="username" onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Password: <input value={this.state.password} type="password" name="password" onChange={this.handleChange} required/>
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;