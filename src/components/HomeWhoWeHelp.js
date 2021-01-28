import React, { useEffect, useState } from 'react';
import Heading from "./Heading";
import "../scss/HomeWhoWeHelp.scss"

const HomeWhoWeHelp = () => {

    const [foundations, setFoundations] = useState([]);

    useEffect(() => {
        setFoundations([
            {
                name: "Fundacja \"Dbam o zdrowie\"",
            description: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
            },
            {
                name: "Fundacja \"Dla dzieci\"",
                description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
                things: "ubrania, meble, zabawki"
            },
            {
                name: "Fundacja \"Bez domu\"",
                description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
                things: "ubrania, jedzenie, ciepłe koce"
            }
        ])
    }, [])

    return (
        <section className="who-we-help">
            <div className="who-we-help-wrapper">
                <Heading text="Komu pomagamy" />
                <nav className="who-we-help-nav">
                    <ul className="who-we-help-nav-list">
                        <li className="who-we-help-nav-element">Fundacjom</li>
                        <li className="who-we-help-nav-element">Organizacjom pozarządowym</li>
                        <li className="who-we-help-nav-element">Lokalnym zbiórkom</li>
                    </ul>
                </nav>
                <p className="who-we-help-maintext">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="who-we-help-list-wrapper">
                    {foundations.map((foundation, index) => {
                        return <li key={index}className="who-we-help-list-element">
                            <div className="element-wrapper">
                                <div className="element-main">
                                    <h4 className="element-title">{foundation.name}</h4>
                                    <p className="element-text">{foundation.description}</p>
                                </div>
                                <div className="element-things">
                                    <p className="element-things-details">{foundation.things}</p>
                                </div>
                            </div>
                        </li>
                    })}
                </div>
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;