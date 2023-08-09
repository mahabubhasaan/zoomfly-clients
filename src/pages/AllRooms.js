const AllRooms = () => {
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
                  <div class="preview-rooms-card">
                    <div class="preview-card__wrp">
                      <div class="preview-card__item">
                        <div class="preview-card__img">
                          <img
                            src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                            alt=""
                          />
                        </div>
                        <div class="preview-card__content">
                          <div class="preview-card__title">Standard Room</div>
                          <span class="preview-card__code">
                            {" "}
                            Room Size:23sqm (237sq-ft){" "}
                          </span>
                          <span class="preview-card__code">
                            Price starting from{" "}
                            <div class="preview-card__title">
                              USD130.00/night
                            </div>
                          </span>
                          <span class="preview-card__code">
                            Members save up to{" "}
                            <div class="preview-card__title">USD20.00</div>
                          </span>
                          <div class="preview-card__text">
                            Offering city views, our comfortable Standard Room
                            features convenient amenities to offer you a
                            pleasant stay.{" "}
                          </div>
                          <a href="#" class="preview-card__button">
                            FIND OUT MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex">
                      <div className="d-flex  align-items-center">
                        <p className="">
                          <i class="far fa-user"></i>
                        </p>{" "}
                        <p> Max guests: 3 audlts, 1 child (0-11) |</p>
                      </div>
                      <div className="d-flex  align-items-center">
                        <p className="">
                          <i class="fas fa-cart-flatbed"></i>
                        </p>{" "}
                        <p> Bed type: 2 twin or 1 king |</p>
                      </div>
                      <div className="d-flex  align-items-center">
                        <p className="mr-2">
                          <i class="fas fa-compress "></i>
                        </p>{" "}
                        <p>
                          {" "}
                          Size: 36 m<sup>2</sup> |
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="d-block m-3">
                        <p className="mx-3">
                          <i class="fas fa-wifi"></i>{" "}
                        </p>{" "}
                        <p> Free wifi</p>
                      </div>
                      <div className="d-block m-3">
                        <p className="mx-3">
                          <i class="fas fa-mug-hot"></i>{" "}
                        </p>{" "}
                        <p> Coffe</p>
                      </div>
                      <div className="d-block m-3">
                        <p className="mx-3">
                          <i class="fas fa-crutch"></i>{" "}
                        </p>{" "}
                        <p> Hair dryer</p>
                      </div>
                      <div className="d-block m-3">
                        <p className="mx-3">
                          <i class="fas fa-tv"></i>{" "}
                        </p>{" "}
                        <p>Television</p>
                      </div>
                      <div className="d-block m-3">
                        <p className="mx-3">
                          <i class="fas fa-cloud-rain"></i>{" "}
                        </p>{" "}
                        <p> Shower</p>
                      </div>
                      <div className="d-block m-3">
                        <p className="mx-3">
                          <i class="fas fa-key"></i>{" "}
                        </p>{" "}
                        <p> Safe room</p>
                      </div>
                      <div className="d-block m-3">
                        <p className="mx-3">
                          <i class="fas fa-utensils"></i>{" "}
                        </p>{" "}
                        <p> Breakfast</p>
                      </div>
                    </div>
                    <div class="card mt-3">
                      <div class="card-header">Deal Of the Day</div>
                      <div class="card-body">
                        <blockquote class="blockquote mb-0">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                          </p>
                          <footer class="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div class="card mt-3">
                      <div class="card-header">Prepaid Book & Join</div>
                      <div class="card-body">
                        <blockquote class="blockquote mb-0">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                          </p>
                          <footer class="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">
                              Flexible Book & Join
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div class="card mt-3">
                      <div class="card-header">Prepaid</div>
                      <div class="card-body">
                        <blockquote class="blockquote mb-0">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                          </p>
                          <footer class="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div class="preview-rooms-card">
                    <div class="preview-card__wrp">
                      <div class="preview-card__item">
                        <div class="preview-card__img">
                          <img
                            src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                            alt=""
                          />
                        </div>
                        <div class="preview-card__content">
                          <div class="preview-card__title">Deluxe Room</div>
                          <span class="preview-card__code">
                            {" "}
                            Room Size:28sqm (302sq-ft){" "}
                          </span>
                          <span class="preview-card__code">
                            Price starting from{" "}
                            <div class="preview-card__title">
                              USD150.00/night
                            </div>
                          </span>
                          <span class="preview-card__code">
                            Members save up to{" "}
                            <div class="preview-card__title">USD24.00</div>
                          </span>
                          <div class="preview-card__text">
                            Our Deluxe Room is a relaxing space for you to
                            unwind with its city and pool views as well as a
                            selection of cable television channels.{" "}
                          </div>
                          <a href="#" class="preview-card__button">
                            FIND OUT MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="preview-rooms-card">
                    <div class="preview-card__wrp">
                      <div class="preview-card__item swiper-slide">
                        <div class="preview-card__img">
                          <img
                            src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                            alt=""
                          />
                        </div>
                        <div class="preview-card__content">
                          <div class="preview-card__title">Premier Room</div>
                          <span class="preview-card__code">
                            {" "}
                            Room Size:28sqm (302sq-ft){" "}
                          </span>
                          <span class="preview-card__code">
                            Price starting from{" "}
                            <div class="preview-card__title">
                              USD170.00/night
                            </div>
                          </span>
                          <span class="preview-card__code">
                            Members save up to{" "}
                            <div class="preview-card__title">USD26.00</div>
                          </span>
                          <div class="preview-card__text">
                            Our Premier Room makes for the perfect urban oasis
                            with its great views, an ensuite bathroom and a
                            well-equipped work area.{" "}
                          </div>
                          <a href="#" class="preview-card__button">
                            FIND OUT MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
