import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LoginImage from "../assets/Login1.png";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useAuth(); // 👈

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            setUser({
                email: user.email,
                uid: user.uid
            }); // ✅ Actualiza el contexto

            toast.success(`¡Bienvenido ${user.email}!`);
            navigate("/");

        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    toast.error("Usuario no encontrado");
                    break;
                case "auth/wrong-password":
                    toast.error("Contraseña incorrecta");
                    break;
                case "auth/invalid-email":
                    toast.error("Correo electrónico inválido");
                    break;
                case "auth/invalid-credential":
                    toast.error("Credenciales incorrectas");
                    break;
                default:
                    toast.error("Error al iniciar sesión");
                    break;
            }
        }
    };

    return (
        <main className="main-content-login">
            <section className="login-section">
                <h1 className="login-title">INICIAR SESION</h1>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
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

                        <p className="register-text">
                            ¿No tienes cuenta? <NavLink to="/register" className="register-link">Regístrate</NavLink>
                        </p>

                        <button type="submit" className="login-button">INICIAR SESIÓN</button>
                        <section className="login-image-section">
                            <img src={LoginImage} alt="Rookie Racing Modelos" className="login-bottom-image" />
                        </section>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;
