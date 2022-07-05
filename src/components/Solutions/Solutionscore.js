import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Solutionscore() {
  window.scrollTo(0, 0);
  const scrollIntoView = () => {
    const view = document.getElementById("content");
    view.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <h2 className="heading text-blue">Our Services</h2>
            <p className="text-gray">
              Brand Institute provides a robust portfolio of brand
              strategy/architecture, naming, research, regulatory and design
              services.
            </p>
            <br></br>
            <p className="text-gray">
              Wherever your product is in its lifecycle, Brand Institute offers
              tailored, cutting-edge identity solutions ensuring creativity,
              trademark risk awareness, regulatory insight and resonant design
              execution.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row text-center">
              <div className="col-lg-4">
                <NavLink
                  activeclassname="active"
                  to="BrandStrategy"
                  onClick={scrollIntoView}
                  className="solutions-card"
                >
                  <i className="fa fa-chess"></i>
                  <h2>Brand Strategy</h2>
                </NavLink>
              </div>
              <div className="col-lg-4">
                <NavLink
                  activeclassname="active"
                  to="CND"
                  onClick={scrollIntoView}
                  className="solutions-card"
                >
                  <i className="fa fa-user-tag"></i>
                  <h2>Creative Nomenclature Development</h2>
                </NavLink>
              </div>
              <div className="col-lg-4">
                <NavLink
                  activeclassname="active"
                  to="MarketResearch"
                  onClick={scrollIntoView}
                  className="solutions-card"
                >
                  <i className="fa fa-book"></i>
                  <h2>Market Research</h2>
                </NavLink>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <NavLink
                  activeclassname="active"
                  to="Regulatory"
                  onClick={scrollIntoView}
                  className="solutions-card"
                >
                  <i className="fa fa-copyright"></i>
                  <h2>Regulatory</h2>
                </NavLink>
              </div>
              <div className="col-lg-4">
                <NavLink
                  activeclassname="active"
                  to="TradeMark"
                  onClick={scrollIntoView}
                  className="solutions-card"
                >
                  <i className="fa fa-trademark"></i>
                  <h2>Trademark</h2>
                </NavLink>
              </div>
              <div className="col-lg-4">
                <NavLink
                  activeclassname="active"
                  to="VisualIdentity"
                  onClick={scrollIntoView}
                  className="solutions-card"
                >
                  <i className="fa fa-pen"></i>
                  <h2>Visual Identity</h2>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="divider"></div>
      </div>

      <Outlet />
    </>
  );
}
