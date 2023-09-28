import React, { Component } from "react";

class FeMale extends Component{


    render(){
        return  <div>
                    <h1>This is Female Component Child</h1>
                    <h2>Power is {this.state.users}</h2>
                    <button onClick={this.IncreasePower}>Increase</button>
                    <div>
                       <ol>{this.props.female.map( (female, idx)=><li key={ idx }> { female } </li>)}</ol>
                    </div>
                </div>
    }
}

export default FeMale;