import Room from './Room';
import FindHotels from '../components/FindHotels'
import FAQ from './FAQ';

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
              Rooms
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
              Find Hotels
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
              FAQ
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
           <Room/>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile0"
          role="tabpanel"
          aria-labelledby="profile-tab0"
        >
          <FindHotels/>
        </div>
        <div
          class="tab-pane fade"
          id="contact0"
          role="tabpanel"
          aria-labelledby="contact-tab0"
        >
         <FAQ/>
        </div>
      </div>
    </>
  );
};
export default SubFilter;
