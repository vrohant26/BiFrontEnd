import React from "react";

export default function VisualIdentity() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="heading text-blue">Visual Identity</div>
            <p className="text-gray">
              Brand Institute’s design services combine our expertise in the
              field of nomenclature development with a seasoned team of graphic
              designers to create a coherent and resonant visual identity. Our
              methodology focuses on consistency across all marketing materials,
              from packaging to key components of sales and merchandising. An
              exceptionally-executed logo and visual identity has the power to
              differentiate your brand in today’s competitive marketplace.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="img-box">
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/AMAURIS-quote-1776x2048.png"
                  alt="..."
                  width={250}
                />
                <span className="name">Amauris Diaz</span>
                <span className="text-gray">
                  Senior Vice President,<br></br> Visual Identity
                </span>
              </div>
            </div>
            <div className="col-lg-8 d-flex flex-column text-center justify-content-center align-items-center">
              <h5 className="fs-4">
                <i className="fas fa-quote-left pr-2 text-yellow"></i>
                <i>
                  Design is an idea made visible. An exceptionally-executed
                  visual identity has the power to differentiate a brand in
                  today’s competitive marketplace.
                </i>
                <i className="fas fa-quote-right pl-2 text-yellow"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-7">
            <img
              src="https://www.brandinstitute.com/wp-content/uploads/2019/11/ipad-logo.png"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <p>Services Include:</p>

            <ul className="text-gray">
              <li>BROCHURE</li>
              <li>LABELING & PACKAGING</li>
              <li>LOGO DEVELOPMENT</li>
              <li>LOGO GUIDELINES</li>
              <li>STATIONERY SYSTEM</li>
              <li>STYLE GUIDE</li>
              <li>WEBSITE DESIGN</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
