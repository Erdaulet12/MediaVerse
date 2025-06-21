import React, { useEffect, useState } from "react";
import "../assets/css/BrowseAll.css";
import MenuIcon from "../assets/images/menu.svg";
import FilterIcon from "../assets/images/filter.svg";

export default function BrowseAll() {
  const [fullAnimeList, setFullAnimeList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [genreFilters, setGenreFilters] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(
          "https://api.jikan.moe/v4/anime?order_by=popularity&sort=desc&limit=20"
        );
        const json = await res.json();
        setFullAnimeList(json.data);
        setAnimeList(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnime();
  }, []);

  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredByLetter = selectedLetter
    ? fullAnimeList.filter((a) => {
        const first = a.title[0].toUpperCase();
        return selectedLetter === "#"
          ? /\d/.test(first)
          : first === selectedLetter;
      })
    : fullAnimeList;

  const displayed = genreFilters.length
    ? filteredByLetter.filter((a) =>
        a.genres.some((g) => genreFilters.includes(g.name))
      )
    : filteredByLetter;

  const allGenres = Array.from(
    new Set(fullAnimeList.flatMap((a) => a.genres.map((g) => g.name)))
  );

  const toggleGenre = (genre) => {
    setGenreFilters((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="browse-container">
      <div className="browse-header">
        <h1 className="browse-title">All Catalog</h1>
        <div className="browse-actions">
          <img
            src={MenuIcon}
            alt="Sort"
            className="action-icon"
            onClick={() => setSelectedLetter(null)}
          />
          <span className="action-label">Alphabetical</span>
          <img
            src={FilterIcon}
            alt="Filter"
            className="action-icon"
            onClick={() => setShowFilters((v) => !v)}
          />
          <span className="action-label">Filter</span>
        </div>
        {showFilters && (
          <div className="filter-panel">
            <h4>Filter by Genre</h4>
            {allGenres.map((g) => (
              <label key={g}>
                <input
                  type="checkbox"
                  checked={genreFilters.includes(g)}
                  onChange={() => toggleGenre(g)}
                />
                {g}
              </label>
            ))}
            <button onClick={() => setShowFilters(false)}>Apply</button>{" "}
          </div>
        )}
      </div>
      <div className="alphabet-bar">
        {alphabet.map((letter) => (
          <span
            key={letter}
            className={`alphabet-letter ${
              selectedLetter === letter ? "active" : ""
            }`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </span>
        ))}
        {selectedLetter && (
          <button
            className="clear-letter"
            onClick={() => setSelectedLetter(null)}
          >
            Clear
          </button>
        )}
      </div>
      <div className="section-separator">#</div>
      <div className="anime-list">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          displayed.map((anime) => (
            <div key={anime.mal_id} className="anime-card">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="anime-image"
              />
              <div className="anime-info">
                <h3 className="anime-title">{anime.title}</h3>
                {anime.genres && anime.genres.length > 0 && (
                  <p className="anime-genres">
                    {anime.genres.map((g) => g.name).join(", ")}
                  </p>
                )}
                <p className="anime-description">
                  {anime.synopsis
                    ? anime.synopsis.slice(0, 150) +
                      (anime.synopsis.length > 150 ? "..." : "")
                    : "No description available."}
                </p>
                <small className="anime-sub">Subbed</small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
