import React, { Component } from "react";


class ChildComponent extends Component{

    ipref = React.createRef();
    render(){
        return  <div style={{border: "2px solid red", padding: "10px"}}>
                {/*  Getting information from paren to Child */}
                    <h1>State using Child to Parent</h1>
                    <h1>Power is: {this.props.IncreasePower}</h1>
                    <h1>Message is: {this.props.Message}</h1>
                    <button onClick={()=>{this.props.CM("Hello Niranjan")}}>Change Message</button>
                    <input type="text" ref={this.ipref}></input>
                    <button onClick={()=>{this.props.CM(this.ipref.current.value)}}>Inputtxt</button>
                </div>
    }
}

export default ChildComponent;