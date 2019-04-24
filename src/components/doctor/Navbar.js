import React, { Component } from "react";
// import axios from "axios";

export default class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            name: "Jake",
            showMenu: false
        }
    }

    // componentDidMount () => {
    //     axios.get("doc info")
    //     .then(
    //         (response) => this.setState({name: response.name})
    //     )
    //     .catch(err => console.log(err));
    // }

    showDropdown = (e) => {
        e.preventDefault();

        this.setState({ showMenu: true }, () =>
            document.addEventListener("click", this.closeDropdown)
        );
    }

    closeDropdown = (e) => {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => 
                document.removeEventListener("click", this.closeMenu)
            );
        }
    }

    render = () => {
        return(
            <div>
                <nav id="side-nav">
                    <div id="welcomeBox"></div>
                    <a href="/todo">To dos</a>
                    <a href="/upload_questions">Questions</a>
                </nav>
                <nav id="top-nav">
                    <div className="dropdown"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                    >
                        <button onClick={this.showDropdown} className="dropdownButton">{this.state.name}</button>
                        {
                            this.state.showMenu
                            ? 
                            <div className="dropdown-content">
                                <a href="/profile">Profile</a>
                                <a href="/patients">Patients</a>
                            </div>
                                : null
                        }
                    </div>
                </nav>
            </div>
        )
    }
}