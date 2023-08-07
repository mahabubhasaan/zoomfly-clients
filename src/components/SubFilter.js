const SubFilter = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <ul class="nav nav-tabs mb-3 " id="myTab0" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab0"
              data-mdb-toggle="tab"
              data-mdb-target="#home0"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab0"
              data-mdb-toggle="tab"
              data-mdb-target="#profile0"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab0"
              data-mdb-toggle="tab"
              data-mdb-target="#contact0"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content container" id="myTabContent0" >
        <div
          class="tab-pane fade show active"
          id="home0"
          role="tabpanel"
          aria-labelledby="home-tab0"
        >
          <div>
            <div class="card mb-3" style={{ maxWidth: "800px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                    alt="Trendy Pants and Shoes"
                    class="img-fluid rounded-start"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile0"
          role="tabpanel"
          aria-labelledby="profile-tab0"
        >
          Tab 2 content
        </div>
        <div
          class="tab-pane fade"
          id="contact0"
          role="tabpanel"
          aria-labelledby="contact-tab0"
        >
          Tab 3 content
        </div>
      </div>
    </>
  );
};
export default SubFilter;
