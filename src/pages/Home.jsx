import Hero from '../components/Hero.jsx';

function Home() {
  return (
    <main>

      <Hero />

      {/* Why Choose Us */}
      <section className="container section-card py-5">
        <h2 className="text-center mb-4">Why SkyNova?</h2>

        <div className="row mt-3">

          <div className="col-md-4 mb-4">
            <div className="feature-box p-4 shadow rounded text-center h-100">
              <h4>Fast Booking</h4>
              <p>
                Book flights quickly with our smooth and user-friendly booking system.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-box p-4 shadow rounded text-center h-100">
              <h4>Modern React Design</h4>
              <p>
                Built using reusable React components and responsive layouts.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="feature-box p-4 shadow rounded text-center h-100">
              <h4>24/7 Support</h4>
              <p>
                Our support team is available anytime to help passengers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
              alt="Airline"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2>About SkyNova Airlines</h2>

            <p className="mt-3">
              SkyNova Airlines is a modern airline booking platform developed using React.js.
              The project demonstrates routing, reusable components, API integration,
              Context API, hooks, and responsive design techniques.
            </p>

            <p>
              Our goal is to provide passengers with a simple and comfortable booking experience.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="bg-light py-5">
        <div className="container">

          <h2 className="text-center mb-5">Our Services</h2>

          <div className="row">

            <div className="col-md-3 mb-4">
              <div className="card shadow h-100 text-center p-3">
                <h5>Flight Booking</h5>
                <p>Easy online booking system for local and international flights.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow h-100 text-center p-3">
                <h5>Online Check-In</h5>
                <p>Passengers can check in online before departure.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow h-100 text-center p-3">
                <h5>Baggage Services</h5>
                <p>Extra baggage and special luggage support for travelers.</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow h-100 text-center p-3">
                <h5>Customer Support</h5>
                <p>24/7 assistance for reservations and customer inquiries.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-5">

        <h2 className="text-center mb-5">What Our Passengers Say</h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <p>
                "Amazing booking experience and very easy to use!"
              </p>
              <h6 className="mt-3">- Ahmed</h6>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <p>
                "Responsive design and smooth navigation between pages."
              </p>
              <h6 className="mt-3">- Sarah</h6>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <p>
                "The project demonstrates strong React concepts and clean UI."
              </p>
              <h6 className="mt-3">- Mohamed</h6>
            </div>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">
          © 2026 SkyNova Airlines. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}

export default Home;
