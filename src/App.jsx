import Ai from "./components/ai/Ai";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const auth = false;
  return (
    <>
      <Router>
        <Routes>
          {auth ? (
            <Route path="/" element={<Ai />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}

          <Route path="/leaderboard" element={<Leaderboard />} />
          {/* <Route path="/" element={<Ai />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
