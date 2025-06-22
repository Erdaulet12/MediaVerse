import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <a href="/about">About us</a>
        </div>

        <div className="footer-section">
          <h4>Contacts</h4>
          <ul>
            <li>
              <a href="mailto:support@mediaverse.com">support@mediaverse.com</a>
            </li>
            <li>
              <a href="https://github.com/Erdaulet12/MediaVerse">GitHub</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>FAQ</h4>
          <ul>
            <li>
              <a href="/FAQ">How to watch anime?</a>
            </li>
            <li>
              <a href="/FAQ">Can I submit my own anime?</a>
            </li>
            <li>
              <a href="/FAQ">Is the content legal?</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Terms & Policies</h4>
          <ul>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} MediaVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
