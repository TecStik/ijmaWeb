import React from "react";
import "./Home.css";
import Imag2 from "../../assests/Imag0.png";
import mobileIcon from "../../assests/mobileIcon.png";
import { Slide } from "react-slideshow-image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  const slides = [
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
  ];
  const images = [
    "https://i.ibb.co/phKFyrw/laptop-1.png",
    "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png",
    "https://i.ibb.co/zZGXhHj/laptop-3-01.png",
    "https://i.ibb.co/sgTV4Tv/laptop-4-01.png",
    "https://i.ibb.co/SBKzNg8/laptop-5-01.png",
    "https://i.ibb.co/7WsMX04/laptop-6-01.png",
    "https://i.ibb.co/QYWZKRj/laptop-7.png",
    "https://i.ibb.co/6YMKwdN/laptop-8-01.png",
    "https://i.ibb.co/c8Br4nx/laptop-9-01.png",
    "https://i.ibb.co/TH6Cpm6/laptop-10-01.png",
    "https://i.ibb.co/MhNhwSt/laptop-11-01.png",
    "https://i.ibb.co/rxCRxMJ/laptop2-01.png",
    // 'images/slide_6.jpg',
    // 'images/slide_7.jpg'
  ];

  const containerStyles = {
    width: "65%",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <>
      <div>
        <Header />

        <section id="hero" class="hero d-flex align-items-center section-bg">
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{ color: "#11366B" }}
                >
                  Embrace IJMA for Sharia-Compliant Banking
                </p>
                <br />
                <br />
                <h2 data-aos="fade-up" style={{ color: "#11366B" }}>
                  Unleash Technology for Sharia-Compliant Financial Solutions
                </h2>

                <div class="content">
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>
                      Are you seeking an alternative to the expensive, risky,
                      and inefficient nature of Traditional Islamic banking and
                      Financial Services? The Hybrid (Mobile/Desktop) IJMA
                      Platform is an innovative solution driven by advanced
                      technologies, prepared to revolutionise the approach of
                      IBFIs handling transactions and contracts. By addressing
                      criticisms and ensuring genuine Sharia compliance, IJMA
                      brings groundbreaking tactics to the industry for its
                      users.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                <Slide>
                  {images.map((each, index) => (
                    <img
                      key={index}
                      style={{ width: "70%", alignItems: "center" }}
                      id="slideImage"
                      src={each}
                    />
                  ))}
                </Slide>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row gx-0">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={Imag2} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div
                class="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div class="content">
                  <h2>Empowering Islamic Banking with Distinctive Features</h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-5%" }}>
                    <li>
                      Stand out from conventional banks while strengthening your
                      Islamic Banking Operations with IJMA. The Hybrid
                      Application offers enhanced regulatory compliance,
                      real-time automated reporting, and superior controls that
                      minimize the need for physical inspections. and audits.
                      Embrace transparency and security, as the Blockchain
                      Technology - Powering IJMA, functions to diminish the
                      risks of forgery and ensures the integrity of your
                      transactions. Paving the Way to Authentically Digitalized
                      Islamic Banking.
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="container">
            <div class="section-title">
              <h2>Overcome the Challenges of Islamic Banking with IJMA</h2>
              <br />
              <p>
                The lack of transparency and the burden of manual documentation
                can present significant challenges. With IJMA, entire Islamic
                Banking transactions are executed digitally in just a few
                clicks/taps, while ensuring compliance with Sharia principles.
                There may no longer be delays caused by continuous
                back-and-forths or pre-signed post-dated documents. Rest assured
                that The Solution meets Sharia Requirements, allowing you to
                conduct all transactions seamlessly. With Enhanced Efficiency
                and Reduced Costs.
              </p>
              <p>
                {/* With IJMA, you'll enjoy streamlined processes, reduced
                monitoring requirements, and associated costs. Say goodbye to
                the overwhelming requirements of regulatory reporting and
                filing, because The IJMA Platform simplifies these tasks for
                banking users of our website. */}
              </p>
            </div>
          </div>
        </section>

        <section id="about" class="about">
          <div
            class="container"
            data-aos="fade-up"
            style={{ marginTop: "-5%" }}
          >
            <div class="row gx-0">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="content">
                  <h2>
                    IJMA is aligned with the vision of Digitalized Islamic
                    Banking.
                  </h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>
                      By leveraging IJMA, you can complement the country's
                      digital transformation efforts. Embrace the possibility of
                      integrating with The Raast Network and stay ahead of the
                      curve.
                    </li>
                    <br />
                    <li>
                      Join us on this groundbreaking journey as we reshape
                      Islamic Banking. Embrace innovation, improve efficiency,
                      and ensure true Sharia Compliance using IJMA. Contact us
                      now to learn more about our transformative solution and
                      how it can benefit your organization. Let's revolutionizs
                      Islamic Banking and Financial Services with IJMA
                    </li>
                  </ul>
                </div>
              </div>

              <div
                class="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img
                  src={mobileIcon}
                  id="labtopImage"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* <div class="container">
          <div class="section-title">
            <h2><span></span>Overcome the Challenges of Murabaha with IJMA</h2>
            <br />
            <p>
              Stand out from conventional banks and strengthen your Islamic Banking window with IJMA. IJMA offers enhanced regulatory compliance, real-time automated reporting, and superior controls that minimize the need for physical inspections and audits. Embrace transparency and security, as Blockchain Technology functions to diminish the risks of forgery and ensures the integrity of your transactions. Paving the Way to Authentically Digitalized Islamic Banking.
            </p>
          </div>
        </div> */}

        {/*  */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
