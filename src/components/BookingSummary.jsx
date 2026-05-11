import { useBooking } from '../context/BookingContext.jsx';

function BookingSummary() {
  const { selectedFlight, passenger, extras } = useBooking();
  const extrasCost = extras.length * 25;
  const total = selectedFlight ? selectedFlight.price + extrasCost : 0;

  if (!selectedFlight) {
    return <div className="alert alert-warning">No flight selected yet. Please choose a flight first.</div>;
  }

  return (
    <div className="card p-3 shadow-sm">
      <h3>Booking Summary</h3>
      <p><strong>Flight:</strong> {selectedFlight.from} → {selectedFlight.to}</p>
      <p><strong>Passenger:</strong> {passenger.name || 'Not entered yet'}</p>
      <p><strong>Email:</strong> {passenger.email || 'Not entered yet'}</p>
      <p><strong>Seat:</strong> {passenger.seat}</p>
      <p><strong>Extras:</strong> {extras.length ? extras.join(', ') : 'No extras'}</p>
      <h4>Total: ${total}</h4>
    </div>
  );
}

export default BookingSummary;
