import React from 'react';
import HomeHeader from './HomeHeader'
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import ContactForm from './ContactForm';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Home;