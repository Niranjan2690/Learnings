import React, {Component} from "react";
import ReactDOM from "react-dom/client";
import Frag from "./fragment"


let Elm = function(){
    return<h1>Function based Components</h1>
}

//------------------------------------------------

class ClassComp extends Component{
    render(){
        return <h1>Class based Components</h1>
    }
}


ReactDOM.createRoot(document.getElementsByClassName("root")[0])
.render(<div>
            <Elm /> <ClassComp /> <Frag />
        </div>)