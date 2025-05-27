import News from "./components/News";
import "./assets/css/App.css";
import Avatar from "./assets/images/Avatar.svg";
import Bookmark from "./assets/images/Bookmark.svg";

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
          <div className="nav-right">
            <img src={Bookmark} alt="Закладки" className="bookmark" />
            <img src={Avatar} alt="Аватар" className="avatar" />
          </div>
        </header>

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
