import React, { Component } from 'react';
import {FamilyConsumer} from './context-call/context';

class CoursinComp extends Component{
    render(){
        return  <div>
                    <h1>Context API — Cousin Component</h1>

                    <FamilyConsumer>
                        {(nir) => {
                            return <h2>{nir}</h2>
                        }}
                    </FamilyConsumer>
                </div>
    }
}

export default CoursinComp;