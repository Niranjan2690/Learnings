import React, { Component } from "react";
import ChildComponent from "./child";

class ParentComponent extends Component{

    state = {
        IncreasePower : 1,
        Message: "Default message"
    }

    IncreasePower = ()=>{
        this.setState({IncreasePower: this.state.IncreasePower + 1})
    }

    ChangeMessage = (nmessage)=>{
        this.setState({ Message: nmessage })
    }
    render(){
        return  <div style={{border: "2px solid green", padding: "10px"}}>
                    <hr />
                    <h1>State using Parent to Child</h1>
                    <h1>Power is: {this.state.IncreasePower}</h1>
                    <button onClick = {this.IncreasePower}>Increase</button>
                    <h1>Message is: {this.state.Message}</h1>
                    <input type="text" />
                    <button onClick = {this.IncreasePower}>Increase</button>

                    <div>
                       {/*  Sending information from paren to Child */}
                        <ChildComponent  IncreasePower = {this.state.IncreasePower}
                        Message = {this.state.Message}
                        CM= {this.ChangeMessage}/>
                    </div>
                </div>
    }
}

export default ParentComponent;