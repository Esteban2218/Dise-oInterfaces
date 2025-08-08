import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CgClose } from "react-icons/cg";
import "../../assets/css/Header.css";
import { useAuth } from "../../context/AuthProvider";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <header className="navbar">
            <nav className="navbar__container">
                <div className="navbar__logo">
                    <Link to="/" onClick={closeMenu}>
                        <h1>ROOKIE<span className="navbar__site">RACING</span></h1>
                    </Link>
                </div>

                <div className="navbar__hamburger" onClick={toggleMenu}>
                    {isOpen ? (
                        <CgClose className="hamburger" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} className="hamburger" />
                    )}
                </div>

                <div className={`navbar__barra ${isOpen ? "open" : ""}`}>
                    <div className="navegacion">
                        <Link to="/about" className="navegacion__link" onClick={closeMenu}>Nosotros</Link>
                        <Link to="/products" className="navegacion__link" onClick={closeMenu}>Productos</Link>
                        <Link to="/contact" className="navegacion__link" onClick={closeMenu}>Contactos</Link>
                    </div>

                    {isOpen && (
                        <div className="buttons mobile-buttons">
                            {user ? (
                                <>
                                    <span className="user-email">{user.email}</span>
                                    <button className="button" onClick={handleLogout}>Cerrar sesión</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="button" onClick={closeMenu}>Login</Link>
                                    <Link to="/register" className="button" onClick={closeMenu}>Registro</Link>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {!isOpen && (
                    <div className="buttons desktop-buttons">
                        {user ? (
                            <>
                                <span className="user-email">{user.email}</span>
                                <span className="user-email"><FaHeart className="cart"/></span>
                                <button className="button" onClick={handleLogout}>Cerrar sesión</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="button">Login</Link>
                                <Link to="/register" className="button">Registro</Link>
                            </>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
