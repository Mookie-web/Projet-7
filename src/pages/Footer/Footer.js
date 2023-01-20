import LogoWhite from '../../assets/LOGO.svg'
import './Footer.css'
function Footer() {

    return (
        <footer className='footer'>
            <div className="footerDiv">
                <img className='footer_logo' src={LogoWhite} alt="logo"/>
                <p>© 2020 Kasa. All rights reserved </p>
            </div>
        </footer>
    )
}
export default Footer