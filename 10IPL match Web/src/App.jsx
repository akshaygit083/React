import {Routes, Route} from "react-router-dom";
import Home from "./components/home";
import MatchDetails from "./components/MatchDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matchDetails/:id" element={<MatchDetails />} />
    </Routes>
  );
}

export default App;
