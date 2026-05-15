function About() {
  return (
    <main className="container my-5">

      {/* Header */}
      <section className="section-card p-5 shadow rounded">

        <h1 className="mb-4 text-center">
          About SkyNova Airlines
        </h1>

        <p className="lead text-center">
          SkyNova Airline Booking is a modern React web application created to
          demonstrate core React concepts, responsive UI design, reusable components,
          and API integration techniques.
        </p>

      </section>

      {/* Project Overview */}
      <section className="row mt-5 align-items-center">

        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
            alt="Airline"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">

          <h2>Project Overview</h2>

          <p className="mt-3">
            This project was developed using React.js and Bootstrap to create
            a responsive airline booking platform. The application allows users
            to browse available flights, select a flight, enter booking details,
            and view booking summaries.
          </p>

          <p>
            The project focuses on clean code structure, reusable React components,
            routing, hooks, Context API, and responsive design principles.
          </p>

        </div>

      </section>

      {/* Technologies */}
      <section className="mt-5">

        <h2 className="text-center mb-5">
          Technologies Used
        </h2>

        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h4>React.js</h4>
              <p>
                Used for building reusable UI components and managing the application.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h4>Bootstrap</h4>
              <p>
                Used for responsive layouts, grids, cards, and styling.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h4>Styled Components</h4>
              <p>
                Used for creating custom styled reusable components.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h4>React Router</h4>
              <p>
                Used to navigate between pages without reloading the application.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="mt-5 section-card p-5 shadow rounded">

        <h2 className="mb-4">
          Main Features
        </h2>

        <ul className="list-group">

          <li className="list-group-item">
            Home page with internal styling and responsive design.
          </li>

          <li className="list-group-item">
            Flights page using reusable FlightCard components and mapping.
          </li>

          <li className="list-group-item">
            Booking page with forms, validation, event handling, and Context API.
          </li>

          <li className="list-group-item">
            Passengers page with API integration using useEffect and fetch.
          </li>

          <li className="list-group-item">
            Global state management using Context API.
          </li>

          <li className="list-group-item">
            Bootstrap responsive layout and Styled Components integration.
          </li>

        </ul>

      </section>

      {/* Mission and Vision */}
      <section className="row mt-5">

        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 p-4">

            <h3>Our Mission</h3>

            <p className="mt-3">
              To provide a smooth, modern, and responsive airline booking experience
              while demonstrating professional React development practices.
            </p>

          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow h-100 p-4">

            <h3>Our Vision</h3>

            <p className="mt-3">
              To create scalable and user-friendly web applications using modern
              frontend technologies and clean UI/UX principles.
            </p>

          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5 rounded">
        <p className="mb-0">
          © 2026 SkyNova Airlines Project | Developed with React.js
        </p>
      </footer>

    </main>
  );
}

export default About;
