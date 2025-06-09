export const getUsers = async () => {
    const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Error fetching users');
    }
    return response.json();
}

export const createUser = async (userData) => {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Error creating user');
    }
    return response.json();
}

export const deleteUser = async (userId) => {
    const response = await fetch(`/api/user/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Error deleting user');
    }
    return response.json();
}