export const getUsers = async () => {
    const response = await fetch('http://localhost:5000/user');
    const data = await response.json();
    return data;    
}

export const getUserById = async (user_id) => {
    const response = await fetch(`http://localhost:5000/user/${user_id}`);
    const data = await response.json();
    console.log(data);
    
    return data;    
}