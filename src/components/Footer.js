import React from "react";
import Logo2 from "../img/logo2.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>
                <a rel="noreferrer" href="index.html" className="scrollto">
                  <img src={Logo2} alt="logo" width="150" className="img-fluid" />
                </a>
              </h3>
              <p>
                Partner actively with our customers to provide innovative and sustainable technical
                solutions to help them increase productivity, reduce cost and minimize risk.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a rel="noreferrer" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="about.html">
                    About us
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="services.html">
                    Services
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="products.html">
                    Products
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="contact.html">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Company</h4>
              <ul>
                <li>
                  <a rel="noreferrer" href="Under_Maintenance.html">
                    Blogs
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="newsandmedia.html">
                    News
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="Under_Maintenance.html">
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/open?id=1ovR01Zam1dVl-rgWtFgtWWD5icHVRT4N"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/open?id=1laFkJEa_1TdqisCGlqNqnqn3DATx39Vz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                1st Floor, Opps. Of Andhra Bank, Sahawas Road, Karve Nagar, Pune-52. <br />
                <strong>Phone:</strong>
                <a href="#/"> &#43; 91-2025422118</a> <br />
                <strong>Email:</strong> info@indexial.in
                <br />
              </p>

              <div className="social-links">
                <a rel="noreferrer" href="https://twitter.com/indexialsoluti1" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a rel="noreferrer" href="https://www.facebook.com/Indexial/" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/indexialsolutions/"
                  className="instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/indexial-solutions"
                  className="linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>Indexial</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
