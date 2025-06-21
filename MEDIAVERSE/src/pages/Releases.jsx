import React, { useEffect, useState } from "react";
import "../assets/css/Releases.css";
import MenuIcon from "../assets/images/menu.svg";
import FilterIcon from "../assets/images/filter.svg";

const JIKAN_API = "https://api.jikan.moe/v4/seasons/2025/summer?page=1";

const Releases = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(JIKAN_API);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        const items = data.data.map((item) => {
          const parsedDate = item.aired?.from
            ? new Date(item.aired.from)
            : null;
          console.log(`[${item.title}] →`, item.aired?.from, "→", parsedDate);
          return {
            id: item.mal_id,
            title: item.title,
            date: parsedDate,
            link: item.url,
            image: item.images.jpg.image_url,
          };
        });

        setReleases(items);
      } catch (e) {
        console.error("[Releases] Error:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReleases();
  }, []);

  if (loading) return <p>Loading upcoming anime...</p>;
  if (error) return <p>Error: {error}</p>;

  const now = new Date();

  const upcomingWeek = releases.filter(
    (r) =>
      r.date &&
      r.date.getTime() - now.getTime() >= 0 &&
      r.date.getTime() - now.getTime() <= 7 * 86400e3
  );

  const renderCards = (items, limit = 18) => {
    const seen = new Set();
    const uniqueItems = items
      .filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      })
      .slice(0, limit);

    return (
      <div className="cards-wrapper">
        {uniqueItems.length ? (
          uniqueItems.map((item) => (
            <div key={item.id} className="releases-card">
              <img src={item.image} alt={item.title} className="card-img" />
              <div className="releases-card-content">
                <h4 className="releases-card-title">{item.title}</h4>
                {item.date && (
                  <p className="release-date">
                    {item.date.toLocaleDateString()}
                  </p>
                )}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No releases found for the next 7 days.</p>
        )}
      </div>
    );
  };

  return (
    <div className="releases-container">
      <section className="new-releases">
        <div className="releases-section-header">
          <h2 className="releases-title">Upcoming Anime</h2>
          <div className="filters-with-icon">
            {/* TODO: Добавить функционал к иконкам */}
            <img src={MenuIcon} alt="Menu" className="icon" />
            <span>All</span>
            <img src={FilterIcon} alt="Filters" className="icon" />
            <span>Filters</span>
          </div>
        </div>

        <h5 className="releases-subtitle">All Summer 2025 Releases</h5>
        {renderCards(releases, 18)}
      </section>
    </div>
  );
};

export default Releases;
