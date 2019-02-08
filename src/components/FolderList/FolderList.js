import React from 'react';
import Folder from '../Folder/Folder';
import './FolderList.css';

const FolderList = ({ movies }) => {
    return (
        <div className="pa2 mw8 folder-list">
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