import Leaderboard from "./components/leaderboard/Leaderboard";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Leaderboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
