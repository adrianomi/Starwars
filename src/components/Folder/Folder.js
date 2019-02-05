import React from 'react';

const Folder = ({ film }) => {
    const { title, release_year, director, opening_crawl } = film;
    return (
        <div className="">
            {/* <img src="" alt="" /> */}
            <h3>{title}</h3>
            <p>Lançado em {release_year}</p>
            <p>Dirigido por {director}</p>
            <p>
                Sinopse:
                <br/>
                {opening_crawl}
            </p>
        </div>
    );
}

export default Folder;