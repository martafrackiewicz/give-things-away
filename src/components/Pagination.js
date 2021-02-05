import React, {useState, useEffect} from 'react';
import "../scss/Pagination.scss"

const Pagination = ({rowsPerPage, totalPosts, paginate}) => {
    const [activeButton, setActiveButton] = useState(1);

    const pageNumbers = [];


    for(let i = 1; i <= Math.ceil(totalPosts / rowsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const handleButton = (number) => {
        paginate(number);
        setActiveButton(number);
    }

    return pageNumbers.length === 1 ? null : 
        <nav className="pagination">
            {pageNumbers.map((number) => {
                return <li key={number} className="pagination-item">
                    <button onClick={() => handleButton(number)}
                        className={`pagination-button ${(activeButton === number) ? "active" : ""}`}>
                        {number}
                    </button>
                </li>
            })}
        </nav>;
}

export default Pagination;