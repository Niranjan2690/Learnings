import { useParams } from "react-router-dom";

let Contact = ()=>{

    let params = useParams();

    return  <div>
                <h1>This is Contact Component</h1>
                <h1>{params.pow}</h1>
            </div>
}

export default Contact;