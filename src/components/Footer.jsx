import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer py-5">
        <div className="container">
          <h2 className="main-h2 text-center text-light my-5">
            Our page has come to an end, but our relationship with you has not.
          </h2>
          <div className="row">
            <div className="col-md-12 text-center">
              <a href="#" className="footer-link">Register</a>
              <a href="#" className="footer-link">Forum</a>
              <a href="#" className="footer-link">Affiliate</a>
              <a href="#" className="footer-link">FAQ</a>

              <div className="footer-social pt-4 text-center">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="footer-copy">
                <div className="copy-right text-center pt-5">
                  <p className="text-light">
                    Made with ❤️ by <a href="https://github.com/M-Mahir-Khan" target="_blank" rel="noreferrer">Mohammed Mahir</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
