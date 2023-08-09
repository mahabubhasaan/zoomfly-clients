/* const RoomSlider = () =>{
    return(<>
    </>)
} */
import React, { Component } from "react";
import Slider from "react-slick";

export default class RoomSlider extends Component {
  render() {
    var settings = {
      /* dots: true,
      infinite: false,
      autoplay: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0, */
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <h1 className="text-center"> Our Hotels </h1>
        <Slider {...settings}>
          <div className="container">
            <div class="card h-100   m-4 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Pan Pacific Cares</h5>
                <p class="card-text">
                  Zoomfly Cares redefines guests’ stay experience with elevated
                  standards and protocol to take care of our guests community.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card h-100   m-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Celebrations</h5>
                <p class="card-text">
                  Walk down the aisle at Pan Pacific Sonargaon Dhaka, where our
                  elegant spaces provide the romantic backdrop for your special
                  celebration.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card h-100   m-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Jharna Grill</h5>
                <p class="card-text">
                  Savour the taste of perfection with our signature restaurant’s
                  offerings of grilled seafood and meats. .
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card h-100   m-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Café Bazar</h5>
                <p class="card-text">
                  Dine on a buffet of gastronomic treats from all over the globe
                  amidst a charming ambience.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card h-100   m-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Aromaz</h5>
                <p class="card-text">
                  Indulge in our delectable assortment of freshly baked pastries
                  and confections.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card h-100   m-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Lobby Lounge</h5>
                <p class="card-text">
                  Relax with your choice of refreshment to soothing live music
                  at our Lobby Lounge.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card h-100   m-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Pool Café</h5>
                <p class="card-text">
                  Delight in poolside barbeque fare, set against the vibrant
                  city skyline with exiting.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card h-100   m-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Pacific Avenue</h5>
                <p class="card-text">
                  Unwind with your favourite beverage at the mezzanine
                  overlooking our lobby.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
