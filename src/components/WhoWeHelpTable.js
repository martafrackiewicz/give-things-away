import React, { useState } from 'react';

const WhoWeHelpTable = ({description, array}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    //Pagination
    //Get current posts
    const indexOfLastPost = currentPage * rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - rowsPerPage;
    const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <p className="who-we-help-maintext">{description}</p>
            <div className="who-we-help-list-wrapper">
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
            </div>
        </>
    )
}

export default WhoWeHelpTable;




