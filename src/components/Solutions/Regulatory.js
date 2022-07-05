import React from "react";
import { Content } from "../../data/data";

export default function Regulatory() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="heading text-blue">Regulatory</div>
            <p className="text-gray">
              The Drug Safety Institute (DSI), a subsidiary of Brand Institute,
              was founded in 2004. DSI is dedicated to improving the safe use of
              pharmaceuticals by providing a global, state-of-the-art, research
              model for proprietary (brand and line extension) and
              nonproprietary (USAN/INN) nomenclature research.
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
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/cristina-quote-2048x2048.png"
                  alt="..."
                  width={250}
                />
                <span className="name">Cristina Milesi</span>
                <span className="text-gray">
                  Vice President,<br></br> Safety Research
                </span>
              </div>
            </div>
            <div className="col-lg-8 d-flex flex-column text-center justify-content-center align-items-center">
              <h5 className="fs-4">
                <i className="fas fa-quote-left pr-2 text-yellow"></i>
                <i>
                  Brand Institute embraces the goal of regulatory agencies in
                  protecting the public health by ensuring the safety, efficacy,
                  and security of brand names for human and veterinary drugs,
                  biological products, and medical devices.
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
              In addition, DSI offers a medication error prevention analysis
              associated with labeling of pharmaceuticals, biological products
              and medical devices. DSI also offers various risk management
              strategies to our clients.<br></br>
              <br></br> Services Include:<br></br> USAN/INN/Stem Naming –
              Provide strategy on stem direction and options through appropriate
              INN and USAN nomenclature precedents/competitive compound
              analysis/mechanistic activity for a product in clinical
              development to obtain a worldwide nonproprietary name.
            </p>
          </div>
          <div className="col-lg-5">
            <img
              src="https://www.brandinstitute.com/wp-content/uploads/2019/07/Regulators-.jpg"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row reg-list">
          <ul>
            {Content.map((data) => {
              return (
                <li key={data.heading} style={{ padding: "50px 0" }}>
                  <div className="container">
                    <span className="text-blue">{data.heading}</span> -
                    {data.desc}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
