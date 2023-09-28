import React, { Component } from 'react';
import GrandComp from './grandcomp';

class Main extends Component{
    render(){
        return  <div style={{border: '2px solid blue', padding: '10px'}}>
                    <h1>Context API — Main Component</h1>
                    <GrandComp />
                </div>
    }
}

export default Main;