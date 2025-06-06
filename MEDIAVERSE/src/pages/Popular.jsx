import "../assets/css/Popular.css";
import "../assets/css/App.css";
import MenuIcon from "../assets/images/menu.svg";
import FilterIcon from "../assets/images/filter.svg";

const popularItems = Array.from({ length: 40 }, (_, i) => ({ id: i + 1 }));

const Popular = () => {
  return (
    <div className="scalableContainer">
      <div className="app">
        <main className="app__main">
          <div className="popular-container">
            <div className="popular-grid">
              <div className="popular-section-header">
                <h2 className="popular-title">Popular</h2>
                <div className="filters-with-icon">
                  <img src={MenuIcon} alt="Menu" className="icon" />
                  <span>Popular</span>
                  <img src={FilterIcon} alt="Filters" className="icon" />
                  <span>Filters</span>
                </div>
              </div>
              <h3 className="popular-subtitle">Most Popular</h3>
              <div className="cards-wrapper">
                {popularItems.map((item) => (
                  <div key={item.id} className="popular-card" />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Popular;
