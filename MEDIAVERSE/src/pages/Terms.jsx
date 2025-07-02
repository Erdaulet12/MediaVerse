import "../assets/css/Terms.css";

export default function Terms() {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>

      <div className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using MediaVerse, you agree to be bound by these Terms of Service.
          If you do not agree, please do not use the platform.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Use of Content</h2>
        <p>
          All anime information provided on MediaVerse is for informational
          purposes only. MediaVerse does not host or distribute anime content
          and is not responsible for external links.
        </p>
      </div>

      <div className="terms-section">
        <h2>3. Third-Party APIs</h2>
        <p>
          We use public APIs such as Jikan and AniList to display anime data.
          These services are governed by their own terms and policies.
        </p>
      </div>

      <div className="terms-section">
        <h2>4. Modifications</h2>
        <p>
          MediaVerse may revise these terms at any time without prior notice.
          Continued use of the platform constitutes your agreement to the
          revised terms.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. Contact</h2>
        <p>
          For questions or concerns about these Terms of Service, please contact
          us at support@mediaverse.com
        </p>
      </div>
    </div>
  );
}
