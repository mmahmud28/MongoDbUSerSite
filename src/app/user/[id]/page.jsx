import { getUserById } from "@/app/lib/data";

const UserDetailes = async ({params}) => {
    
    
    const {id} = await params;
    
    const user_data = await getUserById(id);
    
    
    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {user_data.username}</p>
            <p>Email: {user_data.email}</p>
            <p>Role: {user_data.role}</p>

        </div>
    );
};

export default UserDetailes;