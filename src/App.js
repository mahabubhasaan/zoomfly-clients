import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ... rest of your code

import { Routes, Route } from "react-router-dom";
import NavigationsBar from "./components/NavigationsBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavigationsBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
