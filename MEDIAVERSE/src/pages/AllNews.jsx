import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

export default function AllNews() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const BASE = import.meta.env.VITE_API_PROXY;
    fetch(`${BASE}/rss?feed=anime`)
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [data];
        setItems(list.slice(0, 20));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Загрузка новостей…</p>;

  return (
    <div style={{ padding: "4rem 2rem 2rem" }}>
      <h1
        style={{ color: "#e0e0e0", marginBottom: "1.5rem", marginTop: "2rem" }}
      >
        Новости Anime
      </h1>
      {items.map((it, i) => (
        <NewsCard
          key={i}
          title={it.title}
          url={it.link}
          summary={it.description}
          date={it.pubDate}
        />
      ))}
    </div>
  );
}
