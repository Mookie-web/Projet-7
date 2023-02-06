import './Header.css'
import logoKasa from '../../assets/logo_casa.svg'
import {Link} from "react-router-dom";

function Header() {
  
	return (
	  <header className='header_container'>
		<Link to="/">
		  <img className='logo' src={logoKasa} alt="logo kasa"/>
		</Link>
		<nav className='navbar'>
		  <div className="navli">
				<Link className="nav" to="/">Accueil</Link>
			  </div>
		  <div className="navli">
				<Link className="nav" to="/about">À propos</Link>
			  </div>    
		</nav>
	  </header>
	)
	}
	export default Header
	