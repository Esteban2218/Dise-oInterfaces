import React, { useState } from 'react';

// Asegúrate de importar la imagen si la vas a usar
import contactoImg from "../assets/C1.png";

const Contacto = () => {
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario (por ejemplo, a un servicio de backend o Firebase)
        alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
        
        // Limpiar el formulario después del envío
        setNombre('');
        setCorreo('');
        setAsunto('');
        setMensaje('');
    };

    return (
        <main>
            {/* Contenedor principal para las dos columnas superiores */}
            <section className="top-content-wrapper">
                {/* Sección del Formulario de Contacto */}
                <div className="contact-form-container">
                    <p>¿Necesitas ayuda? Déjanos tu mensaje y nos comunicamos contigo.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombres y Apellidos</label> <br />
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Escribir"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        /> <br />

                        <label htmlFor="correo">Correo Electrónico</label> <br />
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            placeholder="Escribir"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        /> <br />

                        <label htmlFor="asunto">Asunto</label> <br />
                        <input
                            type="text"
                            id="asunto"
                            name="asunto"
                            placeholder="Escribir"
                            value={asunto}
                            onChange={(e) => setAsunto(e.target.value)}
                        /> <br />

                        <label htmlFor="mensaje">Mensaje</label><br />
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows="5"
                            placeholder="Escribir"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        ></textarea> <br />

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                {/* Sección de Imagen y Contacto Directo */}
                <div className="contact-info-wrapper">
                    <div className="contact-image-area">
                        <img src={contactoImg} alt="Contacto" />
                    </div>
                    <div className="contact-details-area">
                        <h2>WhatsApp:</h2>
                        <p>+593 12 345 7890</p>

                        <h2>Número telefónico:</h2>
                        <p>02 297 4123</p>

                        <h2>Correo de contacto:</h2>
                        <p>contacto@f1style.ec</p>

                        <h2>Horario de atención:</h2>
                        <p>Lunes a viernes: 9h00 - 18h00</p>
                    </div>
                </div>
            </section>

            {/* Sección del Mapa */}
            <section className="map-section">
                <iframe
                    title="Ubicación de Rookie Racing"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.769950899842!2d-78.54868621731968!3d-0.28212856079257714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d598bd733d4c13%3A0xb9c307135c5afa66!2sAv.%20Moran%20Valverde%201707%2C%20Quito!5e0!3m2!1ses!2sec!4v1749693885909!5m2!1ses!2sec"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
};

export default Contacto;