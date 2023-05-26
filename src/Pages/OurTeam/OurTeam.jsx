import Header from '../../components/Header/Header';
import React, { useState } from "react";
import smartphone from '../../assests/smartphone.png'
import Imag2 from '../../assests/Imag2.png'
import { Slide, Zoom } from 'react-slideshow-image';
import './OurTeam.css';
import Footer from "../../components/Footer/Footer";

export default function OurTeam() {
    return (
        <div>
            <Header />
            <section id="hero" class="hero d-flex align-items-center section-bg">
                <div class="container">
                    <div class="row justify-content-between gy-5">
                        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B" }}>Our Team</p>
                            <h4 data-aos="fade-up" style={{ color: "black" }}>Led by the professionals listed above, TecStik and The IJMA Platform is primarily operated by professionals who have prominent reputations across The Islamic Banking Sprectrum.</h4>
                            <br />
                            <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B", fontSize: "30px" }}>Mr. Khalil A. Hasan - Chairman</p>
                            <h4 data-aos="fade-up" style={{ color: "black" }}>Mr. Khalil A. Hasan has over 57 years of experiencein Banking and Finance with local and multinational institutions in diverse roles including but not limited to:</h4>
                            <div style={{
                                background: "#E6E6E6", margin: "7px", padding: "7px", borderRadius: "42px",
                                fontSize: "21px", fontFamily: "200px"
                            }}>
                                <ul>
                                    <li>Trade Finance</li>
                                    <li>Retail Banking</li>
                                    <li> Investment Banking</li>
                                    <li> Islamic Banking</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                            <img src="https://i.ibb.co/GJSYYh4/laptop1.png"class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />

            <section id="Ourteam" class="Ourteam">
                <div class="container" data-aos="fade-up">

                    <div class="row gx-0">
                        {/* <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <img src={Imag2} class="img-fluid" alt="" />
                        </div> */}
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">
                                <h2>Mr. Bilal Saleem - Chief Executive, MBA</h2>
                                <br />
                                <h5>Bilal Saleem is the Director of TecStik, bringing you IJMA. His extensive expertise in Banking and Finance leading Pacific Financial Services Pvt. Ltd, has allowed TecStik to make diligent efforts for rectifying Islamic Banking.</h5>
                                <br />
                                <ul>
                                    <li>Over 26 years of experience in Corporate Finance, Treasury and Investment Banking with several successful transactions to his credit.</li>
                                    <br />
                                    <li> An Entrepreneur with his own consultancy firm providing advisory to several local and International clientele. </li>
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

                    <div class="row gx-0">
                        {/* <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <img src={Imag2} class="img-fluid" alt="" />
                        </div> */}
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">
                                <h2>Mr. Hammad Ahmed, CFA, CMA, IFQ as Product Manager</h2>
                                <br />
                                <h5>IJMA was the brainchild of TecStik’s Partner - Muhammad Hammad Ahmed. Over 16 years of experience in Corporate Finance, Commercial Banking, Investment Banking ,Islamic Finance and Fintech.</h5>
                                <br />
                                <ul>
                                    <li>Played Instrumental Role in setting up of Islamic Banking window of Chase Bank in Kenya. </li>
                                    <br />
                                    <li>Advisor to Malaysian Islamic Investment Bank on fintech initiatives. </li>
                                    <br />
                                    <li>Holds prestigious qualifications in finance including CFA,CMA,IFQ </li>
                                    <br />
                                    <li>possess multiple international Fintech accreditations. </li>
                                    <br />
                                    <li>Position holder in International Blockchain examination.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            <section id="Ourteam" class="Ourteam">
                <div class="container" data-aos="fade-up">

                    <div class="row gx-0">
                        {/* <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <img src={Imag2} class="img-fluid" alt="" />
                        </div> */}
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">
                                <h2>Mr. Azfar Saleem - Marketing Director, Bachelor’s with Honors</h2>
                                <br />
                                <h5>Creativity is a million tiny acts of daily practice, those with strategy and discipline. Azfar - TecStik and IJMA’s Marketing Director and Partner creates engaging strategies to popularize the concept powering IJMA with The Technology that drives it.</h5>
                                <br />
                                <ul>
                                    <li>over 10 years of Digital Marketing Experience working with The Top International Technology Firms </li>
                                    <br />
                                    <li>An Undergraduate with Honours from Kingston University, London, UK. Studying Anthropology, he is able to oversee and produce all the expectancies of professionals in Islamic Finance. How Technology can be used to improve and compliment The Sector</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <br />
            <Footer />
        </div >
    )
}
