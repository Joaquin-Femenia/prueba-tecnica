            
function UserItem({ user, onDelete }) {
  return (
            <li key={user.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
              <span>{user.name}</span>
              <button
                onClick={() => onDelete(user.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Eliminar
              </button>
            </li>
    );
}

export default UserItem;