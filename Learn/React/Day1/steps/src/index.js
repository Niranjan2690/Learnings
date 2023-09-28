import React, {Component} from "react";
import ReactDOM from "react-dom/client";
//import Frag from "./fragment";
import AppComponent from "./class-based-components/app";
import ParentComponent from "./state/parent";
import ComponentCommunication from "./component-communication/communication";
import ComponentLifecycle from "./component-lifecycle/componentlifecycle";
/* import HigherOrder from './higher-order-component/higher-order'; */
import UseState from "./hooks/useState";
import UseRef from "./hooks/useRef";
import UseEffect from "./hooks/useeffect";
import UseEffectAjax from "./hooks/useeffectajax";
import Main from "./context_API/main";
import FunMain from "./context_API_using_Function/funmain";
import UseReducer from "./hooks/useReducer";
import ClassBasedForm from "./forms/class_based_form";
import FunctionBasedForm from "./forms/function_based_form";
import UseReducerForm from "./forms/useReducer_form";


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
            <Elm /> 
            <ClassComp /> 
            <AppComponent />
            <ParentComponent />
            <ComponentCommunication />
            <ComponentLifecycle />
            {/* <HigherOrder /> */}
            <UseState />
            <UseRef/>
            <UseEffect/>
            <UseEffectAjax/>
            <UseReducer/>
            <Main/>
            <FunMain/>
            <ClassBasedForm/>
            <FunctionBasedForm/>
            <UseReducerForm/>
        </div>)