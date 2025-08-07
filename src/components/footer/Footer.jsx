import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWhatsapp,
    faFacebookF, // Cambiado a faFacebookF para coincidir con el HTML
    faTwitter,
    faInstagram,
    faYoutube,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="contact-info">
                    <h3>ROOKIE RACING</h3>
                    <p>Avenida Morán Valverde, Quito - Pichincha, 1707, Ecuador</p>
                    <p>02 297 4123</p>
                    <p>contacto@f1style.ec</p>
                    <p>Lunes a viernes: 9h00 - 18h00</p>
                    <p>+593 12 345 7890</p>
                </div>
                <div className="social-media">
                    <h3>ENCUÉNTRANOS EN:</h3>
                    <div className="social-icons">
                        <a href="#" className="tiktok-icon"><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="#" className="facebook-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="twitter-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="instagram-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="youtube-icon"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <p>Síguenos en nuestras redes sociales y descubre sorpresas</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2025 Lacronte. Todos los derechos reservados.</p>
            </div>
            {/* Botón de WhatsApp flotante */}
            <a href="https://wa.me/YOURPHONENUMBER" className="whatsapp-button" target="_blank" aria-label="Contact us on WhatsApp" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </footer>
    );
};

export default Footer;