import "../assets/css/NewsCard.css";

export default function NewsCard({ title, url, summary, date }) {
  return (
    <div className="news-card">
      <div className="content">
        <h3>{title}</h3>
        {summary && <p className="summary">{summary}</p>}
        <div className="footer">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Читать на ANN
          </a>
          <small>{new Date(date).toLocaleString()}</small>
        </div>
      </div>
    </div>
  );
}
