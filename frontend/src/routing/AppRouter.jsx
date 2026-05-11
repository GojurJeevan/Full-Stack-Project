import { Route, Routes } from "react-router-dom"
import { Login } from "../user/Login"
import { SignUp } from "../user/SignUp"
import { Home } from "../pages/Home"
import { Product } from "../pages/Product"
import { Cart } from "../pages/Cart"
export const AppRouter = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/products" element={<Product />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </>
    )
}