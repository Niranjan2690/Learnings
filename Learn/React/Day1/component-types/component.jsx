import React, { Component } from "react";
import ClassBased from './class-based';
import ClassBasedPure from './class-based-pure';
import FunctionBased from './function-based';
import FunctionBasedMemo from './function-based-memo';

class Comp extends Component{

    state = {
        power: 1,
        version: 101
    }

    IncreasePower = () =>{
        this.setState({power: this.state.power + 1})
    }

    IncreaseVersion = () =>{
        this.setState({version: 201})
    }
    render(){
        return  <div>
                    <h1>Component Types</h1>
                    <h2>{this.state.power}</h2>
                    <h2>{this.state.version}</h2>
                    <button onClick={this.IncreasePower}>Increase Power</button>
                    <button onClick={this.IncreaseVersion}>Increase Version</button>
                    <ClassBased power = {this.state.power} version = {this.state.version}/>
                    <ClassBasedPure power = {this.state.power} version = {this.state.version} />
                    <FunctionBased power = {this.state.power} version = {this.state.version}/>
                    <FunctionBasedMemo power = {this.state.power} version = {this.state.version}/>
                </div>
    }
}

export default Comp;