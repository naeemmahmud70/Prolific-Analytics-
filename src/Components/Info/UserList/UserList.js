import React, { useEffect, useState } from 'react';
import UserListCard from './UserListCard/UserListCard';

const UserList = () => {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsersList(data))
    }, []);

    return (
        <div>
            <h1>User List.</h1>
            {
                usersList.map(userList => <UserListCard userList={userList}></UserListCard>)
            }
        </div>
    );
};

export default UserList;