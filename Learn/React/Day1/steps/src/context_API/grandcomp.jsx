import React, { Component } from 'react';
import ParentComp from './parentcomp';
import { FamilyProvider } from './context-call/context';
import CoursinComp from './cousincomp';


class GrandComp extends Component{

    state = {
        user : ''
    }

    ipref = React.createRef();

    setUser = ()=>{
        this.setState({user: this.ipref.current.value})
    }

    render(){
        return  <div style={{border: '2px solid red', padding: '10px'}}>
                    <h1>Context API — Grand Component</h1>
                    <h2>{this.state.user}</h2>
                    <input type='text' ref={this.ipref}></input>
                    <button onClick={this.setUser}>Set Message</button>

                    <FamilyProvider value = {this.state.user}>
                        <ParentComp />
                        <CoursinComp />
                    </FamilyProvider>

                </div>
    }
}

export default GrandComp;