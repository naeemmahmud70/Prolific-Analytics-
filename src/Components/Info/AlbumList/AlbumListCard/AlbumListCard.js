import React from 'react';

const AlbumListCard = ({ albumList }) => {
    const { title } = albumList;
    return (
        <div className="d-flex m-3 p-2 shadow rounded">
            <div className="px-2 py-2">
                <img className="rounded" src=" https://picsum.photos/id/101/90/90" alt="" />
            </div>
            <div className="py-2">
                <h5>{title}</h5>
            </div>
        </div>
    );
};

export default AlbumListCard;