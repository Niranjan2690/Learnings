import React, { useRef, useState } from 'react';

let UseRef = ()=>{
    let [state, setState] = useState()

    let ipref = useRef();

    return  <div>
                <h1>UseRef Hook</h1>
                <h2>{state}</h2>
                <input type='text' ref={ipref}></input>
                <button onClick={()=>setState(ipref.current.value)}>Set Name</button>
            </div>
}

export default UseRef;