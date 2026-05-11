function About() {
  return (
    <main className="container my-4 section-card">
      <h1>About the Project</h1>
      <p>
        SkyNova Airline Booking is a React web application designed to demonstrate reusable components,
        routing, forms, event handling, hooks, Bootstrap, styled-components, props, list rendering,
        API integration and Context API.
      </p>
      <ul>
        <li>Home page with internal styling.</li>
        <li>Flights page with reusable cards and mapping.</li>
        <li>Booking page with form validation and Context API.</li>
        <li>Passengers page with API integration using useEffect.</li>
      </ul>
    </main>
  );
}

export default About;
