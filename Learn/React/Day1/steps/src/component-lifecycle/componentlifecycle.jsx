import React, { Component } from "react";
import Hero from "./hero";

class ComponentLifecycle extends Component{
    //Constructor()
    //ComponentDidMount,
    //ComponentDidUpdate,
    //ComponentWillUpdate,
    //render

    state={
        power : 0,
    }

    IncreasePower=()=>{
        this.setState({power: this.state.power + 1})
    }

    render(){
        return  <div>
                    <hr />
                    <h1>Component Life Cycle</h1>
                    <h1>{this.state.power}</h1>
                    <button onClick={this.IncreasePower}>Increase</button>
                    {this.state.power < 10 ? <Hero>power={this.state.power}</Hero> : "Error"}
                </div>
    }
}

export default ComponentLifecycle;