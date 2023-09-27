import Ai from "./components/ai/Ai";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Saved from "./components/saved/Saved";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
