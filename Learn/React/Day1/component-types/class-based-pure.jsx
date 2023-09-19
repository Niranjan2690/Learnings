import React, { PureComponent } from "react";

class ClassBasedPure extends PureComponent{
    render(){
        console.log("Class Based Pure Component was rendered")
        return  <div>
                    <hr />
                    <h1>Class Based Pure Component</h1>
                    <h2>{this.props.power}</h2>
                    <h2>{this.props.version}</h2>
                </div>
    }
}

export default ClassBasedPure;