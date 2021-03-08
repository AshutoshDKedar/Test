import React from "react";
import Partners1 from "../img/partners.svg";
import IFS from "../img/codenautics.png";
import Marquery from "../img/marquery.png";
import Web from "../img/web.png";

const Partners = () => {
  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={Partners1} alt="Partners" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              Our ecosystem<span> partners</span>
              <br />
              Explore our network!
            </h2>
            <div>
              <a href="Under_Maintenance.html" className="btn-services scrollto">
                Join us
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>Key Aliances</h3>
              <p>
                We extend our technology and business capabilities through a powerful ecosystem of
                market leaders and innovators.
              </p>
            </header>

            <div className="card-group">
              <div
                className="col-md-6 col-lg-5 offset-lg-1 card wow bounceInUp"
                data-wow-duration="1.4s"
              >
                <img className="card-img-top" src={IFS} alt="Card cap" />
                <div className="card-body">
                  <h3 className="card-title">IFS India</h3>
                  <p className="card-text">
                    IFS is a leading IT solutions provider, offering Applications, you will discover
                    what so many global enterprises have already discovered the power of certainty.
                  </p>
                  <p className="card-text">
                    <a href="#/">
                      <small className="text-muted">Read More</small>
                    </a>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={Marquery} alt="Card cap" />
                <div className="card-body">
                  <h3 className="card-title">MarQuery</h3>
                  <p className="card-text">
                    MarQuery is the Convesational AI platform which helps business to build lasting
                    relationship with their customers by using chatbots voicebots and other AI
                    products
                  </p>
                  <p className="card-text">
                    <a href="#/">
                      <small className="text-muted">Read More</small>
                    </a>
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={Web} alt="Card cap" />
                <div className="card-body">
                  <h3 className="card-title">Web Farmatics</h3>
                  <p className="card-text">
                    Webfarmatics Technology offers its clients highly customized solutions to
                    increase performance of existing and new process, increasing its productivity
                    and profitability.
                  </p>
                  <p className="card-text">
                    <a href="#/">
                      <small className="text-muted">Know More</small>
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

export default Partners;
