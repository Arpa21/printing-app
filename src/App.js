import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { PrintSummary } from "./components/PrintSummary/PrintSummary.jsx";
import logo from "./assets/logo.png";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <img src={logo} alt="logo" />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/print-summary" element={<PrintSummary />} />
        </Routes>
      </Router>
    </div>
  );
};
