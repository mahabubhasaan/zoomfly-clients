import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
// ... rest of your code

import { Routes, Route } from "react-router-dom";
import NavigationsBar from "./components/NavigationsBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import FindHotels from "./components/FindHotels";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import Bookings from "./pages/dashboard/Bookings";
function App() {
  return (
    <>
      <NavigationsBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rooms" element={<AllRooms />}></Route>
        <Route path="/findshotels" element={<FindHotels />}></Route>
        <Route path="/dashboardindex" element={<DashboardIndex />}>
          <Route path="/dashboardindex/bookings" element={<Bookings />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
