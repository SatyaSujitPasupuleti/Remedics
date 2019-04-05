import React, { Component } from "react";
import { withRouter } from 'react-router';
import axios from "axios";

class BodyArea extends Component{

    selectArea = (e) => {
        let area = e.target.innerHTML;
        // add to db body part that hurts?
        // redirect to another page that lists symptoms
        // axios.post("link", { area: area })
        // .then(
        //     () => this.props.history.push("/symptoms")
        // )
        // .catch(err => {
        //     throw err;
        // });
    }

    render(){
        return(
            <div id="bodyArea">
                <button onClick={(e) => this.selectArea(e)}>Head</button>
                <button onClick={(e) => this.selectArea(e)}>Neck</button>
                <button onClick={(e) => this.selectArea(e)}>Left arm</button>
                <button onClick={(e) => this.selectArea(e)}>Right arm</button>
                <button onClick={(e) => this.selectArea(e)}>Left hand</button>
                <button onClick={(e) => this.selectArea(e)}>Right hand</button>
                <button onClick={(e) => this.selectArea(e)}>Chest</button>
                <button onClick={(e) => this.selectArea(e)}>Back</button>
                <button onClick={(e) => this.selectArea(e)}>Stomach</button>
                <button onClick={(e) => this.selectArea(e)}>Left leg</button>
                <button onClick={(e) => this.selectArea(e)}>Right leg</button>
                <button onClick={(e) => this.selectArea(e)}>Left foot</button>
                <button onClick={(e) => this.selectArea(e)}>Right foot</button>
            </div>
        )
    }
}

export default withRouter(BodyArea)