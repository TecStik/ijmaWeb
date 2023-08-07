import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import kollectltLogo from "../../assests/image.png";
import Footer from "../../components/Footer/Footer";
import "./About.css";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  return (
    <>
      {/* <div id="NewHome"> */}
      <Header />
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <p data-aos="fade-up" style={{ color: "#11366B" }}>
                About Operator
              </p>
              <br />
              <h6 data-aos="fade-up" data-aos-delay="400">
                TecStik is a technology subsidiary led by Pacific Financial
                Services PVT. LTD. - A company operating globally for over 20
                years. TecStik provides IT Consultations, Digitalisation,
                ITAS/SAAS (IT as a Service /Software as a Service), Artificial
                Intelligence Products, Data Sciences, Blockchain/Web3 and Cloud
                offerings. TecStik has assembled a team of seasoned finance
                professionals and technology specialists who provide clients
                with optimal solutions for their businesses. After meticulous
                research and development, TecStik regularly builds technology
                products for its valued clientele: Including Fintech, Medtech
                and Ecommerce solutions. These products are well-suited for
                enhanced productivity and convenience for users. With highly
                seasoned Islamic Bankers and Financial Consultants working with
                Pacific Financial Services - TecStik's parent company -, our
                outfit consistently develops innovative Fintech Applications for
                both Mobile and Desktop Devices.
              </h6>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 about-img"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src={kollectltLogo}
                id="labtopImage"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      <div id="AboutStore">
        <div class="section-title">
          <h2>Our Story</h2>
          <br />
        </div>
      </div>

      <div class="container" id="aboutContain">
        <br />
        <div class="about-title">
          <h2>2002</h2>
          <br />
          <p>
            Pacific FInancial Services PVT. LTD. (PFSL) Incorporated - TecStik’s
            Parent Company
          </p>
        </div>
        <div class="about-title">
          <h2>2002-2010</h2>
          <br />
          <p>PFSL provides Corporate Finance Advisory for global companies.</p>
        </div>
        <div class="about-title">
          <h2>2010</h2>
          <br />
          <p>
            PFSL creates TecStik - a separate Fintech Arm to research, analyse
            and create solutions using Digital Finance.
          </p>
        </div>
        <div class="about-title">
          <h2>2011-2017</h2>
          <br />
          <p>
            TecStik is commissioned to research, analyse and create solutions
            powered by Digital Finance.
          </p>
        </div>
        <div class="about-title">
          <h2>2017-2020</h2>
          <br />
          <p>
            TecStik develops mobile and desktop applications catering to the
            expansive fintech market.
          </p>
        </div>
        <div class="about-title">
          <h2>2017-2020</h2>
          <br />
          <p>
            Using the latest Web 3.0 Technology, IJMA has been built by TecStik
            - a separate subsidiary now, launches Hybrid Apps of Islamic Banking
            and Fintech.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default About;
