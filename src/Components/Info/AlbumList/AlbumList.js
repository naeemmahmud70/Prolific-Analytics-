import React, { useEffect, useState } from 'react';
import AlbumListCard from './AlbumListCard/AlbumListCard';

const AlbumList = () => {
    const [albumLists, setAlbumLists] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => setAlbumLists(data))
    }, []);
    
    return (
        <div>
            <h1>Album List</h1>
            {
                albumLists.map(albumList => <AlbumListCard albumList={albumList}></AlbumListCard>)
            }
        </div>
    );
};

export default AlbumList;