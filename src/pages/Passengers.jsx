import { useEffect, useState } from 'react';

function Passengers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        setUsers(data.slice(0, 6));
      } catch (apiError) {
        setError(apiError.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <main className="container my-4">
      <h1>Passengers API</h1>
      <p>This page uses useEffect to fetch and display API data.</p>
      {loading && <div className="alert alert-primary">Loading passengers...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-4" key={user.id}>
            <div className="card p-3 h-100">
              <h5>{user.name}</h5>
              <p>{user.email}</p>
              <small>{user.company.name}</small>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Passengers;
