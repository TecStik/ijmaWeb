import Header from "../../components/Header/Header";
import { message, Spin } from "antd";
import map from "../../assests/map.PNG";
import React, { useRef, useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import "./ContactUS.css";

export default function ContactUS() {
  const [loading, setloading] = useState(true);
  function maplink() {
    window.open("https://goo.gl/maps/AhT2xjDLpdB3juyy8", "_blank");
  }

  return (
    <div>
      <Header />

      <br />
      <br />
      <div class="hero-content" data-aos="fade-up">
        <h2>Contact Us</h2>
      </div>
      <br />
      <div id="CareersForm" class="Careers">
        <div class="container" id="twoColum">
          <div class="row">
            <div class="col-lg-6">
              <h3 style={{ color: "#11366B", fontSize: "40px" }}>
                Let's collaborate
              </h3>
              <p style={{ fontSize: "20px" }}>
                Fill the form below or reach us at: info@tecstik.com.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  {/* <div class="mb-3n">
                <h3 style={{ color: "#11366B", fontSize: "40px" }}>
                </h3>
                <p>
                  <a
                    href="mailto:info@tecstik.com"
                    class="text-black"
                    style={{ fontSize: "20px" }}
                  >
                   </a>
                </p>
              </div> */}
                </div>
              </div>
              <div style={{ backgroundColor: "#ECECEC" }}>
                <br />
                <br />
                <br />
                <form
                  // action="forms/Careers.php"
                  // method="post"
                  // onSubmit={SndEmail}
                  role="form"
                  class="email-form"
                >
                  <div class="row mr-2">
                    <div class="col-md-6 form-group ">
                      <input
                        style={{ margin: 10, padding: 10, color: "white" }}
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                        // ref={firstname}
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        style={{ margin: 10, padding: 10, color: "white" }}
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        // ref={firstEmail}
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3 mr-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                      // ref={firstSubject}
                      style={{ margin: 10, padding: 10, color: "white" }}
                    />
                  </div>
                  <div class="form-group mt-3 mr-3">
                    <textarea
                      style={{ margin: 10, padding: 10, color: "white" }}
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                      // ref={firstMessage}
                    ></textarea>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#11366B",
                        margin: 10,
                        padding: 10,
                        color: "white",
                        borderRadius: 20,
                      }}
                      disabled
                    >
                      Send Message
                    </button>
                    {/* {loading ? <button type="submit" class="y">Send Message</button> : <Spin size="large" />} */}
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6" style={{ marginTop: "10%" }}>
              <img
                title="myFrame"
                src={map}
                id="locationMap"
                class="mb-lg-0 mt-1"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                onClick={maplink}
                style={{ height: "82%" }}
              />
              <form role="form" class="email-form">
                <div class="text-center">
                  <br />
                  <button
                    type="button"
                    class="btn btn-primary"
                    id="googleMapbtn"
                    onClick={maplink}
                  >
                    Open in Google Maps
                  </button>
                  {/* {loading ? <button type="submit" class="y">Send Message</button> : <Spin size="large" />} */}
                </div>
              </form>
            </div>
            {/* <div class="col-lg-6 ml-auto mr-auto">
              <img
                title="myFrame"
                src={map}
                id="locationMap"
                class="mb-4 mb-lg-0"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                onClick={maplink}
              />
              <br />
              <br />
              <button
                type="button"
                class="btn btn-primary"
                id="googleMapbtn"
                onClick={maplink}
              >
                Open in Google Maps
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
