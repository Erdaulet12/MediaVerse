import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HorizontalCarousel = ({ title, data }) => {
  const scrollRef = useRef();
  const navigate = useNavigate();

  const scroll = (offset) => {
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const uniqueData = Array.isArray(data)
    ? data.filter(
        (item, index, self) =>
          self.findIndex((el) => el.mal_id === item.mal_id) === index
      )
    : [];

  return (
    <section className="carousel-container">
      <h2 className="section__title">{title}</h2>

      <button className="scroll-btn left" onClick={() => scroll(-300)}>
        ←
      </button>

      <div className="grid--scrollable" ref={scrollRef}>
        {uniqueData.map((item) => (
          <div
            className="card"
            key={item.mal_id}
            onClick={() => navigate(`/anime/${item.mal_id}/watch`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={item.images.jpg.image_url}
              alt={item.title}
              className="card__image"
            />
            <div className="card__info">
              <p className="card__title">{item.title}</p>
              {item.type && <p className="card__type">{item.type}</p>}
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll(300)}>
        →
      </button>
    </section>
  );
};

export default HorizontalCarousel;
