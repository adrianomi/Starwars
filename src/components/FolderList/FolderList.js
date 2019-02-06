import React from 'react';
import Folder from '../Folder/Folder';

const FolderList = ({ movies }) => {
    return (
        <div className="pa2">
            {
                movies.map(movie => {
                    return (
                        <Folder movie={movie} />
                    );
                })
            }
        </div>
    );
}

export default FolderList;