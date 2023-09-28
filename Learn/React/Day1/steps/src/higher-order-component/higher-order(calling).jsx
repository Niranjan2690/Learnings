//this is higher order, which used to call only in function and starts with "With"

import { Component } from "react";


let WithHero = (Comp)=>{
    class TempComp extends Component{

        state = {
            users : 1,
        }
    
        IncreasePower = () =>{
            this.setState({users: this.state.users + 1})
        }

        render(){
            return  <Comp  IP={this.props.IncreasePower} male={this.props.male} />
        }
    }
    return TempComp;
}

export default WithHero;