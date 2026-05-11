import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <NavLink className="navbar-brand fw-bold" to="/">SkyNova</NavLink>
      <div className="navbar-nav gap-2">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/flights">Flights</NavLink>
        <NavLink className="nav-link" to="/booking">Booking</NavLink>
        <NavLink className="nav-link" to="/passengers">Passengers API</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
