import { useState } from "react"

let FunctionBasedForm = () => {

    let [users, setUsers] = useState({uname: "", upswd: ""})

    let inputs = (evt)=>{
        setUsers({...users, [evt.target.id] : evt.target.value})
    }
        return  <div>
                    <h1>Function Based Form</h1>
                    <label htmlFor='uname'>Enter your name</label>
                    <input onChange = {(evt)=>inputs(evt) } value={users.uname} type='text' id='uname'></input>
                    <label htmlFor='upswd'>Enter your password</label>
                    <input onChange = {(evt)=>inputs(evt) } value={users.upswd} type='password' id='upswd'></input>

                    <h2>{users.uname}</h2>
                    <h2>{users.upswd}</h2>
                    <hr/>
                </div>
}

export default FunctionBasedForm;