import "./Home.css";
import React, { useState } from "react";
import smartphone from '../../assests/smartphone.png'
import Imag2 from '../../assests/Imag2.png'
import mobileIcon from '../../assests/mobileIcon.png'
import { Slide, Zoom } from 'react-slideshow-image';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Home() {


  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',


  }
  const slideImages = [
    {
      url: 'https://i.ibb.co/GJSYYh4/laptop1.png',
      caption: 'Slide 1'
    },
    {
      url: 'https://i.ibb.co/GJSYYh4/laptop1.png',
      caption: 'Slide 2'
    },
    {
      url: 'https://i.ibb.co/GJSYYh4/laptop1.png',
      caption: 'Slide 3'
    },
  ];

  const images = [
    'https://i.ibb.co/phKFyrw/laptop-1.png',
    'https://i.ibb.co/Jdg09c9/laptop-2-01-01.png',
    'https://i.ibb.co/zZGXhHj/laptop-3-01.png',
    'https://i.ibb.co/sgTV4Tv/laptop-4-01.png',
    'https://i.ibb.co/SBKzNg8/laptop-5-01.png',
    'https://i.ibb.co/7WsMX04/laptop-6-01.png',
    'https://i.ibb.co/QYWZKRj/laptop-7.png',
    'https://i.ibb.co/6YMKwdN/laptop-8-01.png',
    'https://i.ibb.co/c8Br4nx/laptop-9-01.png',
    'https://i.ibb.co/TH6Cpm6/laptop-10-01.png',
    'https://i.ibb.co/MhNhwSt/laptop-11-01.png',
    'https://i.ibb.co/rxCRxMJ/laptop2-01.png',
    // 'images/slide_6.jpg',
    // 'images/slide_7.jpg'
  ];

  return (
    <>
      <div>
        <Header />


        <section id="hero" class="hero d-flex align-items-center section-bg">
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div
                class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B" }}>Embrace IJMA for Shariah-Compliant Banking</p>
                <br />
                <br />
                <h2 data-aos="fade-up" style={{ color: "#11366B" }}>Unleash Technology for Sharia-Compliant Financial Solutions</h2>

                <div class="content">
                  <ul style={{ listStyleType: "none" }}>
                    <li>Are you seeking an alternative to the expensive, risky, and inefficient nature of traditional Islamic banking and financial services? Your search ends here! IJMA presents an innovative solution driven by blockchain technology, ready to revolutionize the way IBFIs handle transactions and contracts. By addressing criticisms and ensuring genuine Sharia compliance, we bring a groundbreaking approach to the industry.</li>
                  </ul>
                </div>
                {/* <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" class="btn-book-a-table">Book a Table</a>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch
                    Video</span></a>
              </div> */}
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                <Slide>
                  {
                    images.map((each, index) => <img key={index} style={{ width: "70%", alignItems: "center"}} id="slideImage" src={each} />)
                  }
                </Slide>
              </div>
            </div>
            {/* <br />
          <br /> */}
          </div>
        </section>

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={Imag2} class="img-fluid" alt=""id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <h2>Overcome the Challenges of Murabaha with IJMA</h2>
                  <br />
                  {/* <h3>Join IJMA as an IBFI</h3> */}
                  <br />
                  <ul style={{ listStyleType: "none" }}>
                    <li>The lack of complete ownership transfer and the burden of manual documentation can present significant challenges. With IJMA, the transfer of risk and ownership is genuine, ensuring compliance with Sharia principles. There may no longer be delays caused by continuous back-and-forths or pre-signed post-dated documents. Rest assured that The Solution meets Sharia requirements, allowing you to conduct Murabaha transactions seamlessly.Enhanced Efficiency and Reduced Costs.</li>
                    <br />
                    <li> With IJMA, you'll enjoy streamlined processes, reduced monitoring requirements, and associated costs. Bid farwell to excessive regulatory reporting and filing burdens, as The IJMA Platform streamlines these tasks on your behalf.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="content">
            <h2>Empowering Islamic Banking with Distinctive Features</h2>
            <br />
            <br />
            <ul style={{ listStyleType: "none" }}>
              <li></li>
            </ul>
          </div> */}

          
        <div class="container">
          <div class="section-title">
          <h2>Empowering Islamic Banking with Distinctive Features</h2>
            <br />
            <p>Stand out from conventional banks and strengthen your Islamic Banking window with IJMA. IJMA offers enhanced regulatory compliance,real-time automated reporting, and superior controls that minimize the need for physical inspections and audits. Embrace transparency and security, as Blockchain Technology functions to diminish the risks  of forgery and ensures the integrity of your transactions. Paving the Way to Authentically Digitized Islamic Banking. </p>
          </div>
        </div>

        </section>


        <section id="about" class="about">

          <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={mobileIcon} class="img-fluid" alt="" id="ImgeSize"/>
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <h2>IJMA is aligned with the vision of digitalized Islamic Banking.</h2>
                  <br />
                  {/* <h3>Join IJMA as an IBFI</h3> */}
                  <br />
                  <ul style={{ listStyleType: "none" }}>
                    <li>By leveraging IJMA, you can complement the country's digital transformation efforts.Embrace the possibility of integrating with The Raast Network and stay ahead of the curve.</li>
                    {/* <br /> */}
                    {/* <li> We understand the concerns surrounding Islamic Banks' operations, which often closely resemble conventional banking systems controlled by the State Bank of Pakistan. IJMA addresses these major criticisms, providing a viable alternative that aligns with the true spirit of Sharia law.</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <div class="container">
          <div class="section-title">
            <h2><span></span>Overcome the Challenges of Murabaha with IJMA</h2>
            <br />
            <p>
              Stand out from conventional banks and strengthen your Islamic Banking window with IJMA. IJMA offers enhanced regulatory compliance, real-time automated reporting, and superior controls that minimize the need for physical inspections and audits. Embrace transparency and security, as Blockchain Technology functions to diminish the risks of forgery and ensures the integrity of your transactions. Paving the Way to Authentically Digitized Islamic Banking.
            </p>
          </div>
        </div> */}






        <div class="container">
          <div class="section-title">
            <h2>Experience the Future of Islamic Banking Today</h2>
            <br />
            <p>Join us on this groundbreaking journey as we reshape the Islamic Banking landscape. Embrace innovation, improve efficiency, and ensure true Sharia compliance with IJMA. Contact us now to learn more about our transformative solution and how it can benefit your organization. Let's revolutionize Islamic Banking and Financial Services with IJMA<br />
            </p>
          </div>
        </div>

        {/* <div class="container">
          <div class="section-title">
            <h2><span></span>IJMA is aligned with the <br /> vision of digitalized Islamic Banking.</h2>
            <br />
            <p>By leveraging our platform, you can complement the country's digital transformation efforts. Embrace the possibility of integrating with the Raast network and stay ahead of the curve.
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
