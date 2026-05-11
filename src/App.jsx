import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Flights from './pages/Flights.jsx';
import Booking from './pages/Booking.jsx';
import Passengers from './pages/Passengers.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
