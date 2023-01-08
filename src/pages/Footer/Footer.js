import React from "react";
import "./Footer.css"
import imgFooter from '../../assets/footer.png'
function Footer(){
    return(
        <footer>
            <img src={imgFooter} alt="logo"/>
            <p>&copy; 2020 Kasa, All rights reserved</p>
        </footer>
    )
}
export default Footer;