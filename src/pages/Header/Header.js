import './Header.css'
import logoKasa from '../../assets/logo_casa.svg'
import {Link} from "react-router-dom";

function Header() {
	return (
		<header className="header_container">


					<Link to="/">
						<img src={logoKasa} alt='logo de kasa' className="logo"/>
					</Link>


					<ul className='HeaderMenu'>
						<Link to="/"><span>Accueil</span></Link>
						<Link to="/about"><span>A Propos</span></Link>
					</ul>




		</header>
	)
}

export default Header;