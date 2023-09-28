import React, { useRef, useState } from 'react';
import FunParentComp from './funparent';
import { FamilyShare } from './fun-context-call/funcontextcall';
/* import { FamilyProvider } from './context-call/context';
import CoursinComp from './cousincomp'; */


const FunGrandComp = ()=>{

    let [message, setMessage] = useState("")

    let ipref = useRef();

    return  <div style={{border: '2px solid red', padding: '10px'}}>
                    <h1>Context API — Function Grand Component</h1>
                    <h2>{message}</h2>
                    <input type='text' ref={ipref}></input>
                    <button onClick={()=>setMessage(ipref.current.value)}>Set Message</button>
                        

                        <FamilyShare.Provider value = {message}>
                            <FunParentComp />
                        </FamilyShare.Provider>

                </div>
    }
export default FunGrandComp;