import LogoWhite from '../../assets/footer.png'
import './Footer.css'



function Footer() {

    return (
        <footer className='footer'>
            <img className='footer_logo' src={LogoWhite} alt="logo"/>
            <div className='footer_info'>© 2020 Kasa. All rights reserved </div>
        </footer>
    )
}
export default Footer