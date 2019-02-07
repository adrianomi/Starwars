import React from 'react';
import Folder from '../Folder/Folder';

const FolderList = ({ movies }) => {
    return (
        <div className="pa2">
            {
                movies.map(movie => {
                    return (
                        <Folder movie={movie} key={movie['episode_id']} />
                    );
                })
            }
        </div>
    );
}

export default FolderList;