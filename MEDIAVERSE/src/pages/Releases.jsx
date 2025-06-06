import "../assets/css/Releases.css";
import MenuIcon from "../assets/images/menu.svg";
import FilterIcon from "../assets/images/filter.svg";

const last24Items = Array.from({ length: 9 }, (_, i) => ({ id: i + 1 }));
const lastWeekItems = Array.from({ length: 18 }, (_, i) => ({ id: i + 1 }));

const Releases = () => {
  return (
    <div className="scalableContainer">
      <div className="app">
        <main className="app__main">
          <div className="releases-container">
            <section className="new-releases">
              <div className="releases-section-header">
                <h2 className="releases-title">New Releases</h2>
                <div className="filters-with-icon">
                  <img src={MenuIcon} alt="Menu" className="icon" />
                  <span>Popular</span>
                  <img src={FilterIcon} alt="Filters" className="icon" />
                  <span>Filters</span>
                </div>
              </div>
              <h3 className="releases-subtitle">Last 24 hours</h3>
              <div className="cards-wrapper">
                {last24Items.map((item) => (
                  <div key={item.id} className="releases-card">
                    <div className="releases-card-content">
                      <h4 className="releases-card-title">Item {item.id}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="releases-subtitle">Last week</h3>
              <div className="cards-wrapper">
                {lastWeekItems.map((item) => (
                  <div key={item.id} className="releases-card">
                    <div className="releases-card-content">
                      <h4 className="releases-card-title">
                        Item {item.id + last24Items.length}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Releases;
