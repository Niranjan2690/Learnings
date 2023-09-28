import React, { Component } from "react";
import Male from "./male";
import FeMale from "./female";

class HigherOrder extends Component{

    state = {
        users : 1,
        male: ["Niranjan", "Lokesh", "Dhruvesh"],
        female: ["Ranjini", "Saranya"]
    }

    IncreasePower = () =>{
        this.setState({users: this.state.users + 1})
    }
    render(){
        return  <div>
                    <hr />
                    <h1>Higher Order Component</h1>
                    <h2>Power is {this.state.users}</h2>
                    <button onClick={this.IncreasePower}>Increase</button>
                <div>
                    <Male users={this.state.users} IP={this.IncreasePower} male={this.state.male}/>
                    <FeMale users={this.state.users} IP={this.IncreasePower} female={this.state.female}/>
                </div>
                </div>
    }
}

export default HigherOrder;