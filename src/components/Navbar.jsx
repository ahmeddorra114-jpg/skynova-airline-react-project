import { NavLink } from 'react-router-dom';

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 shadow">

      <div className="container-fluid">

        {/* Logo + Website Name */}
        <NavLink
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
            alt="SkyNova Logo"
            width="40"
            height="40"
            className="me-2"
          />

          SkyNova

        </NavLink>

        {/* Navigation Links */}
        <div className="navbar-nav gap-2">

          <NavLink className="nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/flights">
            Flights
          </NavLink>

          <NavLink className="nav-link" to="/booking">
            Booking
          </NavLink>

          <NavLink className="nav-link" to="/passengers">
            Passengers API
          </NavLink>

          <NavLink className="nav-link" to="/about">
            About
          </NavLink>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;
