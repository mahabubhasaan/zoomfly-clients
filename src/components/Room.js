import { Link } from "react-router-dom";
import "../styles/css/room.css";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../hooks/queries";
const Room = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const hotels = data?.hotels;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("hello", data.hotels);
  return (
    <>
      <div class="container">
        <Link to="/rooms">
          <p style={{ cursor: "pointer" }} className="text-end ">
            See all <i class="fas fa-arrow-right-long"></i>
          </p>
        </Link>
        <div class="row ">
          {hotels?.map((data) => (
            <div class="row g-0 bg-light position-relative">
              <div class="col-md-6 mb-md-0 p-md-4">
                <img
                  src={data.img}
                  class="w-100"
                  alt="hollywood sign"
                />
              </div>
              <div class="col-md-6 p-4 ps-md-0">
                <h5 class="mt-0">Columns with stretched link</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
                <span class="preview-card__code">
                  Price starting from{" "}
                  <div class="preview-card__title">USD170.00/night</div>
                </span>
                <span class="preview-card__code">
                  Price starting from{" "}
                  <div class="preview-card__title">USD170.00/night</div>
                </span>

                <Link to="/rooms" class="stretched-link">
                  Go somewhere
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Room;
