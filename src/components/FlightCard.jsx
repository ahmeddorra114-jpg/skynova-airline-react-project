import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext.jsx';

const StyledCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 22px;
  background: white;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.07);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

function FlightCard({ flight }) {
  const navigate = useNavigate();
  const { setSelectedFlight } = useBooking();

  const handleBooking = () => {
    setSelectedFlight(flight);
    navigate('/booking');
  };

  return (
    <StyledCard>
      <h4>{flight.from} → {flight.to}</h4>
      <p className="text-muted mb-1">{flight.airline}</p>
      <p><strong>Departure:</strong> {flight.time}</p>
      <p><strong>Price:</strong> ${flight.price}</p>
      <button className="btn btn-primary w-100" onClick={handleBooking}>Select Flight</button>
    </StyledCard>
  );
}

export default FlightCard;
