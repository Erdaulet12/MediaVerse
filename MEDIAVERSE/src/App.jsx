import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Releases from "./pages/Releases";
import AllNews from "./pages/AllNews";
import BrowseAll from "./pages/BrowseAll";
import AnimeWatch from "./pages/AnimeWatch";
import Auth from "./pages/Auth";
import "./assets/css/App.css";

const App = () => {
  return (
    <Router>
      <div className="scalableContainer">
        <div className="app">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-releases" element={<Releases />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/categories" element={<BrowseAll />} />
            <Route path="/all-news" element={<AllNews />} />
            <Route path="/anime/:id/watch" element={<AnimeWatch />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
