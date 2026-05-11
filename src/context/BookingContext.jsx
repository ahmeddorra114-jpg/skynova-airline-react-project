import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passenger, setPassenger] = useState({ name: '', email: '', seat: 'Economy' });
  const [extras, setExtras] = useState([]);

  const toggleExtra = (extra) => {
    setExtras((current) =>
      current.includes(extra) ? current.filter((item) => item !== extra) : [...current, extra]
    );
  };

  const clearBooking = () => {
    setSelectedFlight(null);
    setPassenger({ name: '', email: '', seat: 'Economy' });
    setExtras([]);
  };

  return (
    <BookingContext.Provider
      value={{ selectedFlight, setSelectedFlight, passenger, setPassenger, extras, toggleExtra, clearBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
