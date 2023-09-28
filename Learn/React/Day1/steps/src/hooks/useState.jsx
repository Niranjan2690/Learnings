import React, { useState } from 'react';

const UseState = ()=>{

    let [power, setPower] = useState(0);
    let [version, setVersion] = useState(10);

    let [state, setState] = useState({AnotherPower : 1, AnotherVersion : 30})
    return <div>
                <hr/>
                <h1>HOOKS</h1>
                <h1>UseState Hook</h1>
                <h2>{power}</h2>
                <button onClick={()=>setPower(power + 1)}>Increase</button>
                <h2>{version}</h2>
                <button onClick={()=>setVersion(20)}>Increase</button>
                <h2>{state.AnotherPower}</h2>
                <button onClick={()=>setState({AnotherPower: state.AnotherPower + 1, AnotherVersion : state.AnotherVersion})}>Increase</button>
                <h2>{state.AnotherVersion}</h2>
                <button onClick={()=>setState({AnotherPower: state.AnotherPower, AnotherVersion : 40})}>Increase</button>
            </div>

}

export default UseState;