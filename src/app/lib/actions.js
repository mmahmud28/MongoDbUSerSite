import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



const deleteUSer = async (userId) => {

    'use server';

    const res = await fetch(`http://localhost:5000/user/${userId}`, {
        method: 'DELETE',
    });
    const data = await res.json();

    console.log("Deleted user data:", data);

    if (data.deletedCount>0){
        revalidatePath('/user');
    }
    

    return data;
    
}

export { deleteUSer };


export const createUser = async (formData) => {
    "use server";

    const newUser = Object.fromEntries(formData.entries());

    console.log("New User Data:", newUser);

    const res = await fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });

    if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    console.log("Data Inserted:", data);

    // Optional revalidation
    if (data.insertedId) revalidatePath('/user');

    return data;
};

export const updateUser = async (userId, formData) => {
    "use server";

    const updatedUser = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5000/user/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
    });
    const data = await res.json();
    console.log("Updated User Data:", data);

    if (data.modifiedCount > 0) {
        revalidatePath('/user');
        redirect(`/user`);
    }

    return data;
};