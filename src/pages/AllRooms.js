import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../hooks/queries";
import RoomsCard from "../utils/RoomsCard";
const AllRooms = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const hotels = data?.hotels;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("hello", data.hotels);

  return (
    <>
      <div class="container my-5">
        <div class="row ">
          <div class="col-md-3">
            <div class="sidebar">
              <div class="sidebar-sale">
                <img
                  class="w-100"
                  src="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_960_720.png"
                  alt="Sale"
                />
              </div>
              <div class="sidebar-categories area">
                <a
                  href="#sidebar-categories"
                  class="sidebar-title"
                  data-bs-toggle="collapse"
                >
                  Categories
                </a>
                <hr />

                <div id="sidebar-categories" class="collapse show">
                  <ul class="sidebar-list">
                    <li>
                      <a href="#">
                        Standard <span>(100)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Deluxe <span>(52)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Premier <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Suite <span>(60)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Premier pro <span>(85)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="sidebar-sort area">
                <a
                  href="#sidebar-sort"
                  class="sidebar-title"
                  data-bs-toggle="collapse"
                >
                  Sort By
                </a>
                <hr />

                <div id="sidebar-sort" class="collapse show">
                  <ul class="sidebar-list">
                    <li>
                      <a href="#">Product title (A-z)</a>
                    </li>
                    <li>
                      <a href="#">Product title (Z-a)</a>
                    </li>
                    <li>
                      <a href="#">Price: Lowest to Highest</a>
                    </li>
                    <li>
                      <a href="#">Price: Highest to Lowest</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="sidebar-filter area">
                <a
                  href="#sidebar-filter"
                  class="sidebar-title"
                  data-bs-toggle="collapse"
                >
                  Filter by price
                </a>

                <hr />

                <div id="sidebar-filter" class="collapse show">
                  <ul class="sidebar-list">
                    <li>
                      <a href="#">$0 - $100</a>
                    </li>
                    <li>
                      <a href="#">$100 - $500</a>
                    </li>
                    <li>
                      <a href="#">$1000 - $2000</a>
                    </li>
                    <li>
                      <a href="#">$1000 - $2000</a>
                    </li>
                    <li>
                      <a href="#">$2000 - $5000</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="sidebar-featured area">
                <a
                  href="#sidebar-featured"
                  class="sidebar-title"
                  data-bs-toggle="collapse"
                >
                  Featured Products
                </a>
                <hr />

                <div id="sidebar-featured" class="collapse show">
                  <div class="sidebar-featured-product bg-light1 py-3 pr-2">
                    <div class="row">
                      <div class="col-md-4">
                        <img
                          class="img-fluid"
                          src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-md-8">
                        <p class="mb-0">Black Dress</p>
                        <p class="mb-0">$99.99</p>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-featured-product bg-light1 py-3 pr-2">
                    <div class="row">
                      <div class="col-md-4">
                        <img
                          class="img-fluid"
                          src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-md-8">
                        <p class="mb-0">Black Dress</p>
                        <p class="mb-0">$99.99</p>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-featured-product bg-light1 py-3 pr-2">
                    <div class="row">
                      <div class="col-md-4">
                        <img
                          class="img-fluid"
                          src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                          alt=""
                        />
                      </div>
                      <div class="col-md-8">
                        <p class="mb-0">Black Dress</p>
                        <p class="mb-0">$99.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="content ">
              <div class="container">
                <div class="row ">
                  {hotels?.map((data) => (
                    <RoomsCard data={data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllRooms;
