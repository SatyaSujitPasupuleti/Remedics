import React, { Component } from "react";

export default class Navbar extends Component{

    render = () => {
        return(
            <div>
                <nav id="side-nav">
                    <div id="welcomeBox"></div>
                    <a href="/patient_answers">Patient & Answers</a>
                    <a href="/upload_questions">Questions</a>
                </nav>
                <nav id="top-nav">
                    <a href="/profile">Profile</a>
                </nav>
            </div>
        )
    }
}