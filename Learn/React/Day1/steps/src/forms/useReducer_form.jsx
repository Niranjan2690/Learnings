import { useReducer } from "react"

let UseReducerForm = () => {

    let inputs = (state, action)=>{
        switch(action.type){
            case "username" : return {...state, uname: action.payload}
            case "password" : return {...state, upswd: action.payload}
            default: return state;
        }
    }

    let [users, setUsers] = useReducer(inputs, {uname: "", upswd: ""})

    
        return  <div>
                    <h1>Form using UseReducer</h1>
                    <label htmlFor='uname'>Enter your name</label>
                    <input onChange = {(evt)=>setUsers({type: "username", payload: evt.target.value})} value={users.uname} type='text' id='uname'></input>
                    <label htmlFor='upswd'>Enter your password</label>
                    <input onChange = {(evt)=>setUsers({type: "password", payload: evt.target.value}) } value={users.upswd} type='password' id=''></input>

                    <h2>{users.uname}</h2>
                    <h2>{users.upswd}</h2>
                    <hr/>
                </div>
        
}

export default UseReducerForm;