const deleteUSer = async (userId) => {

    'use server';

    const res = await fetch(`http://localhost:5000/user/${userId}`, {
        method: 'DELETE',
    });
    const dada = await res.json();


    return dada;
    
}

export { deleteUSer };