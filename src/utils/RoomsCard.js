const RoomsCard = ({ data }) => {
  const { name, info,img } = data;
  return (
    <>
      <div class="row g-0 bg-light position-relative mt-2">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img
            src={img}
            class="w-100"
            alt="hollywood sign"
          />
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <h5 class="mt-0">{name}</h5>
          <p>{info}</p>
          <a href="#" class="stretched-link">
            Go somewhere
          </a>
        </div>
        <hr></hr>
        {/* <div className="d-flex">
          <div className="d-flex  align-items-center sm:grid-cols-1">
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
        </div> */}
        {/* <div className=" row">
          <div className="col-sm-2">
            <div className="d-block m-3 ">
              <p className="mx-3">
                <i class="fas fa-wifi"></i>{" "}
              </p>{" "}
              <p> Free wifi</p>
            </div>
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
        </div> */}
        <div class="card mt-3">
          <div class="card-header">Prepaid</div>
          <div class="card-body">
            <p class="d-flex justify-content-between">
              <div>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </p>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-header">Prepaid</div>
          <div class="card-body">
            <p class="d-flex justify-content-between">
              <div>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </p>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-header">Prepaid</div>
          <div class="card-body">
            <p class="d-flex justify-content-between">
              <div>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoomsCard;
