import React, {Component} from "react";

class ChildComponent extends Component{
    static defaultProps = {
        title: "Default Title",
        version: 0,
        power: 1
    }
    render(){
        return  <div>
                    <h1>Child Component for Props</h1>
                    <h3>title is: {this.props.title } </h3>
                    <h3>version is: {this.props.version }</h3>
                    <h3>power is: {this.props.power }</h3>
                </div>
    }
    }

export default ChildComponent;