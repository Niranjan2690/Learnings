import React, { Component } from 'react';


class ClassBasedForm extends Component{
    state = {
        uname : "",
        upswd : ""
    }

    Username = (evt) =>{
        this.setState({uname: evt.target.value})
    }

    Userpassword = (evt) =>{
        this.setState({upswd: evt.target.value})
    }

    render(){
        return  <div>
                    <h1>Class Based Form</h1>
                    <label htmlFor='uname'>Enter your name</label>
                    <input onChange = {(evt)=>this.Username(evt)} value={this.state.uname} type='text' id='uname'></input>
                    <label htmlFor='upswd'>Enter your password</label>
                    <input onChange = {(evt)=>this.Userpassword(evt)} value={this.state.upswd} type='password' id='upswd'></input>

                    <h1>{this.state.uname}</h1>
                    <h1>{this.state.upswd}</h1>
                    <hr/>
                </div>
    }
}

export default ClassBasedForm;