import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="container my-5 text-center">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link className="btn btn-primary" to="/">Back Home</Link>
    </main>
  );
}

export default NotFound;
