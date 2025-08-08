import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Actualizar el nombre en el perfil del usuario de Firebase
            await updateProfile(userCredential.user, {
                displayName: nombre,
            });

            toast.success("Registrado correctamente");
            navigate("/login");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <main className="main-content-register">
            <section className="register-section">
                <h1 className="register-title">REGISTRARSE</h1>
                <div className="register-form-container">
                    <form className="register-form" onSubmit={handleRegister}>
                        {/* Campo para Nombres y Apellidos */}
                        <div className="form-group">
                            <label htmlFor="reg-nombre" className="form-label">Nombres y Apellidos</label>
                            <input
                                type="text"
                                id="reg-nombre"
                                name="nombre"
                                placeholder="Escribir"
                                className="form-input"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo para Documento de identidad */}
                        <div className="form-group">
                            <label htmlFor="reg-documento" className="form-label">Documento de identidad</label>
                            <input
                                type="text"
                                id="reg-documento"
                                name="documento"
                                placeholder="Escribir"
                                className="form-input"
                                value={documento}
                                onChange={(e) => setDocumento(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo para Correo Electrónico */}
                        <div className="form-group">
                            <label htmlFor="reg-email" className="form-label">Correo Electrónico</label>
                            <input
                                type="email"
                                id="reg-email"
                                name="email"
                                placeholder="Escribir"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo para Teléfono */}
                        <div className="form-group">
                            <label htmlFor="reg-telefono" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                id="reg-telefono"
                                name="telefono"
                                placeholder="Escribir"
                                className="form-input"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo para Contraseña */}
                        <div className="form-group">
                            <label htmlFor="reg-password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                id="reg-password"
                                name="password"
                                placeholder="Escribir"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="register-button">REGISTRARSE</button>
                    </form>
                </div>
                <NavLink to="/login" className="enlace">
                    ¿Ya tienes cuenta? Inicia sesión aquí
                </NavLink>
            </section>
        </main>
    );
};

export default Register;