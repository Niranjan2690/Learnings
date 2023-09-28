import React, { useContext } from "react";
import { FamilyShare } from "./fun-context-call/funcontextcall";

const FunChildComp = ()=> {

    const val = useContext(FamilyShare);

        return  <div style={{border: '2px solid purple', padding: '10px'}}>
                    <h1>Context API — Function Child Component</h1>
                    <h2>{val}</h2>
                </div>
}

export default FunChildComp;