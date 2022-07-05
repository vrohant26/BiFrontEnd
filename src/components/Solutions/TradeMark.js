import React from "react";

export default function TradeMark() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="heading text-blue">Trademarks</div>
            <p className="text-gray">
              The BrandSearch(TM) trademark screening process allows our clients
              to utilize the legal knowledge and extraordinary linguistic skills
              of our attorneys and specialists to deliver professional and
              client-tailored trademark analysis. Using search techniques
              custom-engineered to each project and client, our specially
              retained in-house attorneys, analysts, and paralegals at Brand
              Institute screen potential names against existing marks, using
              global databases and specialized software.
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
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/Roly-quote-1879x2048.png"
                  alt="..."
                  width={250}
                />
                <span className="name">Rogelio Reyes</span>
                <span className="text-gray">General Counsel</span>
              </div>
            </div>
            <div className="col-lg-8 d-flex flex-column text-center justify-content-center align-items-center">
              <h5 className="fs-4">
                <i className="fas fa-quote-left pr-2 text-yellow"></i>
                <i>
                  Our seasoned team of in-house attorneys, analysts, and
                  paralegals at Brand Institute screen potential names against
                  existing marks, using global databases and specialized
                  software.
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
            <p>
              Names likely to be approved by trademark offices and regulatory
              bodies will then be recommended for further investigation, and by
              the end of the process you will receive:
            </p>

            <ul className="text-gray">
              <li>a comprehensive and easy-to-understand Trademark Report;</li>
              <li>when disruptive competition are changing the market</li>
              <li>
                a complete Executive Summary of which names are recommended for
                further investigation;
              </li>
              <li>
                reliable access to our in-house attorneys for further
                consultation regarding the reasons for our recommendations.
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <img
              src="https://www.brandinstitute.com/wp-content/uploads/2019/12/shutterstock_258465935.jpg"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
