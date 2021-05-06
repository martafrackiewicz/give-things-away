import React from 'react';
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import "../scss/Footer.scss";

const Footer = () => {
    return (
        <div className="container footer-container">
            <footer className="footer">
                <small className="footer-copy">Project by Coders Lab</small>
                <div className="footer-social">
                    <a className="link" href="https://www.facebook.com/CodersLabSzkolaIT/"><img src={facebook} alt="facebook icon"></img></a>
                    <a className="link" href="https://www.instagram.com/coders.lab/?hl=pl"><img src={instagram} alt="instagram icon"></img></a>
                </div>
            </footer>
        </div>
        
    )
}

export default Footer;