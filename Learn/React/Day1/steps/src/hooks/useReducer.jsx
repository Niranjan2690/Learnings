import { useReducer } from "react";

const UseReducer = () =>{

    let reducer = (state,action) => {
        switch(action.type){
            case "IncreasePower" : return {...state, power: state.power + 1};
            case "DecreasePower" : return {...state, power: state.power - 1};
            case "IncreaseVersion" : return {...state, version: state.version + 1};
            case "DecreaseVersion" : return {...state, version: state.version - 1};
            default : return  state;
        }
    }

    let [store, dispatch] = useReducer(reducer, {power: 0, version: 100})

    
    return  <div>
                <h1>UseReducer Hook</h1>
                <h2>{store.power}</h2>
                <button onClick={()=>dispatch({type: "IncreasePower"})}>Increase</button>
                <button onClick={()=>dispatch({type: "DecreasePower"})}>Increase</button>
                <h2>{store.version}</h2>
                <button onClick={()=>dispatch({type: "IncreaseVersion"})}>Increase</button>
                <button onClick={()=>dispatch({type: "DecreaseVersion"})}>Increase</button>
            </div>
}

export default UseReducer;