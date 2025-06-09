import UserItem from './UserItem';

function UserList({ users, onDelete }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Usuarios</h2>
      {users.length === 0 ? (<p className="text-gray-500">No hay usuarios registrados.</p>) : (
        <ul className="space-y-2">
            {users.map(user => (
              <UserItem key={user.id} user={user} onDelete={onDelete} />
            ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;