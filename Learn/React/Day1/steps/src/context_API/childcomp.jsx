import React, { Component } from 'react';
import {FamilyConsumer} from './context-call/context';


class ChildComp extends Component{
    render(){
        return  <div style={{border: '2px solid purple', padding: '10px'}}>
                    <h1>Context API — Child Component</h1>
                   
                    <FamilyConsumer>
                        {(val)=>{
                            return <h2>{val}</h2>
                        }}
                    </FamilyConsumer>
                </div>
    }
}

export default ChildComp;