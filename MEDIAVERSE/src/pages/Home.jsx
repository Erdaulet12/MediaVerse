import { useState, useEffect } from "react";
import News from "../components/News";
import HorizontalCarousel from "../components/Horizontal";
import "../assets/css/Home.css";

const Home = () => {
  const [topPicks, setTopPicks] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_BASE = "/api";

    const fetchWithRetry = async (path, retries = 2, delay = 1000) => {
      const url = `${API_BASE}${path}`;
      const res = await fetch(url);
      if (res.status === 429 && retries > 0) {
        await new Promise((r) => setTimeout(r, delay));
        return fetchWithRetry(path, retries - 1, delay * 2);
      }
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      return res.json();
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const seasonJson = await fetchWithRetry("/v4/seasons/now?limit=20");
        setTopPicks(seasonJson.data || []);

        const popularJson = await fetchWithRetry(
          "/v4/top/anime?filter=bypopularity&limit=20"
        );
        setMostPopular(popularJson.data || []);
      } catch (err) {
        console.error(err);
        setError(
          err.message.includes("429")
            ? "Too many requests — please try again later."
            : "Could not load anime lists. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="app__main">
      <div className="banner-rect" />

      <HorizontalCarousel title="Top Picks for You" data={topPicks} />
      <HorizontalCarousel title="Most Popular" data={mostPopular} />

      <News />

      <div className="home__text">
        <p>Looking for something particular?</p>
        <a href="/categories" className="home__link">
          View All
        </a>
      </div>
    </main>
  );
};

export default Home;
