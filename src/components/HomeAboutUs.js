import React from 'react';
import Heading from "./Heading";
import signature from "../assets/Signature.svg";
import "../scss/HomeAboutUs.scss"

const HomeAboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us-content">
                <Heading text="O nas"/>
                <p className="about-us-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="about-us-signature" src={signature} alt="" />
            </div>
            <div className="about-us-bg"></div>
        </section>
    )
}

export default HomeAboutUs;