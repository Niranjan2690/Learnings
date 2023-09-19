import {memo} from 'react';

let FunctionBasedMemo = (props)=>{
    console.log("Function Based Memo Component", Math.random())
    return <div>
                <h1>This is Function Based Component</h1>
                <h2>{props.power}</h2>
                <h2>{props.version}</h2>
           </div>
}


export default memo(FunctionBasedMemo);