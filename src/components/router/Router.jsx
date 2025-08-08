import { Route, Routes } from 'react-router-dom';
import Landing from "../../pages/Landing"
import About from "../../pages/About"
import Products from "../../pages/Products"
import Contacto from "../../pages/Contacto"
import Login from "../../pages/Login"
import Register from "../../pages/Register"

const Router = () => {
    return (
        <Routes>
            <Route index element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contacto />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    )
}

export default Router