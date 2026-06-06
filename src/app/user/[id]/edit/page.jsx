import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';

const EditPage = async ({ params }) => {

    const { id } = await params;
    const user_data = await getUserById(id);

    const updateUserRapper = async  (formData) => {
        'use server';

        console.log(formData);
        return updateUser(id, formData);        
        
        
    }

    return (
        <div>
            <h1>Edit User: {user_data.username}</h1>

            <div className="w-1/2 mx-0-auto">
                
                <form action={updateUserRapper} className="flex flex-col gap-4">
                    <TextField defaultValue={user_data?.username} className="w-full" name="username" type="text" variant="secondary">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField defaultValue={user_data?.email} className="w-full" name="email" type="email" variant="secondary">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField defaultValue={user_data?.role} className="w-full" name="role" type="text" variant="secondary">
                        <Label>Role</Label>
                        <Input placeholder="Enter your role" />
                    </TextField>

                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type='submit' slot="close">
                        Update User
                    </Button>

                </form>
           

        </div>
        </div >
    );
};

export default EditPage;