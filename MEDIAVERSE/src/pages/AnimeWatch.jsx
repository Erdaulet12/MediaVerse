import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../assets/css/AnimeWatch.css";

export default function AnimeWatch() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [alsoWatched, setAlsoWatched] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      setAnime(res.data.data);
    };

    const fetchEpisodes = async () => {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/episodes`
      );
      setEpisodes(res.data.data || []);
      setSelectedEpisode(res.data.data?.[0] || null);
    };

    const fetchRecommendations = async () => {
      const res = await axios.get(
        "https://api.jikan.moe/v4/top/anime?limit=10"
      );
      const filtered = res.data.data.filter((a) => a.mal_id != id);
      setAlsoWatched(filtered.slice(0, 4));
    };

    fetchAnime();
    fetchEpisodes();
    fetchRecommendations();
  }, [id]);

  if (!anime) return <div className="anime-watch-container">Loading...</div>;

  return (
    <div className="anime-watch-container">
      <div className="main-content-with-sidebar">
        <div className="left-column">
          <div className="anime-info">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="anime-cover"
            />

            <div className="anime-details">
              <h1>{anime.title}</h1>
              <div className="anime-meta">
                <p>
                  <strong>Score:</strong> {anime.score}
                </p>
                <p>
                  <strong>Rating:</strong> {anime.rating}
                </p>
                <p>
                  <strong>Episodes:</strong> {anime.episodes}
                </p>
                <p>
                  <strong>Status:</strong> {anime.status}
                </p>
              </div>
              <p>{anime.synopsis}</p>
            </div>
          </div>

          <div className="watch-section">
            <div className="video-player">
              <iframe
                src={`https://www.youtube.com/embed/${
                  selectedEpisode?.forum_url?.split("v=")[1] || "KIVtlLvQoJY"
                }`}
                title={`Episode ${selectedEpisode?.mal_id}`}
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="episode-list">
              <h3>Episodes</h3>
              <ul>
                {episodes.map((ep) => (
                  <li
                    key={ep.mal_id}
                    className={
                      selectedEpisode?.mal_id === ep.mal_id ? "active" : ""
                    }
                    onClick={() => setSelectedEpisode(ep)}
                  >
                    Episode {ep.mal_id}: {ep.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="right-sidebar">
          <h3>Also Watched</h3>
          <div className="also-watched-grid">
            {alsoWatched.map((item) => (
              <Link
                to={`/anime/${item.mal_id}/watch`}
                key={item.mal_id}
                className="also-watched-card"
              >
                <img src={item.images.jpg.image_url} alt={item.title} />
                <p>{item.title}</p>
                <p>Score: {item.score}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
