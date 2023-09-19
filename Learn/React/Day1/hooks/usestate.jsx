import React, { useState } from 'react';

const UseState = ()=>{

    // Using String method

    /* const [power, setPower] = useState(1)
    const [version, setVersion] = useState(101) */
    // ... denotes destructuring

    const [state, setState] = useState({power: 1, version: 101})
    return  <div>
            <hr/>
                <h1>Hooks (UseState)</h1>
                <h2>{state.power}</h2>
                <button onClick={()=> setState({...state, power : state.power + 1})}>Increase</button>
                <h2>{state.version}</h2>
                <button onClick={()=> setState({...state, version : 201})}>Increase</button>
            </div>
}

export default UseState;