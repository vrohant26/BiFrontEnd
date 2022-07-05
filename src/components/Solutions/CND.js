import React from "react";

export default function CND() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="heading text-blue">
              Creative Nomenclature Development
            </div>
            <p className="text-gray">
              A unique name is the foundation of your brand’s identity. It is
              the foremost branding element that your customers will recall and
              associate with your product, service or company. Brand Institute
              has created more brand names than any company in the world. This
              experience, coupled with our responsive service and innovative
              technologies, will drive your project to a successful conclusion
              and a great brand name.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 d-flex flex-column text-center justify-content-center align-items-center">
              <h5 className="fs-4">
                <i className="fas fa-quote-left pr-2 text-yellow"></i>
                <i>
                  Our process combines imagination, collaboration and technology
                  to produce exceptional creative work.
                </i>
                <i className="fas fa-quote-right pl-2 text-yellow"></i>
              </h5>
            </div>
            <div className="col-lg-4">
              <div className="img-box">
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/scottquote-2027x2048.png"
                  alt="..."
                  width={250}
                />
                <span className="name">Scott Piergrossi</span>
                <span className="text-gray">
                  President,<br></br> Operations & Communications
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column text-center justify-content-center align-items-center">
            <img
              src="https://www.brandinstitute.com/wp-content/uploads/2019/11/brand-strategy.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <p>CREATIVE NOMENCLATURE SERVICES</p>

            <ul className="text-gray">
              <li>BRAND NAME</li>
              <li>CORPORATE / DIVISION NAME</li>
              <li>LINE EXTENSION NAME</li>
              <li>SERVICE / PROGRAM NAME</li>
              <li>TAGLINE DEVELOPMENT</li>
              <li>TECHNOLOGY NAME</li>
            </ul>

            <br></br>
            <br></br>

            <p>HEALTHCARE SPECIFIC NOMENCLATURE SERVICES</p>

            <ul className="text-gray">
              <li>BIOLOGIC SUFFIX DEVELOPMENT </li>
              <li> CATEGORY NAME </li>
              <li> CLASS NAME CLINICAL</li>
              <li>TRIAL NAME </li>
              <li>CONDITION / SYNDROME NAME </li>
              <li>HEALTHCARE SPECIFIC NOMENCLATURE SERVICES </li>
              <li>OTC PRODUCT NAME </li>
              <li>FORMULATION / DOSING NAME</li>
              <li>MEDICAL DEVICE / DIAGNOSTIC NAME </li>
              <li>MODIFIER DEVELOPMENT</li>
              <li>NONPROPRIETARY NAME (USAN/INN)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
