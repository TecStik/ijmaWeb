import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./OurTeam.css";

export default function OurTeam() {
  return (
    <div>
      <Header />
      <section
        id="OurTeamhero"
        class="OurTeamhero d-flex align-items-center section-bg"
      >
        <div class="container">
          <div class="row justify-content-between gy-5">
            <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ color: "#11366B" }}
              >
                Our Team
              </p>
              <h6 data-aos="fade-up" style={{ color: "black" }}>
                Led by the professionals listed below, TecStik and The IJMA
                Platform is primarily operated by professionals who have
                prominent reputations across The Islamic Banking Spectrum.
              </h6>
              <br />
            </div>
            <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
              <img
                src="https://i.ibb.co/GJSYYh4/laptop1.png"
                class="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
                id="OurteamImage"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="Ourteam" class="Ourteam">
        <div class="container" data-aos="fade-up">
          <div class="row gx-0">
            <div
              class="col-lg-6 d-flex align-items-center mt-0 mb-0"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div class="content">
                <h2>Mr. Khalil A. Hasan - Chairman</h2>
                <br />
                <h5>
                  Mr. Khalil A. Hasan has over 57 years of experience in Banking
                  and Finance with local and multinational institutions in
                  diverse roles, including but not limited to:
                </h5>
                <br />
                <ul>
                  <li>Trade Finance</li>
                  <br />
                  <li>Retail Banking</li>
                  <br />
                  <li>Investment Banking</li>
                  <br />
                  <li>Islamic Banking</li>
                </ul>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div
              class="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div class="content">
                <h2>Mr. Bilal Saleem - Chief Executive</h2>
                <br />
                <h5>
                  Bilal Saleem is the Director of TecStik, bringing you IJMA.
                  Mr. Bilal Saleem's extensive expertise in Banking and Finance,
                  have allowed him to lead Pacific Financial Services PVT. LTD.
                  and TecStik into making diligent efforts for rectifying
                  Islamic Banking.
                </h5>
                <br />
                <ul>
                  <li>
                    Over 26 years of experience in Corporate Finance, Treasury
                    and Investment Banking with several successful transactions
                    to his credit.
                  </li>
                  <br />
                  <li>
                    {" "}
                    An Entrepreneur with his own consultancy firm providing
                    advisory to several local and International clientele.{" "}
                  </li>
                  <br />
                  <li>Holds MBA in Finance from Iowa State University(USA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Ourteam" class="Ourteam">
        <div class="container" data-aos="fade-up">
          <div class="row gx-0 ">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="content m-2">
                <h2>Mr. Hammad Ahmed (CFA, CMA, IFQ) - Product Manager</h2>
                <br />
                <h5>
                  Hammad has over 16 years of experience in Corporate Finance,
                  Commercial Banking, Investment Banking , Islamic Finance and
                  Fintech. Working with international firms.
                  <br />
                  <br />
                </h5>
                <br />
                <ul>
                  <li>
                    Played instrumental role in setting up The Islamic Banking
                    window of Chase Bank in Kenya.
                  </li>
                  <br />
                  <li>
                    Advisor to Malaysian Islamic Investment Bank for fintech
                    initiatives.
                  </li>
                  <br />
                  <li>
                    Holds prestigious qualifications in finance including
                    CFA,CMA,IFQ
                  </li>
                  <br />
                  <li>Holds various global Fintech certifications.</li>
                  <br />
                  <li>
                    Position holder in International Blockchain examination.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 d-flex align-items-center mt-2 mb-2"
              data-aos="zoom-out"
              data-aos-delay="200"
              style={{ marginTop: "-4.5%" }}
            >
              <div class="content">
                <h2>Mr. Azfar Saleem - Marketing Director</h2>
                <br />
                <br />
                <h5>
                  Creativity is a million tiny acts of daily practice, those
                  with strategy and discipline. Azfar - TecStik and IJMA’s
                  Marketing Director and Partner, creates engaging strategies to
                  promote the concept powering IJMA.
                </h5>
                <br />
                <ul>
                  <li>
                    Over 10 years of Digital Marketing Experience working with
                    The Top International Technology Firms.
                  </li>
                  <br />
                  <li>
                    An Undergraduate with Honours from Kingston University,
                    London, UK.
                  </li>
                  <br />
                  <li>
                    Azfar leads tech for Islamic Finance growth via certified
                    research.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <Footer />
    </div>
  );
}
