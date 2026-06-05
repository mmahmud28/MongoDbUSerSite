import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../components/UserTable';


const UserPage = async () => {
    const users = await getUsers();
    return (
        <div>
            <h1>Users {users.length}</h1>
            <UserTable users={users}/>
        </div>
    );
};

export default UserPage;