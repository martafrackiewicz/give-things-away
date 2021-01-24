import React from 'react';
import "../scss/HomeThreeColumns.scss";

const HomeThreeColumns = () => {
    return <div className="statistics-section">
        <div className="statistics">
            <div className="statistics-element">
                <p className="statistics-number">10</p>
                <p className="statistics-title">Oddanych worków</p>
                <p className="statistics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="statistics-element">
                <p className="statistics-number">5</p>
                <p className="statistics-title">Wspartych organizacji</p>
                <p className="statistics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="statistics-element">
                <p className="statistics-number">7</p>
                <p className="statistics-title">Zorganizowanych zbiórek</p>
                <p className="statistics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
        </div>
    </div>
}

export default HomeThreeColumns;