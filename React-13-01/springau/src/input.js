import React, { Component } from "react";

class Input extends Component {
    constructor() {
        super();
    }

    changeName=(event)=>
    {
        this.props.handleOnChange(event.target.value);
    }
    render() {
        // this.props.changeName;
        return (
            <div>
                <h2>Input</h2>
                <input onChange={this.changeName} type="text" placeholder="Name"></input>
            </div>
        )
    }
}

export default Input;