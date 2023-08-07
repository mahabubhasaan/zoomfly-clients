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
              <h1 class="mb-3">Heading</h1>
              <h4 class="mb-3">Subheading</h4>
              <a class="btn btn-outline-light btn-lg" href="#!" role="button">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
