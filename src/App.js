import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
// ... rest of your code

import { Routes, Route } from "react-router-dom";
import NavigationsBar from "./components/NavigationsBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
function App() {
  return (
    <>
      <NavigationsBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rooms" element={<AllRooms />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
