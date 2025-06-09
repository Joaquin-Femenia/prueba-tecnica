import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { getUsers, createUser, deleteUser } from './api/UserApi';

function App(){
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      await createUser(userData);
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserForm onCreate={handleCreateUser} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
}

export default App;
