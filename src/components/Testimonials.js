import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/css/reviews.css";

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
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
        <h2 className="text-center">Reviews</h2>
        <Slider {...settings}>
          <div class="container">
            <div class="row">
              <div class="col-md-12 item">
                <div class="item-in">
                  <div class="">
                    <a href="#">
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "5%",
                        }}
                        src="https://i.ibb.co/QCF3hrB/download.jpg"
                        alt="download"
                        border="0"
                      />
                      <div class="icon-topic">Sanvi Rahman</div>
                    </a>
                  </div>
                  <h4>"Great people, Great hospitality!"</h4>
                  <div class="seperator"></div>
                  <p>
                    The best customer service ever we experienced.We can't say
                    enough nice things about this hotel.It’s absolutely nice
                    with tradition,class and a fun atmosphere.The swimming pool
                    cafe,buffet restaurant,kids play zone and bar are
                    excellent.We really enjoyed the live music.Thank you
                    Hossain, Ali and all the staffs at Dhaka Radisson.Definitely
                    we will recommend others!
                  </p>
                  <a href="#">
                    Date: 23 Auguse 2023
                    <i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 item">
                <div class="item-in">
                  <div class="">
                    <a href="#">
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "5%",
                        }}
                        src="https://i.ibb.co/QCF3hrB/download.jpg"
                        alt="download"
                        border="0"
                      />
                      <div class="icon-topic">Sanvi Rahman</div>
                    </a>
                  </div>
                  <h4>"Great people, Great hospitality!"</h4>
                  <div class="seperator"></div>
                  <p>
                    The best customer service ever we experienced.We can't say
                    enough nice things about this hotel.It’s absolutely nice
                    with tradition,class and a fun atmosphere.The swimming pool
                    cafe,buffet restaurant,kids play zone and bar are
                    excellent.We really enjoyed the live music.Thank you
                    Hossain, Ali and all the staffs at Dhaka Radisson.Definitely
                    we will recommend others!
                  </p>
                  <a href="#">
                    Date: 23 Auguse 2023
                    <i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 item">
                <div class="item-in">
                  <div class="">
                    <a href="#">
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "5%",
                        }}
                        src="https://i.ibb.co/QCF3hrB/download.jpg"
                        alt="download"
                        border="0"
                      />
                      <div class="icon-topic">Sanvi Rahman</div>
                    </a>
                  </div>
                  <h4>"Great people, Great hospitality!"</h4>
                  <div class="seperator"></div>
                  <p>
                    The best customer service ever we experienced.We can't say
                    enough nice things about this hotel.It’s absolutely nice
                    with tradition,class and a fun atmosphere.The swimming pool
                    cafe,buffet restaurant,kids play zone and bar are
                    excellent.We really enjoyed the live music.Thank you
                    Hossain, Ali and all the staffs at Dhaka Radisson.Definitely
                    we will recommend others!
                  </p>
                  <a href="#">
                    Date: 23 Auguse 2023
                    <i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 item">
                <div class="item-in">
                  <div class="">
                    <a href="#">
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "5%",
                        }}
                        src="https://i.ibb.co/QCF3hrB/download.jpg"
                        alt="download"
                        border="0"
                      />
                      <div class="icon-topic">Sanvi Rahman</div>
                    </a>
                  </div>
                  <h4>"Great people, Great hospitality!"</h4>
                  <div class="seperator"></div>
                  <p>
                    The best customer service ever we experienced.We can't say
                    enough nice things about this hotel.It’s absolutely nice
                    with tradition,class and a fun atmosphere.The swimming pool
                    cafe,buffet restaurant,kids play zone and bar are
                    excellent.We really enjoyed the live music.Thank you
                    Hossain, Ali and all the staffs at Dhaka Radisson.Definitely
                    we will recommend others!
                  </p>
                  <a href="#">
                    Date: 23 Auguse 2023
                    <i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
