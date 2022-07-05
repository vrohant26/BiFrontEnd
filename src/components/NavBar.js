import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar({ setMove }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/About") {
      setMove(true);
    }
  }, [setMove, location.pathname]);

  return (
    <>
      {/*Header Start*/}
      <header id="home">
        <div className="inner-header">
          {/*<!--colored-lines-->*/}
          <div className="bluebar color-lines row no-gutters">
            <div className="col-4 bg-red"></div>
            <div className="col-4 bg-purple"></div>
            <div className="col-4 bg-green"></div>
          </div>
          {/*<!--upper-nav-->*/}
          <div className="upper-nav">
            <div className="container">
              <div className="row">
                <div className="col-2"></div>
                <div
                  className="col-10"
                  style={{ display: "inline-flex", justifyContent: "flex-end" }}
                >
                  <ul
                    className="top-personal-info "
                    style={{ display: "inline-flex", justifyContent: "center" }}
                  >
                    <li>
                      <a href="/#">
                        <i className="las la-phone"></i> +1 305 374 2500
                      </a>
                    </li>
                    <li>
                      <a href="mailto:Info@brandinstitute.com">
                        <i className="las la-envelope"></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="top-social-links ">
                    <li>
                      <a href="/#" className="link-holder fb">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="link-holder twit">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="link-holder link-in">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="link-holder insta">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*<!--main nav-->*/}
          <div className="main-navigation">
            <div className="container">
              <div className="row">
                <div className="col-4 col-lg-3">
                  <Link className="navbar-brand simple-nav-logo" to="/">
                    <img
                      src="/assets/BrandInstitute/images/bilogo.png"
                      alt="logo"
                    />
                  </Link>
                  <Link className="navbar-brand fixed-nav-logo" to="/">
                    <img
                      src="/assets/BrandInstitute/images/bilogo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="col-8 col-lg-9 simple-navbar">
                  <nav className="navbar navbar-expand-lg">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav  ml-auto">
                        <li className="nav-item ">
                          <Link className="nav-link" to="/">
                            HOME
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link to="/About" className="nav-link">
                            ABOUT
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/solutions" className="nav-link">
                            SOLUTIONS
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/experience" className="nav-link">
                            EXPERIENCE
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/pressroom" className="nav-link">
                            PRESS ROOM
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Contact">
                            CONTACT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <ul className="top-social-links fixed-nav-links">
                    <li>
                      <a href="/#" className="link-holder fb">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="link-holder twit">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="link-holder link-in">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="link-holder insta">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*<!--toggle btn-->*/}
          <i
            style={{ cursor: "pointer" }}
            className="sidemenu_btn"
            id="sidemenu_toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </i>
        </div>
        {/*<!--Side Nav-->*/}
        <div className="side-menu hidden side-menu-opacity">
          <div className="bg-overlay"></div>
          <div className="inner-wrapper">
            <span className="btn-close" id="btn_sideNavClose">
              <i></i>
              <i></i>
            </span>
            <div className="container">
              <div className="row w-100 side-menu-inner-content">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <a
                    href="../index-creative-startup.html"
                    className="navbar-brand"
                  >
                    <img
                      src="/assets/BrandInstitute/images/bilogo.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="col-12 col-lg-8">
                  <nav className="side-nav w-100">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          ABOUT
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          SOLUTIONS
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          EXPERIENCE
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          PRESS ROOM
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-12 col-lg-4 d-flex align-items-center">
                  <div className="side-footer text-white w-100">
                    <div className="menu-company-details">
                      <span>+1 305 374-2500</span>
                      <span>Info@brandinstitute.com</span>
                    </div>
                    <ul className="social-icons-simple">
                      <li>
                        <a className="facebook-text-hvr" href="/#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram-text-hvr" href="/#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram-text-hvr" href="/#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram-text-hvr" href="/#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="text-white">Where Great Brands Begin!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <i id="close_side_menu"></i>
      </header>
      {/*Header End*/}
    </>
  );
}
