import { revalidatePath } from "next/cache";

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