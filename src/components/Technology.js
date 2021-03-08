import React from "react";
import Tech1 from "../img/tech1.svg";
import Tech2 from "../img/tech2.svg";

const Technology = () => {
  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={Tech1} alt="Technology" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              The integration of <br />
              miracles and <span>Technology</span>
            </h2>
            <div>
              <a href="Under_Maintenance.html" className="btn-services scrollto" rel="noreferrer">
                get a quote
              </a>
              <a
                href="https://wa.me/918624922118"
                className="btn-get-started scrollto"
                rel="noreferrer"
              >
                chat
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>What We Offer</h3>
              <p>
                Indexial solutions offers a wide range of services to our individual and business
                clients. Our client receive personalized service that is beyond comparison.
              </p>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <div className="icon-box wow fadeInUp">
                  <div className="icon">
                    <i className="fa fa-signal"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Telecom</a>
                  </h4>
                  <p className="description">
                    Security and Networking solutions for the Telecom companies
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="fa fa-money"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Finance</a>
                  </h4>
                  <p className="description">
                    We offer wide range of products for banking and Finance Industry
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <i className="fa fa-car"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Automobile</a>
                  </h4>
                  <p className="description">
                    Digital Solutions for the automobile insustry and much more
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon">
                    <i className="fa fa-plus-square"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Health</a>
                  </h4>
                  <p className="description">
                    Helthcare products for making the society better place
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon">
                    <i className="fa fa-book"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Education</a>
                  </h4>
                  <p className="description">One Stop solution for the Educational Institue</p>
                </div>
                <div className="icon-box wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon">
                    <i className="fa fa-shopping-basket "></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">E-commerce</a>
                  </h4>
                  <p className="description">
                    Full stack enterprise platform for E commerce companies
                  </p>
                </div>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={Tech2} className="img-fluid" alt="Technology" />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Technologies We Use</h3>
              <p>
                We offer solutions beyond software with dedicated experts and technology such as
              </p>
            </header>

            <div className="row">
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-world-outline" style={{ color: "#ff689b" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Backend Engineering</a>
                  </h4>
                  <p className="description">
                    We use Java and JavaScript based frameworks for server-side development. We use
                    relational as well as NoSQL databases for faster processing of complex set of
                    data.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-monitor-outline" style={{ color: "#e9bf06" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Frontend Engineering</a>
                  </h4>
                  <p className="description">
                    JavaScript in combination with HTML and CSS has revolutionized the way web and
                    mobile applications are built and we are extremely adept at implementing the JS
                    universe
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-social-android-outline" style={{ color: "#3fcdc7" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Mobility</a>
                  </h4>
                  <p className="description">
                    Experts in developing experiential applications using native as well as hybrid
                    technologies for mobile, tablets and connected devices.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-speedometer-outline" style={{ color: "#41cf2e" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Data Engineering</a>
                  </h4>
                  <p className="description">
                    Data is the key to effective decision making. Uncover meaningful and actionable
                    insights from a huge amount of data.
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-cloud-upload-outline" style={{ color: "#d6ff22" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">DevOps</a>
                  </h4>
                  <p className="description">
                    DevOps led development improves time to market, increases efficiency and reduces
                    redundancy in the system.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-5 wow bounceInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-android-options" style={{ color: "#4680ff" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Testing</a>
                  </h4>
                  <p className="description">
                    Zero-bug application is a distant dream but our automation and manual testing
                    experts help you achieve it.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="wow fadeIn">
          <div className="container">
            <header className="section-header">
              <h3>Trusted By</h3>
              <p> 10+ Fortune 150 Companies</p>
            </header>

            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">280</span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">32</span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">20</span>
                <p>Won Awards</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">80</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonials-carousel wow fadeInUp">
                  <div className="testimonial-item">
                    <img
                      src="img/testimonial-1.jpg"
                      className="testimonial-img"
                      alt="Testimonials"
                    />
                    <h3>Kiran G</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>We are quite satisfied with the services given byIndexial</p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src="img/testimonial-2.jpg"
                      className="testimonial-img"
                      alt="Testimonials"
                    />
                    <h3>Sanket K</h3>
                    <h4>Project Manager</h4>
                    <p>Quality is always there. Top of the game in terms of that Indexial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;
