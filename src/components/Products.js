import React from "react";
import Product1 from "../img/product.svg";
import Product2 from "../img/product2.svg";

const Products = () => {
  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={Product1} alt="Product" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              We build <span>products</span>
              <br />
              to make <span>world </span>better place
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
                    <i className="fa fa-rss"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Digitalization of business</a>
                  </h4>
                  <p className="description">
                    {" "}
                    We can help to rebuilt and rebrand your business models, products and customer
                    experiences to drive new value for your venture
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">digitalization of Operations</a>
                  </h4>
                  <p className="description">
                    ERP is the integrated management of core business processes, often in real-time
                    and mediated by software and technology.The basic goal of ERP system is to
                    provide one central repository for all information that is shared by all the
                    various ERP facets to improve the flow of data across the organization.
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <i className="fa fa-id-badge"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Digitalize System and Environment</a>
                  </h4>
                  <p className="description">
                    Our professional engineers are waiting to serve you a digital system and digital
                    environment to focus your time, energy and conversation around people who
                    inspire you, support you and help you to grow you into your happiest, strongest,
                    wisest self.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={Product2} className="img-fluid" alt="Product" />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>
                Passion of creating Mansion of technologies <br /> in your minds.
              </h3>
            </header>

            <div className="row">
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-cloud-upload-outline" style={{ color: "#ff689b" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Cloud base HRMS</a>
                  </h4>
                  <p className="description">
                    HRMS or Human Resource Management System as it is usually known can be described
                    as an arrangement of all the processes and systems that are required in order to
                    proficiently manage the HR (human resource) department of an organization.
                    <br />
                    <a href="https://drive.google.com/open?id=1O7DdJhIiQ5Pn6qFTNWBh3u8fguV_s654">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-analytics-outline " style={{ color: "#e9bf06" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">ERP System</a>
                  </h4>
                  <p className="description">
                    ERP software is considered to be a type of enterprise application, that is
                    software designed to be used by larger businesses and often requires dedicated
                    teams to customize and analyze the data and to handle upgrades and deployment.
                    <br />
                    <a href="https://drive.google.com/open?id=1Nws_L-iBQibLM2cyXfIAWwcxgK6pDaiB">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
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
                    <i className="ion-android-checkbox-outline" style={{ color: "#3fcdc7" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Point Of Sale (POS)</a>
                  </h4>
                  <p className="description">
                    Meet the most versatile POS system for unifying your in-store and online sales.
                    Delight customers at every touchpoint and win back time to focus on what matters
                    most to your business. provides 24/7 support and Make informed decisions quickly
                    also Cut down repetitive tasks off.
                    <br />
                    <a href="https://drive.google.com/open?id=1_eWbarXeqS21abM0XTPErMXlRUbzBPtu">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
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
                    <i className="ion-android-apps" style={{ color: "#41cf2e" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Housing Society Mnanagement System</a>
                  </h4>
                  <p className="description">
                    Indexial Solution's housing management software solutions provide you with the
                    flexibility to automate costly administration tasks and increase the visibility
                    of tenant, supplier and contractor information.
                    <br />
                    <a href="https://drive.google.com/open?id=1iRhk4nCLfYMeC8y9VFec8-wN8uZUaqD6">
                      {" "}
                      <button className="button button100">know More</button>
                    </a>
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
                <span data-toggle="counter-up">50</span>
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
                      alt="Testimonial"
                    />
                    <h3>Kiran G</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>We are quite satisfied with the services given byIndexial</p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src="img/testimonial-2.jpg"
                      className="testimonial-img"
                      alt="Testimonial"
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

export default Products;
