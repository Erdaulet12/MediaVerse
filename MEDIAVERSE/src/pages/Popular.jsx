import Header from "../components/Header";
import "../assets/css/Popular.css";
import "../assets/css/App.css";
import MenuIcon from "../assets/images/menu.svg";
import FilterIcon from "../assets/images/filter.svg";

const popularItems = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));

const Popular = () => {
  return (
    <div className="scalableContainer">
      <div className="app">
        <Header />
        <main className="app__main">
          <div className="popular-section-header">
            <div className="title-with-icon">
              <img src={MenuIcon} alt="Menu" className="icon" />
              <h2 className="popular-title">Popular</h2>
            </div>
            <div className="filters-with-icon">
              <img src={FilterIcon} alt="Filters" className="icon" />
              <span>Filters</span>
            </div>
          </div>

          <h3 className="popular-subtitle">Most Popular</h3>

          <div className="popular-grid">
            {popularItems.map((item) => (
              <div key={item.id} className="popular-card" />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Popular;
