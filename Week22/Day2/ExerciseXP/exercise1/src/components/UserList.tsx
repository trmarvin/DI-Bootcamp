import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }

        const data: User[] = await res.json();
        setUsers(data);
      } catch (err: unknown) {
        // Abort isn't a "real" error we want to show
        if (err instanceof DOMException && err.name === 'AbortError') return;

        const message =
          err instanceof Error ? err.message : 'Unknown error occurred';
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error) return <p style={{ color: 'crimson' }}>Error: {error}</p>;

  return (
    <section style={{ padding: 12 }}>
      <h2>Users</h2>

      <ul style={{ paddingLeft: 18 }}>
        {users.map((u) => (
          <li key={u.id} style={{ marginBottom: 10 }}>
            <strong>{u.name}</strong> (@{u.username})<br />
            <span>{u.email}</span><br />
            <span>
              {u.address.city} • {u.company.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;