import "../assets/css/Privacy.css";
export default function Privacy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>

      <p>
        We respect your privacy. This document describes how we collect, use,
        and protect your personal data.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Basic user data (e.g., email, IP address)</li>
        <li>Site usage and analytics</li>
      </ul>

      <h2>How We Use Data</h2>
      <p>
        Data is used to improve user experience, enhance content, and ensure
        security.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data by
        contacting us at{" "}
        <a href="mailto:support@mediaverse.com">support@mediaverse.com</a>.
      </p>
    </div>
  );
}
