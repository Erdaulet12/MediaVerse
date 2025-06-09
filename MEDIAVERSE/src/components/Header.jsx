import { Link } from "react-router-dom";
import Avatar from "../assets/images/Avatar.svg";
import Bookmark from "../assets/images/Bookmark.svg";
import "../assets/css/Header.css";

const Header = () => (
  <header className="app__header">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">MediaVerse</Link>
        </li>
        <li className="nav__item">
          <Link to="/new-Releases">New Releases</Link>
        </li>
        <li className="nav__item">
          <Link to="/popular">Popular</Link>
        </li>
        <li className="nav__item">
          <Link to="#">Categories</Link>
        </li>
      </ul>
    </nav>
    <div className="nav-right">
      <img src={Bookmark} alt="Закладки" className="bookmark" />
      <img src={Avatar} alt="Аватар" className="avatar" />
    </div>
  </header>
);

export default Header;
