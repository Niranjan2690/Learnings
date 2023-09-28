import { Outlet } from "react-router-dom";

let Blog = ()=>{
    return  <div>
                <h1>This is Blog Component</h1>
                <Outlet/>
            </div>
}

export default Blog;