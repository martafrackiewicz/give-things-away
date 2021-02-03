import React from 'react';
import {Link} from 'react-router-dom';
import { Link as NavLink, animateScroll as scroll } from "react-scroll";
import "../scss/HomeHeaderNav.scss";

const HeaderNav = () => {
    return (
        <>
            <div className="header-buttons">
                <Link to={`/logowanie`} className="button">Zaloguj</Link>
                <Link to={`/rejestracja`} className="button">Załóż konto</Link>
            </div>
            <nav className="header-links">
                <ul className="header-links-list">
                    <li className="nav-link"><NavLink
                        activeClass="active"
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Start</NavLink></li>
                    <li className="nav-link"><NavLink
                        activeClass="active"
                        to="simple-steps"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >O co chodzi?</NavLink></li>
                    <li className="nav-link"><NavLink
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >O nas</NavLink></li>
                    <li className="nav-link"><NavLink
                        activeClass="active"
                        to="who-we-help"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Fundacja i organizacje</NavLink></li>
                    <li className="nav-link"><NavLink
                        activeClass="active"
                        to="contact-form"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Kontakt</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderNav;