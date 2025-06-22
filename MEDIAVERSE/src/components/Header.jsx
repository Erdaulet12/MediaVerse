import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Bookmark from "../assets/images/Bookmark.svg";
import Logo from "../assets/images/Logo.svg";
import Avatar from "../assets/images/Avatar.svg";
import Avatar from "../assets/images/Avatar.svg";
import "../assets/css/Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const checkAuth = () => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";
    setIsLoggedIn(isAuth);
  };

  useEffect(() => {
    checkAuth();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsLoggedIn(false);
    navigate("/auth");
  };

  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Music",
    "Romance",
    "Shounen",
    "Sci-Fi",
    "Seinen",
    "Slice of Life",
    "Sports",
    "Mystery",
    "Shoujo",
    "Thriller",
  ];

  return (
    <header className="app__header">
      <nav className="nav">
        <div className="nav__brand">
          <Link to="/" className="brand__link">
            <img src={Logo} alt="MediaVerse Logo" className="logo-img" />
            <span className="brand__text">MediaVerse</span>
          </Link>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/new-Releases">New Releases</Link>
          </li>
          <li className="nav__item">
            <Link to="/popular">Popular</Link>
          </li>
          <li className="nav__item">
            <div className="dropdown-wrapper" ref={dropdownRef}>
              <span onClick={toggleDropdown} className="dropdown-toggle">
                Categories
              </span>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/categories">All (A-Z)</Link>
                  <div className="dropdown-divider">Genres</div>
                  <div className="genre-grid">
                    {genres.map((genre) => (
                      <Link
                        key={genre}
                        to={`/categories/${genre
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {genre}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div className="nav-right">
        <img src={Bookmark} alt="Bookmarks" className="bookmark" />

        {isLoggedIn ? (
          <>
            <img src={Avatar} alt="User Avatar" className="avatar" />
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="login-button" onClick={() => navigate("/auth")}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};
      <div className="nav-right">
        <img src={Bookmark} alt="Bookmarks" className="bookmark" />

        {isLoggedIn ? (
          <>
            <img src={Avatar} alt="User Avatar" className="avatar" />
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="login-button" onClick={() => navigate("/auth")}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
