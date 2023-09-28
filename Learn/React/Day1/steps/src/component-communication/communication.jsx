import React, { Component } from "react";



class ComponentCommunication extends Component{
    state = {
        power: 1,
        show: false,
    }

    IncreaseValue = () =>{
        this.setState({power: this.state.power + 1})
    }

   /*  Showval = ()=>{
        this.setState({show: !this.state.show})
    } */

    render(){
        return  <div>
                    <hr/>
                    <h1>Power is: {this.state.power}</h1>
                    <button onClick={this.IncreaseValue}>Increase</button>
                    <label htmlFor="terms">Show terms and conditions</label>
                    <input onChange={()=>this.setState({show: !this.state.show})} id="terms" type="checkbox"/>
                    {this.state.show ? <div >
                    <h1>Terms and conditions</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae distinctio quos cupiditate. Consequatur quidem veniam fugit ducimus, ea, nostrum rem accusantium rerum accusamus qui quae, eius possimus totam magnam.</h3>
                    </div> : "No terms ans conditions"}
                    <br />
                    <br />
                    <br />
                    {/* circuit operator */}
                    <label htmlFor="term">Show terms and conditions using circuit operator</label>
                    <input onChange = {()=>this.setState({show: !this.state.show})} type="checkbox" id="term" />
                    {this.state.show && 
                    <div>
                        <h1>Terms</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ratione dolorum ducimus inventore culpa laudantium, nobis exercitationem nostrum soluta asperiores?</p>
                    </div>}                    
                </div>
    }
}

export default ComponentCommunication;