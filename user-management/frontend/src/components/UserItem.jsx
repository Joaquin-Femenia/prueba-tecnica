function UserItem({ user, onDelete }) {
  return (
    <li className="bg-white p-4 shadow rounded flex justify-between items-center">
      <span className="text-gray-800 font-medium">{user.name}</span>
      <button
        onClick={() => onDelete(user.id)}
        className="text-red-500 hover:text-red-700 font-semibold transition cursor-pointer"
      >
        Eliminar
      </button>
    </li>
  );
}

export default UserItem;
