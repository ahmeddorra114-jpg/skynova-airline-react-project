import Hero from '../components/Hero.jsx';

function Home() {
  return (
    <main>
      <Hero />
      <section className="container section-card">
        <h2>Why SkyNova?</h2>
        <div className="row mt-3">
          <div className="col-md-4"><div className="feature-box">Fast booking experience</div></div>
          <div className="col-md-4"><div className="feature-box">Reusable React components</div></div>
          <div className="col-md-4"><div className="feature-box">Clean responsive design</div></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
