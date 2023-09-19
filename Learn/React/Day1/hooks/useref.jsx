import React, { useRef, useState } from 'react';

let UseRef = ()=>{
    let [power, setPower] = useState(1);
    let ipRef = useRef();
    return  <div>
                <hr />
                <h1>This is UseRef Hook</h1>
                <h2>{power}</h2>
                <input type='text' ref={ipRef}></input>
                <button onClick={()=>setPower(ipRef.current.value)}>Increase</button>
            </div>
}

export default UseRef;