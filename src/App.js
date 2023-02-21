import { Route, Routes } from "react-router-dom";
import FoodDetails from "./components/foodDetails/FoodDetails.jsx";
import HomePage from "./components/homeComponent/HomePage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/foodDetails" element={<FoodDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
