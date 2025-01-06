import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import Todos from "../Component/Todos/Todos";
import Hooks from "../Component/Hooks/Hooks";
import TodoFigma from "../Component/TodoFigme/TodoFigms";
import ReduxAndReduxToolkit from "../Component/ReduxAndReduxToolKit/ReduxAndReduxToolkit";
import UserDetail from "../Component/ReduxAndReduxToolKit/UserData/UserDetail";

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todos/>}/>
            <Route path="/hooks" element={<Hooks/>}/>
            <Route path="/todoFigma" element={<TodoFigma/>}/>
            <Route path="/Redux-toolkit" element={<ReduxAndReduxToolkit/>}/>
            <Route path="/Redux-toolkit/user/:id" element={<UserDetail/>}/>
        </Routes>
    )
}
export default Routers;