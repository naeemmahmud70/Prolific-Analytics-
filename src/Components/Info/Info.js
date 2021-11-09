import React from 'react';
import AlbumList from './AlbumList/AlbumList';
import UserList from './UserList/UserList';

const Info = () => {
    return (
        <section className="row p-4 bg-light">
            <div className="col-md-6">
                <UserList></UserList>
            </div>
            <div className="col-md-6">
                <AlbumList></AlbumList>
            </div>
        </section>
    );
};

export default Info;