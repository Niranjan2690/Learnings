import React, {Component} from "react";
import ChildComponent from "./child";

class AppComponent extends Component{
    render(){
        return <div>
                    <h1>App Component for Props</h1>
                    <div>
                        <ChildComponent title = "First Child" version = {100} power = {5} />
                        <ChildComponent title = "Second Child" version = {200} power = {10} />
                        <ChildComponent title = "Third Child" version = {300} power = {15} />
                        <ChildComponent version = {400} power = {20} />
                        <ChildComponent title = "Fifth Child" power = {25} />
                        <ChildComponent title = "Sixth Child" version = {600} />
                        <ChildComponent />
                    </div>
               </div>
    }
}

export default AppComponent