import React from 'react';
import { Link } from 'react-router-dom';
import Heading from "./Heading";
import "../scss/HomeSimpleSteps.scss";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const HomeSimpleSteps = () => {
    return (
        <section className="simple-steps">
            <Heading text="Wystarczą 4 proste kroki" />
            <div className="simple-steps-content">
                <div className="simple-steps-wrapper">
                    <div className="simple-steps-content-element">
                        <img className="step-icon" src={icon1} alt="" />
                        <h3 className="step-title">Wybierz rzeczy</h3>
                        <hr className="step-hr"></hr>
                        <p className="step-text">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="simple-steps-content-element">
                        <img className="step-icon" src={icon2} alt="" />
                        <h3 className="step-title">Spakuj je</h3>
                        <hr className="step-hr"></hr>
                        <p className="step-text">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="simple-steps-content-element">
                        <img className="step-icon" src={icon3} alt="" />
                        <h3 className="step-title">Zdecyduj komu chcesz pomóc</h3>
                        <hr className="step-hr"></hr>
                        <p className="step-text">wybierz zaufane miejsce</p>
                    </div>
                    <div className="simple-steps-content-element">
                        <img className="step-icon" src={icon4} alt="" />
                        <h3 className="step-title">Zamów kuriera</h3>
                        <hr className="step-hr"></hr>
                        <p className="step-text">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <Link to={`/logowanie`} className="button">Oddaj rzeczy</Link>
            </div>
        </section>
    )
}

export default HomeSimpleSteps;