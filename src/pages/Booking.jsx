import { useState } from 'react';
import { useBooking } from '../context/BookingContext.jsx';
import BookingSummary from '../components/BookingSummary.jsx';

function Booking() {
  const { passenger, setPassenger, extras, toggleExtra, clearBooking } = useBooking();
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassenger({ ...passenger, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!passenger.name || !passenger.email) {
      setMessage('Please complete passenger name and email.');
      return;
    }
    setMessage('Booking confirmed successfully!');
  };

  return (
    <main className="container my-4">
      <h1>Complete Booking</h1>
      <div className="row g-4">
        <div className="col-lg-6">
          <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
            <label className="form-label">Passenger Name</label>
            <input className="form-control mb-3" name="name" value={passenger.name} onChange={handleChange} />

            <label className="form-label">Email</label>
            <input className="form-control mb-3" name="email" type="email" value={passenger.email} onChange={handleChange} />

            <label className="form-label">Seat Type</label>
            <select className="form-select mb-3" name="seat" value={passenger.seat} onChange={handleChange}>
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>

            <p className="fw-bold">Extras</p>
            {['Meal', 'Extra Luggage', 'Window Seat'].map((extra) => (
              <label className="d-block mb-2" key={extra}>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={extras.includes(extra)}
                  onChange={() => toggleExtra(extra)}
                />
                {extra}
              </label>
            ))}

            <button className="btn btn-success mt-3" type="submit">Confirm Booking</button>
            <button className="btn btn-outline-danger mt-2" type="button" onClick={clearBooking}>Clear Booking</button>
            {message && <div className="alert alert-info mt-3">{message}</div>}
          </form>
        </div>
        <div className="col-lg-6">
          <BookingSummary />
        </div>
      </div>
    </main>
  );
}

export default Booking;
