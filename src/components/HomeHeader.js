import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeaderNav from "./HomeHeaderNav";
import Heading from "./Heading";
import "../scss/HomeHeader.scss";

const HomeHeader = () => {
    return (
        <div class="container">
            <div className="header-nav">
                <HomeHeaderNav />
            </div>
            <section className="header-main-section">
                <div className="header-main-section-image"></div>
                <div className="header-main-section-cta">
                    <Heading text={`Zacznij pomagać! \n Oddaj niechciane rzeczy w zaufane ręce`} />
                    <div className="header-main-section-buttons">
                        <Link to={`/logowanie`} className="button">Oddaj rzeczy</Link>
                        <Link to={`/logowanie`} className="button">Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeHeader;