import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LoginImage  from '../assets/Login1.png';

const Login = () => {
    // Estado para los campos del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(""); // Nuevo estado para el rol

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert(`Email: ${email}\nContraseña: ${password}\nRol: ${role}`);
        navigate("/"); // Redirige a la página de inicio después del login
    };

    return (
        <main className="main-content-login">
            <section className="login-section">
                <h1 className="login-title">INICIAR SESION</h1>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        {/* Campo de Correo Electrónico */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Escribir"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo de Contraseña */}
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Escribir"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo de Rol (Selector) */}
                        <div className="form-group">
                            <label htmlFor="role" className="form-label">Rol</label>
                            <select
                                id="role"
                                name="role"
                                className="form-input select-input"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">Usuario</option>
                                <option value="admin">Administrador</option>
                                <option value="guest">Invitado</option>
                            </select>
                        </div>
                        
                        <p className="register-text">
                            ¿No tienes cuenta? <NavLink to="/register" className="register-link">Regístrate</NavLink>
                        </p>

                        <button type="submit" className="login-button">INICIAR SESIÓN</button>
                        <section className="login-image-section">
                            <img src={LoginImage } alt="Rookie Racing Modelos" class="login-bottom-image" />
                        </section>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;