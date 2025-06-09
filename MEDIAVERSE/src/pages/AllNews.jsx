import "../assets/css/AllNews.css";

const newsItems = [
  {
    id: 1,
    title: "Громовержцы",
    image: "/assets/images/anime1.jpg",
    desc: "Новый супергеройский фильм от Marvel Studios.",
    category: "Movie",
    date: "2025-06-01",
  },
  {
    id: 2,
    title: "Лило и Стич",
    image: "/assets/images/anime2.jpg",
    desc: "Игровая адаптация классического мультфильма Disney.",
    category: "Movie",
    date: "2025-06-02",
  },
  {
    id: 3,
    title: "Поднятие уровня в одиночку 2",
    image: "/assets/images/anime3.jpg",
    desc: "Продолжение популярного аниме с эпическими боями.",
    category: "Anime",
    date: "2025-06-03",
  },
  {
    id: 4,
    title: "Моя геройская академия",
    image: "/assets/images/anime4.jpg",
    desc: "Новая арка с неожиданными союзами.",
    category: "Anime",
    date: "2025-06-04",
  },
  {
    id: 5,
    title: "Наруто: Возрождение",
    image: "/assets/images/anime5.jpg",
    desc: "Новый сезон культового сериала.",
    category: "Anime",
    date: "2025-06-05",
  },
  {
    id: 6,
    title: "Дастер",
    image: "/assets/images/movie5.jpg",
    desc: "Сериал про агента ФБР в криминальном мире.",
    category: "Movie",
    date: "2025-06-06",
  },
  {
    id: 7,
    title: "Новый мир",
    image: "/assets/images/anime1.jpg",
    desc: "Аниме о путешествиях между мирами.",
    category: "Anime",
    date: "2025-06-07",
  },
  {
    id: 8,
    title: "Звездные воины",
    image: "/assets/images/movie3.jpg",
    desc: "Новая трилогия во вселенной Star Wars.",
    category: "Movie",
    date: "2025-06-08",
  },
  {
    id: 9,
    title: "Ведьмак: Сезон 3",
    image: "/assets/images/anime4.jpg",
    desc: "Продолжение приключений Геральта из Ривии.",
    category: "Anime",
    date: "2025-06-09",
  },
  {
    id: 10,
    title: "Начало вторжения",
    image: "/assets/images/movie5.jpg",
    desc: "Научная фантастика про инопланетное вторжение.",
    category: "Movie",
    date: "2025-06-10",
  },
  {
    id: 11,
    title: "Атака титанов",
    image: "/assets/images/anime2.jpg",
    desc: "Аниме о битве человечества за выживание.",
    category: "Anime",
    date: "2025-06-11",
  },
  {
    id: 12,
    title: "Начало начал",
    image: "/assets/images/movie2.jpg",
    desc: "Документальный фильм о космосе.",
    category: "Movie",
    date: "2025-06-12",
  },
  {
    id: 13,
    title: "Убийца А",
    image: "/assets/images/anime3.jpg",
    desc: "Остросюжетный триллер в аниме-стиле.",
    category: "Anime",
    date: "2025-06-13",
  },
  {
    id: 14,
    title: "Мстители: Эра Альтрона",
    image: "/assets/images/movie4.jpg",
    desc: "Супергеройский экшен от Marvel.",
    category: "Movie",
    date: "2025-06-14",
  },
];

export default function AllNews() {
  return (
    <div className="news-list">
      {newsItems.map((item) => (
        <div key={item.id} className="news-card">
          <img src={item.image} alt={item.title} />
          <div className="news-info">
            <span className="news-category">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="news-date">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
