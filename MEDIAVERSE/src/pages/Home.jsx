import News from "../components/News";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <main className="app__main">
      <div className="banner-rect" />

      <section className="grid-section">
        <h2 className="section__title">Top Picks for You</h2>
        <div className="grid grid--6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="card" />
          ))}
        </div>
      </section>

      <section className="grid-section">
        <h2 className="section__title">Most Popular</h2>
        <div className="grid grid--6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="card" />
          ))}
        </div>
      </section>

      <News />
    </main>
  );
};

export default Home;
