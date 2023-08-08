import Header from "../components/Header";
import RoomSlider from "../components/RoomSlider";
import Services from "../components/Services";
import SubFilter from "../components/SubFilter";
import SubscribeCard from "../components/SubscribeCard";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <RoomSlider />
      <Services />
      <SubFilter />
      <Testimonials/>
      <SubscribeCard/>
    </>
  );
};
export default Home;
