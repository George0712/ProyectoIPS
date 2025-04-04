import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Citas from "../Pages/Citas/Citas";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/citas" element={<Citas />} />
        </Routes>
    )
}

export default AppRouter;
