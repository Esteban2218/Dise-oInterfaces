// src/pages/Inicio.jsx
import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main"; // <-- Ruta corregida
import Footer from "../components/footer/Footer"; // <-- Ruta corregida
import '../index.css';

const Inicio = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Inicio;