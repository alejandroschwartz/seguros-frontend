import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.scss';

const Header = () => {

    const [ nav, setNav ] = useState(false);

    return (
        <header className="Header" >
            <div className="Header__container" >
                <h1 className="Header__title" >
                    SEGUROS
                </h1>
                <button className="Header__icon" onClick={() => setNav(!nav)} >
                    {nav === true 
                        ? <i className='fas fa-times'></i>
                        : <i className='fas fa-bars'></i>
                    }
                </button>
                <ul className={nav === false ? "Header__menu" : "Header__menu--active"} onClick={() => setNav(!nav)} >               
                    <Link to="/" className="Header__menu--list" >
                        Inicio
                    </Link>
                    <Link to="/cotizar" className="Header__menu--list" >
                        Productos
                    </Link>
                    <Link to="/" className="Header__menu--list" >
                        Nuestra compañia
                    </Link>
                    <Link to="/" className="Header__menu--list" >
                        Contactos
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;