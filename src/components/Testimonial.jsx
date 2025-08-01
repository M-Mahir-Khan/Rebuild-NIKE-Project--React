import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Testimonial() {
  return (
    <section id="testimonial">
      <div className="wrapper testimonial-section">
        <div className="container text-center">
          <div className="text-center pb-4">
            <h2>Testimonial</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-10 offset-lg-1">
              <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption">
                      <img src="/Images/review/review-1.jpg" alt="review" />
                      <p>"Far far away, behind the word mountains..."</p>
                      <h5>Johnthan Doe - Ux Designer</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img src="/Images/review/review-2.jpg" alt="review" />
                      <p>"Far far away, behind the word mountains..."</p>
                      <h5>Maccy Doe - Front End</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img src="/Images/review/review-1.jpg" alt="review" />
                      <p>"Far far away, behind the word mountains..."</p>
                      <h5>Johnthan Doe - Ux Designer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
