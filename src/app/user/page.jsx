import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../components/UserTable';
import { deleteUSer } from '../lib/actions';


const UserPage = async () => {
    const users = await getUsers();
    return (
        <div>
            <h1>Users {users.length}</h1>
            <UserTable users={users} deleteUserAction = {deleteUSer} />
        </div>
    );
};

export default UserPage;