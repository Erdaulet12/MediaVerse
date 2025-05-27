import "../assets/css/News.css";

const mainNews = [
  { title: "Главная новость #1" },
  { title: "Главная новость #2" },
];
const recentNews = [
  { title: "Свежая новость 1" },
  { title: "Свежая новость 2" },
  { title: "Свежая новость 3" },
  { title: "Свежая новость 4" },
];

const News = () => (
  <section className="news">
    <div className="news__header">
      <h2 className="section__title">Mediaverse News</h2>
      <button className="news__view-all">View All →</button>
    </div>

    <div className="news__content">
      {/* Первый контейнер главных новостей */}
      <div className="news__left">
        {mainNews.map((item, i) => (
          <article key={i} className="news__card news__card--featured">
            <div className="news__thumb news__thumb--large" />
            <h3 className="news__card-title">{item.title}</h3>
          </article>
        ))}
      </div>

      {/* Правая колонка «последние новости» */}
      <div className="news__right">
        {recentNews.map((item, i) => (
          <article key={i} className="news__card news__card--small">
            <div className="news__thumb news__thumb--small" />
            <h4 className="news__card-title">{item.title}</h4>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default News;
