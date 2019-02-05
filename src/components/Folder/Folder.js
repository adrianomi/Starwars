import React from 'react';

const Folder = ({ movie }) => {
    const { title, release_date, director, opening_crawl } = movie;
    const release_year = release_date.substring(0, 4);
    
    return (
        <div>
            {/* <img src="" alt="" /> */}
            <h3>{title}</h3>
            <p>Lançado em {release_year}</p>
            <p>Dirigido por {director}</p>
            <p>
                Sinopse:
                <br/>
                <i>{opening_crawl}</i>
            </p>
        </div>
    );
}

export default Folder;