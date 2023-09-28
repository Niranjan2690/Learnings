import axios from "axios";
import { useEffect, useState } from "react";

let UseEffectAjax = ()=>{
    let [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=1")
        .then((res)=>{setUser(res.data.data)
        })
    })
    return  <div>
                <h1>UseEffect using Ajax call</h1>
                <ol>
                    {user.map((users)=><li key={users.id}>{users.first_name} {users.last_name}</li>)}
                </ol>
            </div>
}

export default UseEffectAjax;