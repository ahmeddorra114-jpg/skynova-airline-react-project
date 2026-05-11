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
    <main className="container my-4">
      <h1>Available Flights</h1>
      <input
        className="form-control my-3"
        placeholder="Search by city..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="row g-4">
        {filteredFlights.map((flight) => (
          <div className="col-md-6 col-lg-3" key={flight.id}>
            <FlightCard flight={flight} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Flights;
