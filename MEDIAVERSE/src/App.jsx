import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Releases from "./pages/Releases";
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
            {/* <Route path="/categories" element={<Categories />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
