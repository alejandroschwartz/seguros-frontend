import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="Footer__altillo" >
                <div className="Footer__altillo--div" >
                    <h2>SEGUROS</h2>
                    <p><strong>Córdoba</strong></p>
                    <p>Av. Marcelo T. de Alvear 328</p>
                    <p>Tel: (0351) 426-8888</p>
                </div>
                <div className="Footer__altillo--div" >
                    <p>¡Síguenos en las redes!</p>
                    <a href="https://www.facebook.com/carusoseguros.ok">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/caruso.seguros/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <footer className="footer">
                <div className="footer__div">
                    <p className="footer__div--p">Diseño de página: <br />
                        <strong>Alejandro Matías Schwartz</strong> <br />
                        <small>Ciudad de Córdoba, Argentina</small>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;