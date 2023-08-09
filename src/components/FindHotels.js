import "../styles/css/subfilter.css";
const FindHotels = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div class="preview-card">
            <div class="preview-card__wrp">
              <div class="preview-card__item">
                <div class="preview-card__imgh m-3 ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11200.675829730526!2d-75.6876061!3d45.42609535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sParliament+Hill!5e0!3m2!1sen!2sca!4v1528808935681"
                    width="500"
                    height="500"
                    frameborder="0"
                    style={{ border: "0" }}
                    allowfullscreen
                  ></iframe>{" "}
                </div>
                <div class="preview-card__content">
                  <span class="preview-card__title">
                    How to get to the Radisson Blu Dhaka Water Garden
                  </span>

                  <div class="preview-card__text" style={{ display: "block" }}>
                    <p>
                      <strong>Telephone:</strong> +880 6 3305 7011
                    </p>
                    <p>
                      <strong>Mobile:</strong> +880 1605**7011
                    </p>
                    <strong>Email:</strong> Zoomfly@contact.com
                  </div>
                  <div class="preview-card__title">
                    Airport Rd, Dhaka Cantonment, Dhaka 1206, Bangladesh{" "}
                    <i class="fas fa-plane-departure"></i>
                  </div>
                  <div class="preview-card__text">
                    Airport Rd, Dhaka Cantonment, Dhaka 1206, Bangladesh
                    Perfectly located in the center of Bangladesh's capital
                    city, the Radisson Blu offers guests easy access to the
                    National Assembly Building, business destinations, and local
                    attractions such as Ahsan Manzil and the National Martyrs'
                    Memorial. Guests appreciate the short 15-minute airport
                    transfers to our location, just five kilometers from Hazrat
                    Shahjalal International Airport (DAC), which ensure a
                    relaxing arrival in Dhaka.
                  </div>
                  <div class="preview-card__title">
                    From Shahjalal International Airport
                  </div>
                  <div class="preview-card__text">
                    <strong>By taxi:</strong> It takes between 15 and 25
                    minutes, depending on traffic, to drive the five kilometers
                    to the hotel
                  </div>
                  <a href="#" class="preview-card__button">
                    Details more
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
export default FindHotels;
