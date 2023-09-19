import ReactDOM from "react-dom/client";
import App from "./app"
import Comp from "./component-types/component";
import UseState from "./hooks/usestate";
import UseRef from "./hooks/useref";

ReactDOM.createRoot(document.getElementById("root"))
.render(<div> <App /> <Comp /> <UseState/> <UseRef /></div>)