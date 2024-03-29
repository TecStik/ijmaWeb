import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assests/logo.png";
import { Helmet } from "react-helmet";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Helmet>
        <title>
          {window.location.pathname.slice(1) === ""
            ? "IJMA-Home"
            : window.location.pathname.slice(1)}
        </title>
      </Helmet>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img
              src={Logo}
              alt=""
              id="logo"
              height={170}
              style={{ marginTop: "7%" }}
            />
            <span>IJMA</span>
            {/* <i className="fas fa-arrow-down">IJMA</i> */}
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/IJMA-About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Operator
              </Link>
              {/* <div class="dropdown">
                <div id="services">About Operator<i className="fa fa-caret-down"></i></div>
                <div class="dropdown-Industries">
                  <>
                    <> <Link to="/">Our Story</Link></>
                    <> <Link to="/IJMA-OurTeam">Our team</Link></>
                  </>

                </div>
              </div> */}
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/IJMA-Join"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Why join IJMA?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/IJMA-OurTeam"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Team
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Platform
              </Link>
              <div class="dropdown">
                <div id="services">
                  Our Platform <i className="fa fa-caret-down"></i>
                </div>
                <div class="dropdown-Industries">
                  <>
                    <Link to="/IJMA-OurTeam">Our team</Link>
                  </>
                </div>
              </div>
            </li> */}
            <li className="nav-item">
              <Link
                exact
                to="/IJMA-Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      {/* 2nd Nav */}

      <nav className="Twonavbar">
        <div className="Twonav-container">
          <h4 id="TwoNavText">Gateway to Islamic Banking</h4>
        </div>
      </nav>

      <br />
      <br />
      <br />
    </>
  );
}
