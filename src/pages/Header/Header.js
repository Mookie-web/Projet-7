import React from "react";
import './Header.css'
import logoKasa from '../../assets/logo_casa.svg'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logoKasa} alt='logo kasa'/>
                </Link>
                <ul>
                    <Link to="/"><span>Accueil</span> </Link>
                    <Link to="/about"><span>A propos</span> </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;