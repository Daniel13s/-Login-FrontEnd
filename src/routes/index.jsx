import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "../pages/signin"
import Signup from "../pages/signup";
import Home from "../pages/home"

function GerenciadorRotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default GerenciadorRotas;