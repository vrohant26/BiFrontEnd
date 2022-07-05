import React from 'react';
import colormovement from '../components/svg/colormovement.svg';

export default function StatsSection() {
  return (
    <>
      <section
        className="services-sec "
        id="services-sec"
        style={{
          backgroundImage: `url(${colormovement})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="heading-area">
                <h4 className="share75 wow slideInLeft">
                  WE PARTNER ON <span>OVER 75%</span>
                  <br /> OF DRUG NAME APPROVALS EVERY YEAR
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="image-holder wow slideInRight">
                <img
                  src="/assets/BrandInstitute/images/earth.png"
                  alt="earth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Graph */}
      {/*<!-- Start Healthcare -->*/}
      <section className="counters" id="counter">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-6 wow" data-wow-delay=".5s">
              <div className="green-box">
                <div className="box-content">
                  {/*<h4>Brand Institute is the</h4>*/}
                  <h1>Global leader in healthcare naming</h1>
                  <p className="justifytext">
                    <i className="fa fa-check" aria-hidden="true"></i>{' '}
                    Nonproprietary (USAN/INN) names <br />
                    <i className="fa fa-check" aria-hidden="true"></i>{' '}
                    Pharmaceutical and Biologic Brand Names
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Biologic
                    Suffixes
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Vaccine
                    Brand Names
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Clinical
                    Trial Brand Names
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Medical
                    Device Brand Names
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i>{' '}
                    Diagnostic Brand Names
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> OTC
                    Product Brand Names
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Line
                    Extensions/Modifiers
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-12 col-lg-6 text-center wow slideInRight counterspace"
              data-wow-delay=".5s"
            >
              {/*<!-- Counter no.1 -->*/}
              <div className="counter shiftright">
                <h5 className="count">1,064</h5>
                <h4>Healthcare Clients</h4>
              </div>
              {/*<!-- Counter no.2 -->*/}
              <div className="counter shiftright">
                <h5 className="count">3,717</h5>
                <h4>Total Healthcare Names</h4>
              </div>
              {/*<!-- Counter no.3 -->*/}
              <div className="counter shiftright">
                <h5 className="count">1,159</h5>
                <h4>USAN/INN Names</h4>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- End Healthcare -->*/}
        {/*<!-- Start CONSUMER/CORPORATE ID -->*/}

        <div className="container ">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-6 wow" data-wow-delay=".5s">
              <div className="green-box2">
                <div className="box-content">
                  {/*<h4>Brand Institute is the</h4>*/}
                  <h1>
                    A LEGACY OF EXCELLENCE IN CORPORATE NAMING & CONSUMER
                    IDENTITY
                  </h1>
                  <p className="justifytext">
                    <i className="fa fa-check" aria-hidden="true"></i> Corporate
                    / Divison Name
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Tagline
                    Developement
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Consumer
                    Product Name
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Corporate
                    Identity Research
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Brand
                    Audit
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Brand
                    Positioning
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Logos
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i>{' '}
                    Stationery System
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i>{' '}
                    Brouchures
                    <br />
                    <i className="fa fa-check" aria-hidden="true"></i> Website
                    Developement
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-12 col-lg-6 text-center wow slideInRight counterspace"
              data-wow-delay=".5s"
            >
              {/*<!-- Counter no.1 -->*/}
              <div className="counter shiftright">
                <h5 className="count">410</h5>
                <h4>Consumer/B2B Clients</h4>
              </div>
              {/*<!-- Counter no.2 -->*/}
              <div className="counter shiftright">
                <h5 className="count">899</h5>
                <h4>Total Consumer/B2B Names</h4>
              </div>
              {/*<!-- Counter no.3 -->*/}
              <div className="counter shiftright">
                <h5 className="count">86</h5>
                <h4>Corporate Identities</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End CORPORATE ID -->*/}
    </>
  );
}
