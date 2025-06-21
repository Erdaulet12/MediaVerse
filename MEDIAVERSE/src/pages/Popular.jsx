import { useEffect, useState } from "react";
import "../assets/css/Popular.css";
import MenuIcon from "../assets/images/menu.svg";
import FilterIcon from "../assets/images/filter.svg";

const Popular = () => {
  const [popularAnime, setPopularAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?limit=24")
      .then((res) => res.json())
      .then((data) => {
        setPopularAnime(data.data || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

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

              {loading ? (
                <p style={{ color: "#fff" }}>Loading popular anime...</p>
              ) : (
                <div className="cards-wrapper">
                  {popularAnime.map((anime) => (
                    <div key={anime.mal_id} className="popular-card">
                      <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div className="popular-card-content">
                        <p className="popular-card-title">{anime.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Popular;
