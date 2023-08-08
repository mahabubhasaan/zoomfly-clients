const Header = () => {
  return (
    <>
      <div
        class="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
          backgroundSize: "cover",
          height: "80vh",
          /* Add any other styles you need */
        }}
      >
        <div
          class="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3">Unwind at Pan Pacific ZoomFly Dhaka </h1>
              <h5 class="mb-4">
                Walk down the aisle at Pan Pacific Sonargaon Dhaka, where our
                elegant spaces provide the romantic backdrop for your special
                celebration.
              </h5>
              <a
                class="btn btn-outline-light btn-lg m-2"
                href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                role="button"
                rel="nofollow"
                target="_blank"
              >
                Book Now
              </a>
              <a
                class="btn btn-outline-light btn-lg m-2"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
                role="button"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
