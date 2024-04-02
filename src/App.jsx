import { Route, Routes } from "react-router";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/order/:firstname" element={<OrderPage/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
    );
}