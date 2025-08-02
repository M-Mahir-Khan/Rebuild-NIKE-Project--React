// src/components/NewsletterSection.jsx
function NewsletterSection() {
  return (
    <section id="newslettar" className="newslettar wrapper py-5">
      <div className="container">
        <div className="text-content text-center pb-4">
          <h2 className="main-h2">
            Hurry up! Subscribe our newsletter and get 25% off
          </h2>
          <p>Limited time offer for this month. No credit card required</p>
        </div>

        <form className="newsletter">
          <div className="row align-items-center">
            <div className="col-md-8 col-12 my-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address here"
                name="email"
              />
            </div>
            <div className="col-md-4 col-12 justify-content-center d-flex">
              <button className="main-btn" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
