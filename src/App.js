import { Route, Routes } from "react-router-dom";
import "./App.css";
import TimeoutModal from "./components/timeout-modal/TimeoutModal";
import HomePage from "./components/home-page/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TimeoutModal />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
