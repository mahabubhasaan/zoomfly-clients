import "../styles/css/room.css";
const Room = () => {
  return (
    <>
      <div class="container">
        <p style={{ cursor: "pointer" }} className="text-end ">
          See all <i class="fas fa-arrow-right-long"></i>
        </p>
        <div class="row mt-5">
          <div class="preview-card">
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
                    <div class="preview-card__title">USD130.00/night</div>
                  </span>
                  <span class="preview-card__code">
                    Members save up to{" "}
                    <div class="preview-card__title">USD20.00</div>
                  </span>
                  <div class="preview-card__text">
                    Offering city views, our comfortable Standard Room features
                    convenient amenities to offer you a pleasant stay.{" "}
                  </div>
                  <a href="#" class="preview-card__button">
                    FIND OUT MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="preview-card">
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
                    <div class="preview-card__title">USD150.00/night</div>
                  </span>
                  <span class="preview-card__code">
                    Members save up to{" "}
                    <div class="preview-card__title">USD24.00</div>
                  </span>
                  <div class="preview-card__text">
                    Our Deluxe Room is a relaxing space for you to unwind with
                    its city and pool views as well as a selection of cable
                    television channels.{" "}
                  </div>
                  <a href="#" class="preview-card__button">
                    FIND OUT MORE
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="preview-card">
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
                    <div class="preview-card__title">USD170.00/night</div>
                  </span>
                  <span class="preview-card__code">
                    Members save up to{" "}
                    <div class="preview-card__title">USD26.00</div>
                  </span>
                  <div class="preview-card__text">
                    Our Premier Room makes for the perfect urban oasis with its
                    great views, an ensuite bathroom and a well-equipped work
                    area.{" "}
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
    </>
  );
};
export default Room;
