import React from "react";

export default function MarketResearch() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="heading text-blue">Market Research</div>
            <p className="text-gray">
              Brand Institute’s Market Research services were designed to bring
              clarity, objectivity and actionable insight to your important
              branding decisions. Whether you seek to determine which name is
              best suited for your product, how your target audience feels about
              your brand and its competitors, or understand which logo best
              represents the big idea behind your brand, Brand Institute has a
              portfolio of market research services to meet your needs and
              objectives.
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
                  src="https://www.brandinstitute.com/images/minnie-mr.png"
                  alt="..."
                  width={250}
                />
                <span className="name">Minnie Suh</span>
                <span className="text-gray">
                  Director,<br></br> Market Research & Brand Strategy
                </span>
              </div>
            </div>
            <div className="col-lg-8 d-flex flex-column text-center justify-content-center align-items-center">
              <h5 className="fs-4">
                <i className="fas fa-quote-left pr-2 text-yellow"></i>
                <i>
                  Through data and analytics, we reveal opportunities that help
                  clients better understand, position and name one of their most
                  valuable assets…their brand.
                </i>
                <i className="fas fa-quote-right pl-2 text-yellow"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column text-center justify-content-center align-items-center">
            <div className="fs-1 text-blue">LINGUISTICS SCREENINGS</div>
            <p>
              With over 25 years of experience, a vast linguistics panel from
              all over the world and with more than 300,000 names screened at
              this time, Brand Institute conducts linguistics screenings on name
              candidates entering market research in over 40 languages.
              Linguists screen the names’ prefix, suffix and infix for potential
              linguistic issues and possible associations.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://www.brandinstitute.com/wp-content/uploads/2019/12/globe.gif"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://www.brandinstitute.com/wp-content/uploads/2019/12/cloud_.gif"
                alt="..."
              />
            </div>
            <div className="col-lg-6 d-flex flex-column text-center justify-content-center align-items-center">
              <div className="fs-1 text-blue">CONSUMER BRAND NAME RESEARCH</div>
              <p>
                Companies have learned that there is nothing more important when
                it comes to impacting consumer behavior than having a powerful
                and memorable brand identity.<br></br> <br></br> Our Consumer
                Brand Name Research service is designed to identify and validate
                potential consumer brand names in order to ensure these are in
                line with potential customers purchase decisions, brand
                emotional and functional elements, and customer expectations are
                understood.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column text-center justify-content-center align-items-center">
            <div className="fs-1 text-blue">LOGO/DESIGN</div>
            <p>
              Part of a successful brand is its visual identity; the name is not
              enough to make a lasting impact in the future of the brand. Along
              with our Corporate Identity Research service, our Logo/Design
              Research service provides clients with a better look at their
              brands potential visual identity to ensure it meets the brand
              needs.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://www.brandinstitute.com/wp-content/uploads/2019/12/colorletter.gif"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column text-center justify-content-center align-items-center">
              <img
                src="https://www.brandinstitute.com/wp-content/uploads/2019/07/Traditionalresearch_Hi-res-1.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6 py-5">
              <p>
                In addition to the services listed above, our Market Research
                experts can create fully customizable qualitative and
                quantitative surveys to fit your needs.
              </p>
              <ul className="text-gray">
                <li> CATEGORY NAME RESEARCH</li>
                <li> CLASS NAME RESEARCH</li>
                <li> CONDITION / SYNDROME NAME RESEARCH </li>
                <li> CONSUMER BRAND NAME RESEARCH </li>
                <li> CORPORATE IDENTITY RESEARCH </li>
                <li> CUSTOMER SATISFACTION STUDIES </li>
                <li> LINE EXTENSION NAME RESEARCH</li>
                <li> LINGUISTIC RESEARCH </li>
                <li> MEDICAL DEVICE NAME RESEARCH</li>
                <li> NONPROPRIETARY NAME RESEARCH </li>
                <li> PHARMACEUTICAL NAME RESEARCH</li>
                <li> TAGLINE RESEARCH </li>
                <li> VISUAL IDENTITY RESEARCH</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
