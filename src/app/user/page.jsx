import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../components/UserTable';
import { createUser, deleteUSer } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';


const UserPage = async () => {
    const users = await getUsers();
    return (
        <div>

            <div className='flex items-center justify-between p-5 mb-4'>
            <h1>Users {users.length}</h1>
            <AddUserModal createAction={createUser} />
            </div>

            <UserTable users={users} deleteUserAction = {deleteUSer} />
        </div>
    );
};

export default UserPage;