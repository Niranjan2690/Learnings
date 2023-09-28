import React, { Component } from "react";
import axios from "axios";

class Hero extends Component{
    //Constructor()
    //ComponentDidMount,
    //ComponentDidUpdate,
    //ComponentWillUpdate,
    //render

    constructor(){
        super();
        console.log("This is constructor method");
    }

    state = {
        users : []
    }

    componentDidMount(){
        console.log("This is ComponentDidMount")
        axios.get("https://reqres.in/api/users?page=1")
        .then(res => this.setState({users: res.data.data}))
        .catch(err => console.log("Error", err))
    }

    componentDidUpdate(){
        console.log("This is ComponentDidUpdate")
    }

    componentWillUnmount(){
        console.log("This is ComponentWillUnmount")
    }

    render(){
        console.log("This is Render method")
        return  <div>
                    <h1>power is {this.props.power}</h1>
                    <p>{JSON.stringify(this.state.users)}</p>
                    <ul>
                        {this.state.users.map((users)=> <li key={users.id}>{users.first_name} {users.last_name} <img src={users.avatar} width="50" /></li>)}
                    </ul>
                </div>
    }
}

export default Hero;