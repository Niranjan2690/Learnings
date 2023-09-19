import React, {Component} from "react"

let WithOrder = (Comp) =>{
    return class Temp extends Component{
        state={
            total : 1,
        }
    
        IncreaseTotal = ()=>{
            this.setState({total: this.state.total + 1})
        }

        render(){
            return <Comp male = {this.props.male}/>
        }
    }
}

export default WithOrder;