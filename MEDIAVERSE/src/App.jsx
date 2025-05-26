import "./assets/css/App.css";

const App = () => {
  return (
    <div className="scalableContainer">
      <div className="app">
        <header className="app__header">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">Mediaverse</li>
              <li className="nav__item">New Releases</li>
              <li className="nav__item">Popular</li>
              <li className="nav__item">Categories</li>
            </ul>
          </nav>
        </header>

        <main className="app__main">
          {/* Banner Rectangle under header, now scrolling with content */}
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

          <section className="news">
            <div className="news__header">
              <h2 className="section__title">Mediaverse News</h2>
              <button className="news__view-all">View All</button>
            </div>

            <div className="news__content">
              <div className="card news__large" />
              <div className="card news__small" />
              <div className="card news__large" />
              <div className="card news__small" />
            </div>
          </section>

          <section className="callout">
            <p className="callout__text">Looking for something particular?</p>
            <button className="callout__button">View All</button>
          </section>
        </main>

        {/* <footer className="app__footer">
          <div className="footer__links">
            <a href="#">Mediaverse</a>
            <a href="#">New Releases</a>
            <a href="#">Popular</a>
            <a href="#">Categories</a>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default App;
