import "../assets/css/News.css";

const MediaVerseNews = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">Mediaverse News</h1>
        <a href="/All-News" className="news-view-all">
          View All
        </a>
      </div>

      <div className="news-content">
        <div className="news-featured">
          <div className="featured-news-item">
            <div className="featured-item" />
            <p className="description">
              «Громовержцы» — новый супергеройский фильм от Marvel Studios,
              привлекающий внимание зрителей.
            </p>
          </div>
          <div className="featured-news-item">
            <div className="featured-item" />
            <p className="description">
              «Лило и Стич» — игровая адаптация классического мультфильма
              Disney, успешно стартовавшая в прокате.
            </p>
          </div>
        </div>

        <div className="news-latest">
          <div className="latest-news-item">
            <div className="latest-item" />
            <p className="description">
              «Громовержцы» — Елена Белова, Баки Барнс и другие антигерои
              объединяются в нестабильную команду, чтобы спасти мир. Фильм
              сочетает зрелищные спецэффекты и внутренние конфликты персонажей.
            </p>
          </div>
          <div className="latest-news-item">
            <div className="latest-item" />
            <p className="description">
              «Поднятие уровня в одиночку 2» — Продолжение одного из самых
              популярных аниме последних лет. Главный герой получает второй шанс
              и становится сильнейшим охотником. Новый сезон обещает больше
              раскрытия персонажей и зрелищных боёв.
            </p>
          </div>
          <div className="latest-news-item">
            <div className="latest-item" />
            <p className="description">
              «Дастер» — Агент ФБР в 1970-х внедряется в преступный синдикат,
              используя водителя как информатора. Сериал от Джей-Джей Абрамса и
              сценаристки «Бесстыдников». Много экшена и харизматичных
              персонажей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaVerseNews;
