import "../assets/css/FAQ.css";

export default function FAQ() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2>How to watch anime?</h2>
        <p>
          MediaVerse provides information and trailers via trusted platforms
          like YouTube. To watch full episodes, we recommend visiting official
          streaming services such as Crunchyroll, Netflix, or Hulu where the
          content is licensed and legal.
        </p>
      </div>

      <div className="faq-item">
        <h2>Can I submit my own anime?</h2>
        <p>
          Currently, MediaVerse curates anime data using the Jikan API
          (MyAnimeList). If you're an independent creator or producer, you can
          reach out to us through our contact email for future collaboration
          opportunities.
        </p>
      </div>

      <div className="faq-item">
        <h2>Is the content legal?</h2>
        <p>
          Yes. MediaVerse does not host or stream any copyrighted anime content
          directly. All data and visuals are fetched from publicly available
          APIs (e.g., Jikan, AniList) and used within fair use for informational
          and non-commercial purposes.
        </p>
      </div>
    </div>
  );
}
