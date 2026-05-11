import { Link } from 'react-router-dom';

function Hero() {
  const heroStyle = {
    background: 'linear-gradient(120deg, #0d6efd, #6f42c1)',
    color: 'white',
    borderRadius: '24px',
    padding: '70px 30px'
  };

  return (
    <section className="container my-4" style={heroStyle}>
      <h1 className="display-4 fw-bold">Book your next flight with SkyNova</h1>
      <p className="lead">A modern airline booking interface built with React, routing, forms, hooks, Bootstrap and Context API.</p>
      <Link to="/flights" className="btn btn-light btn-lg">Explore Flights</Link>
    </section>
  );
}

export default Hero;
