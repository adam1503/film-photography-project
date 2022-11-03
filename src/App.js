import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SinglePage from "./SinglePage";
import LikedPage from "./LikedPage";
import Navbar from "./Navbar";
import About from "./About";
import Sidebar from "./Sidebar";
import Alert from "./Alert";
import { useGlobalContext } from "./context";

function App() {
  const { alert } = useGlobalContext();
  return (
    <Router>
      <Navbar />
      <Sidebar />
      {alert && <Alert />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage" element={<SinglePage />} />
        <Route path="/liked-photos" element={<LikedPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
