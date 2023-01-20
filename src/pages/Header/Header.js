import React from "react";
import './Header.css'
import logoKasa from '../../assets/logo_casa.svg'
import {Link} from "react-router-dom";

function Header() {
	return (
		<header className="header_container">
			<nav className="header">
				<img src={logoKasa} alt='logo kasa' className="logo"/>

				<li className="homepage">
					<Link to="/">Accueil</Link>
				</li>
				<li className="about">
					<Link to="/about">A propos</Link>
				</li>
			</nav>
		</header>
	)
}

export default Header;