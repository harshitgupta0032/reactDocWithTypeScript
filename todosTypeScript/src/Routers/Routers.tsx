import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import Todos from "../Component/Todos/Todos";

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todos/>}/>
        </Routes>
    )
}
export default Routers;