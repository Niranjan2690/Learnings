import React, { useEffect, useState } from 'react';

const UseEffect = ()=>{

    let [power, setPower] = useState(1)
    let [version, setVersion] = useState(0)

    useEffect(()=> {
        console.log("Component will be Mounted")
    }, [])

    useEffect(()=> {
        console.log("Component will be Updated", Math.random())
    }, [version])

    useEffect(()=> {
        return ()=>{
            console.log("Component will be UnMounted")
        }
    }, [])
    return  <div>
                <h1>UseEffect Hook</h1>
                <h2>{power}</h2>
                <button onClick={()=>setPower(power + 1)}>Increase</button>
                <h2>{version}</h2>
                <button onClick={version < 30 ? ()=>setVersion(version + 10): ()=>setVersion("Error")}>Increase</button>
            </div>
}

export default UseEffect;