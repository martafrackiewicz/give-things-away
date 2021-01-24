import React from 'react';
import "../scss/Heading.scss"

const Heading = ({text}) => {
    return (
        <div className="heading">
            <div className="heading-text">{text}</div>
            <div className="heading-decoration"></div>
        </div>
    )
}

export default Heading;