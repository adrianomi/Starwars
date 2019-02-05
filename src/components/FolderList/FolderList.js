import React from 'react';
import Folder from '../Folder/Folder';

const FolderList = ({ movies }) => {
    return (
        <div>
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