import { useState } from 'react';

function UserForm({ onCreate }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese su nombre"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Ingrese un email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button>Guardar</button>
        </form>
    )
}

export default UserForm