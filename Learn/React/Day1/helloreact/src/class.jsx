import { Component } from "react";

class ClassApp extends Component{
    title = "This in class based Component";

    render(){    
        return  <div>
                    <h1>{ this.title }</h1>
                    <h1>{ this.title.toUpperCase() }</h1>
                    <h1>{ this.title.toLowerCase() }</h1>
                </div>
    }
}

export default ClassApp;