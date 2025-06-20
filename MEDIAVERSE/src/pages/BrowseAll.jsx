// File: src/pages/AnimeNews.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";

export default function AnimeNews() {
  const { id } = useParams(); // grab the anime ID from the URL
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    const url = `https://api.jikan.moe/v4/anime/${id}/news`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Jikan API responded ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setItems(json.data || []);
      })
      .catch((err) => {
        console.error("Error fetching anime news:", err);
        setError("Failed to load news. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading news…</p>;
  if (error) return <p>{error}</p>;
  if (items.length === 0) return <p>No news available for this anime.</p>;

  return (
    <div style={{ padding: "4rem 2rem 2rem" }}>
      <h1
        style={{
          color: "#e0e0e0",
          marginBottom: "1.5rem",
          marginTop: "2rem",
        }}
      >
        News for Anime #{id}
      </h1>
      {items.map((newsItem, idx) => (
        <NewsCard
          key={idx}
          title={newsItem.title}
          url={newsItem.url}
          summary={newsItem.excerpt}
          date={newsItem.date}
        />
      ))}
    </div>
  );
}
