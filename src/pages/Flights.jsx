import { useState } from 'react';
import FlightCard from '../components/FlightCard.jsx';
import { flights } from '../data/flights.js';

function Flights() {

  const [search, setSearch] = useState('');

  const filteredFlights = flights.filter((flight) =>
    flight.to.toLowerCase().includes(search.toLowerCase()) ||
    flight.from.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container my-5">

      {/* Header Section */}
      <section className="text-center mb-5">

        <h1 className="display-4 fw-bold">
          Available Flights
        </h1>

        <p className="lead mt-3">
          Explore our available domestic and international flights with
          comfortable travel experience and affordable prices.
        </p>

      </section>

      {/* Search Section */}
      <section className="section-card p-4 shadow rounded mb-5">

        <h3 className="mb-3">
          Search Flights
        </h3>

        <input
          className="form-control form-control-lg"
          placeholder="Search by departure or destination city..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <p className="mt-3 text-muted">
          Search for flights by entering the departure or destination city name.
        </p>

      </section>

      {/* Flight Statistics */}
      <section className="row text-center mb-5">

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 p-4">

            <h2>{flights.length}+</h2>

            <p>
              Available Flights
            </p>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 p-4">

            <h2>24/7</h2>

            <p>
              Customer Support
            </p>

          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 p-4">

            <h2>100%</h2>

            <p>
              Responsive Booking Experience
            </p>

          </div>
        </div>

      </section>

      {/* Flights Grid */}
      <section>

        <h2 className="mb-4">
          Flight List
        </h2>

        <div className="row g-4">

          {filteredFlights.length > 0 ? (

            filteredFlights.map((flight) => (

              <div className="col-md-6 col-lg-3" key={flight.id}>
                <FlightCard flight={flight} />
              </div>

            ))

          ) : (

            <div className="col-12">
              <div className="alert alert-warning text-center">

                No flights found for your search.

              </div>
            </div>

          )}

        </div>

      </section>

      {/* Extra Information */}
      <section className="mt-5 section-card p-5 shadow rounded">

        <h2 className="mb-4 text-center">
          Why Choose SkyNova Airlines?
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="text-center">

              <h4>Comfortable Travel</h4>

              <p>
                Enjoy modern aircrafts, comfortable seats, and premium travel services.
              </p>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="text-center">

              <h4>Affordable Prices</h4>

              <p>
                We provide competitive flight prices and special seasonal offers.
              </p>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="text-center">

              <h4>Secure Booking</h4>

              <p>
                Your booking information is handled safely using modern web technologies.
              </p>

            </div>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5 rounded">

        <p className="mb-0">
          © 2026 SkyNova Airlines | Flight Booking System
        </p>

      </footer>

    </main>
  );
}

export default Flights;
