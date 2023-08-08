const SubscribeCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div class="card w-75 mt-5">
        <div class="card-body text-center">
          <h5 class="card-title">
            {" "}
            With supporting text below <br/> as a natural lead-in to additional
            content.e
          </h5>
          <p class="card-text"></p>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscribeCard;
