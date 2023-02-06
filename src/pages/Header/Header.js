import './Header.css'
import logoKasa from '../../assets/logo_casa.svg'
import {Link} from "react-router-dom";

// function Header() {
// 	return (
// 		<header className="header_container">

// 					<div className='container-logo'>
// 					<Link to="/">
// 						<img src={logoKasa} alt='logo de kasa' className="logo"/>
// 					</Link>
// 					</div>
					

// 					<div className='container-ul'>
// 					<ul className='HeaderMenu'>
// 						<Link className='homepage' to="/"><span>Accueil</span></Link>
// 						<Link className='about' to="/about"><span>A Propos</span></Link>
// 					</ul>
// 					</div>
					




// 		</header>
// 	)
// }

// export default Header;
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
	