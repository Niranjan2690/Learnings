import React, { Component } from "react";
import WithHero from './higher-order';

class Male extends Component{

    render(){
        return  <div>
                    <h1>This is Male Component Child</h1>
                    <h2>Power is {this.props.users}</h2>
                    <button onClick={this.props.IncreasePower}>Increase</button>

                    <div>
                       <ol>{this.props.HeroList.map( (hero, idx)=><li key={ idx }> {hero} </li>)}</ol>
                    </div>
                </div>
    }
}

export default WithHero(Male);