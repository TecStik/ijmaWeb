import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {

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

    <div>
      <footer class="text-center text-lg-start text-white" style={{ background: "#11366B" }}>

        <div class="d-flex justify-content-between p-4" style={{ background: "#8DCEAD" }}>
          <div class="me-5"></div>
          <div>
            <a href={() => false} class="text-white me-3"> Find us online :</a>
            <a href="https://www.facebook.com/profile.php?id=100087185961853" target="_blank" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/Tec_Stik" target="_blank" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/company/tecstik/about/?viewAsMember=true" target="_blank" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>


        <div>
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold text-white">Ijma</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ background: "#7c4dff", height: 2, width: 60 }} />
                <p>
                  The lack of complete ownership transfer and the burden of manual documentation can present significant challenges. With IJMA, the transfer of risk and ownership is genuine, ensuring compliance with Sharia principles.
                </p>
              </div>


              <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold text-white">Benefits of IJMA</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  {/* <Link to="/product?tab=6" class="text-white"> */}
                  Enhanced efficiency
                  {/* </Link> */}
                </p>
                <p>
                  {/* <Link to="/webAndMobile?tab=6" class="text-white"> */}

                  Improved Shariah-Compliance
                  {/* </Link> */}
                </p>
                <p>
                  {/* <Link to="/webAndMobile?tab=6" class="text-white"> */}

                  Lowered Monitoring Costs
                  {/* </Link> */}
                </p>
                <p>
                  {/* <Link to="/product?tab=6" class="text-white"> */}
                  Streamlined Regulatory Reporting
                  {/* </Link> */}
                </p>
                <p>
                  {/* <Link to="/product?tab=6" class="text-white"> */}
                  Cost-Savings Partially Passed to Customers
                  {/* </Link> */}
                </p>
              </div>


              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold text-white ">IJMA Platform</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <Link to="/?tab=6" class="text-white">
                    Our Accreditation
                  </Link>
                  {/* <a href={() => false} class="text-white">
                    Blockchain Development
                  </a> */}
                </p>
                <p>
                  {/* <Link to="/IJMA-About?tab=6" class="text-white">
            Our Story
                  </Link> */}
                  {/* <a href={() => false} class="text-white">
                    Full Stack Development
                  </a> */}
                </p>
                <p>
                  <Link to="/IJMA-OurTeam?tab=6" class="text-white">
                    Our Team
                  </Link>
                </p>
                {/* <p>
                  <Link to="/cloud?tab=6" class="text-white">
                    Cloud Computing
                  </Link>
                </p> */}
              </div>


              <div class="col-md-2 col-lg-2 col-xl-3 mx-auto mb-md-0 ">

                <h6 class="text-uppercase fw-bold text-white">Contact Us</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <i class="fas fa-home mr-3"></i>  Business Centre, II Chundrigar Road
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>
                  <a href="mailto:info@tecstik.com" class="text-white">info@tecstik.com</a>
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> (92-21) 32442392-93
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright :
          <a class="text-white ml-2" href={() => false}>
            TecStik.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
