import React, { useEffect, useState } from 'react';
import Heading from "./Heading";
import WhoWeHelpTable from './WhoWeHelpTable';
import "../scss/HomeWhoWeHelp.scss"

const HomeWhoWeHelp = () => {

    const [foundations, setFoundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [locals, setLocals] = useState([]);
    const [activeButtonName, setActiveButtonName] = useState("Fundacjom");
    const [prevActiveButtonClass, setPrevActiveButtonClass] = useState();

    const buttonNames = ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]

    useEffect(() => {
        fetch("http://localhost:3001/foundations").then((response) => {
                var contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json().then(function (json) {
                        setFoundations(json);
                        console.log(json);
                    });
                } else {
                    console.log("Oops, we haven't got JSON!");
                }
            });
        fetch("http://localhost:3001/organizations").then((response) => {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return response.json().then(function (json) {
                    setOrganizations(json);
                    console.log(json);
                });
            } else {
                console.log("Oops, we haven't got JSON!");
            }
        });
        fetch("http://localhost:3001/locals").then((response) => {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return response.json().then(function (json) {
                    setLocals(json);
                    console.log(json);
                });
            } else {
                console.log("Oops, we haven't got JSON!");
            }
        });
    }, [])

    const handleSetName = (e) => {
        setActiveButtonName(e.target.innerText);
        console.log("button name after click", activeButtonName, "button class" , prevActiveButtonClass) 
    }

    useEffect(() => {
        setPrevActiveButtonClass(""); 
        console.log("active now", activeButtonName, "button class", prevActiveButtonClass);
    }, [activeButtonName]);

    return (
        <section className="who-we-help" id="who-we-help">
            <div className="who-we-help-wrapper">
                <Heading text="Komu pomagamy" />
                <nav className="who-we-help-nav">
                    <ul className="who-we-help-nav-list">
                        {buttonNames.map((button, index) => {
                            return <li key={index}
                                className={`who-we-help-nav-element ${(activeButtonName === buttonNames[index]) ? "active" : ""}`}
                            onClick={e => handleSetName(e)}>
                                {button}
                            </li>
                        })}
                    </ul>
                </nav>
                {activeButtonName === "Fundacjom" &&
                <WhoWeHelpTable
                    description="W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
                    array={foundations} /> }
                {activeButtonName === "Organizacjom pozarządowym" &&
                <WhoWeHelpTable
                    description="W naszej bazie znajdziesz organizacje, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
                    array={organizations} />}
                {activeButtonName === "Lokalnym zbiórkom" &&
                <WhoWeHelpTable
                    description="Pomagamy lokalnym zbiórkom. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
                    array={locals} />}
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;