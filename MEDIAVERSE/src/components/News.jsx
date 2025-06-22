import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import "../assets/css/News.css";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE = import.meta.env.VITE_API_PROXY || "http://localhost:5000/api";

    const fetchNews = async () => {
      try {
        const res = await fetch(`${BASE}/rss?feed=anime`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        const list = Array.isArray(data) ? data : [data];
        setNews(list.slice(0, 4));
      } catch {
        setError("Unable to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return null;

  return (
    <section className="news-section">
      <div className="news-header">
        <h2 className="news-title">Latest Anime News</h2>
        <a href="/All-News" className="news-view-all">
          View All
        </a>
      </div>
      {error && <div className="news-error">{error}</div>}

      <div className="news-grid">
        {news.map((item, i) => (
          <NewsCard
            key={i}
            title={item.title}
            url={item.link}
            summary={item.description}
            date={item.pubDate}
          />
        ))}
      </div>
    </section>
  );
}
