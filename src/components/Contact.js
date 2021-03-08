import React, { useState } from "react";
import Contacts from "../img/contacts.svg";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (mobileno) => {
    return /^[6-9]\d{9}$/.test(mobileno);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is required field.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "mobile") {
        if (!isValidMobile(value)) return "Invalid Mobile Number.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (var key in contactData) {
      if (contactData[key]) {
        setSuccessMsg(true);
      } else setSuccessMsg(false);
    }
  };

  return (
    <>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={Contacts} alt="Contact" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              Get
              <br />
              <span>in touch</span>With us
            </h2>
            <div>
              <a href="https://wa.me/918624922118" className="btn-get-started scrollto">
                Chat
              </a>
              <a href="tel:+91 8624922118" className="btn-services scrollto">
                call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container-fluid">
          <div className="section-header">
            <h3>Contact Us</h3>
          </div>

          <div className="row wow fadeInUp pb-5">
            <div className="col-12 col-lg-6">
              <div className="form">
                {!successMsg ? (
                  <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
                    <div id="errormessage" className={errorMsg ? "show" : ""}>
                      {errorMsg}
                    </div>
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={contactData.name || ""}
                        onChange={(e) => handleChange(e)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="mobile"
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        onBlur={handleBlur}
                        value={contactData.mobile || ""}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="company"
                        type="text"
                        className="form-control"
                        placeholder="Company"
                        value={contactData.company || ""}
                        onChange={(e) => handleChange(e)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={contactData.email || ""}
                        onChange={(e) => handleChange(e)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        type="text"
                        className="form-control"
                        placeholder="Message"
                        value={contactData.message || ""}
                        onChange={(e) => handleChange(e)}
                        onBlur={handleBlur}
                        rows="3"
                      />
                    </div>
                    <p className="text-right mb-0">
                      <input type="submit" className="btn btn-primary" value="Submit Now" />
                    </p>
                  </form>
                ) : (
                  <div className="show" id="sendmessage">
                    Thank for your message. We will contact you soon.
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-md-5 info">
                  <i className="ion-ios-location-outline"></i>
                  <p>
                    <b> Our Office Location</b>
                    <br />
                    1st Floor,
                    <br />
                    Opps. Of Andhra Bank,
                    <br />
                    Sahawas Road,
                    <br />
                    Karve Nagar, Pune-52.
                  </p>
                </div>
                <div className="col-md-6 info">
                  <i className="ion-ios-telephone-outline"></i>
                  <p>
                    <b> Call us on</b>
                    <br />
                    91 2025422118
                    <br />
                    91 8624922118
                  </p>
                </div>
                <div className="col-md-4 info">
                  <i className="ion-ios-email-outline"></i>
                  <p>
                    <b> Write us to </b>
                    <br /> For business inquires: info@indexial.in
                    <br />
                    For general queries: hello@indexial.in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="map mb-4 mb-lg-0">
                <iframe
                  title="google map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15135.266749291499!2d73.8202066!3d18.4919608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc8e355b59317e99!2sIndexial%20Solutions!5e0!3m2!1sen!2sin!4v1576828087505!5m2!1sen!2sin"
                  height="312"
                  frameBorder="0"
                  style={{ width: "100%", border: "0" }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
