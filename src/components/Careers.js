import React from "react";
import Career1 from "../img/c.svg";
import Career2 from "../img/career.svg";

const Careers = () => {
  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={Career1} alt=" Information" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              Love Your <span>Career</span> ,<br />
              Ace Your <span>Career</span>
              <br />
            </h2>
            <div>
              <a href="#services" rel="noreferrer" className="btn-services scrollto">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>Work at indexial Solutions!</h3>
              <p>Honesty, ownership and perseverance is how we go about it.</p>
            </header>

            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <div className="icon-box wow fadeInUp">
                  <div className="icon">
                    <i className="fa fa-wpforms"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">How We Work</a>
                  </h4>
                  <p className="description">
                    Working hard for things that we don't care about is stress, but working hard for
                    something we love is called passion! At Haptik we passionately solve problems in
                    order to be able to move faster and don't shy away from breaking things!
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="fa fa-thumbs-o-up"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Getting Things Done</a>
                  </h4>
                  <p className="description">
                    Strategize, execute and ship it! Done? Onto the next assignment. Move at
                    breakneck pace.
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <i className="fa fa-hand-peace-o"></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Enjoy Yourself</a>
                  </h4>
                  <p className="description">
                    While we are working hard, it is also important to take breaks to not get too
                    worked up. Stand up and walk away from your work stations, play a game, chat a
                    little and then get back to work with double the energy!
                  </p>
                </div>
              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                <img src={Career2} className="img-fluid" alt=" Career" />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Current Openings</h3>
              <p>...</p>
            </header>

            <div className="row">
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-world-outline" style={{ color: "#fac19b" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Selinium tester(Manual + Automation)</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:385693</li>
                      <li>Experience: 3 - 5 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department:Services</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">Apply Now</button>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-keypad-outline" style={{ color: "#37c7a9" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Database Admin</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:38221493</li>
                      <li>Experience: 2 - 4 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department:Maintaince</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href="Under_Maintenance.html" rel="noreferrer">
                      <button className="button button100">Apply Now</button>
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <div className="box">
                  <div className="icon">
                    <i className="ion-grid" style={{ color: "#ff689b" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Scrum Master</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:385693</li>
                      <li>Experience: 3 - 5 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department:Services</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">Apply Now</button>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon">
                    <i className="ion-ios-world-outline" style={{ color: "#e9bf06" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">UI UX Designer</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:3781493</li>
                      <li>Experience: 2 - 3 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department:Maintaince</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">Apply Now</button>
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
                    <i className="ion-ios-world-outline" style={{ color: "#3fcdc7" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Python With AI ML</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:17293</li>
                      <li>Experience: 5 - 7 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department: Development</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">Apply Now</button>
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
                    <i className="ion-social-android-outline" style={{ color: "#41cf2e" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Java Full Stack Developer</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:787293</li>
                      <li>Experience: 3 - 5 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department:Development</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">Apply Now</button>
                    </a>
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
                    <i className="ion-ios-world-outline" style={{ color: "#d6ff22" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Dot Net Developer</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:287383</li>
                      <li>Experience: 3 - 5 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department: Development</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">Apply Now</button>
                    </a>
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
                    <i className="ion-stats-bars" style={{ color: "#4680ff" }}></i>
                  </div>
                  <h4 className="title">
                    <a href="#/">Business Analyst</a>
                  </h4>
                  <p className="description">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Ref:387293</li>
                      <li>Experience: 3 - 5 years</li>
                      <li>Contract type: Permanent</li>
                      <li>location : Pune </li>
                      <li>Department: Services</li>
                    </ul>
                    &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <a href="Under_Maintenance.html">
                      {" "}
                      <button className="button button100">Apply Now</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;
