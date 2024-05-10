import { Route, Routes } from "react-router";
import LoginPage from "./pages/login/LoginPage";
import OrderPage from "./pages/order/OrderPage";
import ErrorPage from "./pages/error/ErrorPage";

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/order/:firstname" element={<OrderPage/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
    );
}