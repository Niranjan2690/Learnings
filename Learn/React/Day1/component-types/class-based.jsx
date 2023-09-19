import React, { Component } from "react";

class ClassBased extends Component{
    render(){
        console.log("Class Based Component was rendered", Math.random())
        return  <div>
                    <hr />
                    <h1>Class Based Component</h1>
                    <h2>{this.props.power}</h2>
                    <h2>{this.props.version}</h2>
                </div>
    }
}

export default ClassBased;