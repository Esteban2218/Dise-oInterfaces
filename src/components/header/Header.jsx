import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__container">
                <div className="header__logo">
                    <h1>ROOKIE<span className="header__site">RACING</span></h1>
                </div>

                <div className="header__barra">
                    <div className="navegacion">
                        <Link to="/" className="navegacion__link">Inicio</Link>
                        <Link to="/about" className="navegacion__link">Nosotros</Link>
                        <Link to="/products" className="navegacion__link">Productos</Link> {/* Cambio de 'Servicios' a 'Productos' para ser consistente con App.jsx */}
                        <Link to="/contact" className="navegacion__link">Contactos</Link>
                    </div>

                    <div className="buttons">
                        <Link to="/login" className="button">Login</Link>
                        <Link to="/register" className="button">Registro</Link>
                    </div>
                </div>

                <div className="header__hamburger">
                    {/* Se usa el componente FontAwesomeIcon en lugar de la etiqueta <i> */}
                    <FontAwesomeIcon icon={faBars} className="hamburger" />
                </div>
            </nav>
        </header>
    );
};

export default Header;