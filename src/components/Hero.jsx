import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section my-5" id="home">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left text */}
          <div
            className="hero-section-content col-lg-6 col-md-12"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            <h1 className="hero-heading my-5">
              NIKE COLLECTION
            </h1>
            <div className="hero-para">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                ipsum. Odit, asperiores alias! Accusamus dignissimos quidem quas
                odio odit voluptate, enim architecto doloribus reprehenderit
                repellendus distinctio cupiditate.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div
            className="hero-section-img col-lg-6 col-md-12"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="1500"
          >
            <img
              src="/Images/shoes1.png"
              alt="Nike Shoes"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
