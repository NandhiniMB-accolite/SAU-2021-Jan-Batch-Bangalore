import React, { Component } from "react";

class Header extends Component {
    constructor() {
        super();
        this.name="Accolite";
    }

    
   handleOnChange=(name)=>{
       this.setState({name});
   }
    render() {
        return (
            <div>
                <h2>Welcome {this.name}</h2>
            </div>
        )
    }
}

export default Header;