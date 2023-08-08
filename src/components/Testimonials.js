import React, { Component } from "react";
import Slider from "react-slick";

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
      <div >
        <h2 className="text-center">Reviews</h2>
        <Slider {...settings}>
          <div>
            <div class="card mb-3 m-2" style={{ maxWidth: "500px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </p>
                    {/*  <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3" style={{ maxWidth: "500px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </p>
                    {/*  <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3" style={{ maxWidth: "500px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </p>
                    {/*  <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3" style={{ maxWidth: "500px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </p>
                    {/*  <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card mb-3" style={{ maxWidth: "500px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer. This is a wider card with supporting
                      text below as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </p>
                    {/*  <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
