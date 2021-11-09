import React from 'react';

const UserListCard = ({ userList }) => {

    const { name, phone } = userList;

    return (
        <div className="d-flex m-3 p-2 shadow rounded-3">
            <div className="px-2">
                <img  className="rounded" src="https://picsum.photos/id/1005/90/90" alt="" />
            </div>
            <div>
                <h6>{name}</h6>
                <p>{phone}</p>
                <p>{userList.address.city}</p>
            </div>
        </div>
    );
};

export default UserListCard;