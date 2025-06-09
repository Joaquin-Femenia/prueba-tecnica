const API_BASE_URL = 'http://127.0.0.1:3000/user';

export const getUsers = async () => {
    const response = await fetch(API_BASE_URL, {
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
    const response = await fetch(API_BASE_URL, {
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
    const response = await fetch(API_BASE_URL + '/' + userId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Error deleting user');
    }
    return;
}