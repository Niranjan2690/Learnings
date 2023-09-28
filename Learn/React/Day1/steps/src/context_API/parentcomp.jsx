import React, { Component } from 'react';
import ChildComp from './childcomp';


class ParentComp extends Component{
    render(){
        return  <div style={{border: '2px solid green', padding: '10px'}}>
                    <h1>Context API — Parent Component</h1>

                    <ChildComp/>
                </div>
    }
}

export default ParentComp;