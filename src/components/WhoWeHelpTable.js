import React, { useState } from 'react';
import Pagination from "../components/Pagination"

const WhoWeHelpTable = ({description, array}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(3);

    //Get current posts
    const indexOfLastPost = currentPage * rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - rowsPerPage;
    const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);
    
    //Change current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <p className="who-we-help-maintext">{description}</p>
            <div className="who-we-help-list-wrapper">
                <ul className="who-we-help-list">
                    {currentPosts.map((element, index) => {
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
                </ul>
            <Pagination
                rowsPerPage={rowsPerPage}
                totalPosts={array.length}
                paginate={paginate} />
            </div>
        </>
    )
}

export default WhoWeHelpTable;