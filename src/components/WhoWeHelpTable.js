import React from 'react';

const WhoWeHelpTable = ({description, array}) => {
    return (
        <>
            <p className="who-we-help-maintext">{description}</p>
            <div className="who-we-help-list-wrapper">
                {array.map((element, index) => {
                    return <li key={index} className="who-we-help-list-element">
                        <div className="element-wrapper">
                            <div className="element-main">
                            <h4 className="element-title">{element.name}</h4>
                            <p className="element-text">{element.description}</p>
                            </div>
                            <div className="element-things">
                            <p className="element-things-details">{element.things}</p>
                            </div>
                        </div>
                    </li>
                })}
            </div>
        </>
    )
}

export default WhoWeHelpTable;




