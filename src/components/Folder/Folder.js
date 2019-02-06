import React from 'react';

const Folder = ({ movie }) => {
    const { title, release_date, director, opening_crawl } = movie;
    const release_year = release_date.substring(0, 4);

    let brief_opening_crawl;
    if (opening_crawl.length > 170) {
        brief_opening_crawl = opening_crawl.substring(0, 170) + " ...";
    } else {
        brief_opening_crawl = opening_crawl;
    }
    
    return (
        <div className="fl w-100 w-50-m w-33-l pa4 tj dim pointer">
            {/* <img src="" alt="" /> */}
            <h3>{title} <span className="f7">{release_year}</span></h3>
            <p>Dirigido por {director}</p>
            <p>
                Sinopse:
                <br/>
                <i>{brief_opening_crawl}</i>
            </p>
        </div>
    );
}

export default Folder;