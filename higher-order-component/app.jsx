import React, { Component } from 'react';


class App extends Component{

    state = {
        power: 1,
    }

    IncreasePower = ()=>{
        this.setState({power: this.state.power + 1})
    }
    render(){
        return  <div>
                    <h1>This is App Component</h1>
                    <h2>{this.state.power}</h2>
                    <button onClick={this.IncreasePower}>Increase</button>
                </div>
    }
}

export default App;
