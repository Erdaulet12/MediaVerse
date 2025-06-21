import React, { useRef } from "react";

const HorizontalCarousel = ({ title, data }) => {
  const scrollRef = useRef();

  const scroll = (offset) => {
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="carousel-container">
      <h2 className="section__title">{title}</h2>

      <button className="scroll-btn left" onClick={() => scroll(-300)}>
        ←
      </button>

      <div className="grid--scrollable" ref={scrollRef}>
        {data.map((item) => (
          <div className="card" key={item.mal_id}>
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
