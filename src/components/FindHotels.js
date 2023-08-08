import "../styles/css/subfilter.css";
const FindHotels = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div class="preview-card">
            <div class="preview-card__wrp">
              <div class="preview-card__item">
                <div class="preview-card__imgh m-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11200.675829730526!2d-75.6876061!3d45.42609535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sParliament+Hill!5e0!3m2!1sen!2sca!4v1528808935681"
                    width="600"
                    height="600"
                    frameborder="0"
                    style={{border:"0"}}
                    allowfullscreen
                  ></iframe>{" "}
                </div>
                <div class="preview-card__content">
                  <span class="preview-card__code">26 December 2019</span>
                  <div class="preview-card__title">Lorem Ipsum Dolor</div>
                  <div class="preview-card__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae voluptate repellendus magni illo ea animi?{" "}
                  </div>
                  <a href="#" class="preview-card__button">
                    READ MORE
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
