import React from "react";
import { dsiTeam } from "../../data/data";

export default function AboutDSI() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <section id="start" className="gap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 inline">
              <div className=" col-lg-11 mb-5">
                <div>
                  <h2 className="heading2">Drug Safety Institute</h2>
                </div>
                <div style={{ marginTop: "20px" }}>
                  Drug Safety Institute (DSI), a wholly owned regulatory
                  subsidiary of Brand Institute, was founded in 2004 with the
                  goal of improving the safe use of pharmaceuticals by providing
                  a global, state-of-the-art research model for proprietary
                  (brand name and line extension) and nonproprietary (USAN/INN)
                  pharmaceutical and healthcare nomenclature. Among its many
                  services, DSI offers a medication error prevention analysis
                  associated with labeling of pharmaceuticals, biological
                  products and medical devices, as well various risk management
                  strategies and regulatory submission deliverables.<br></br>
                  <br></br> DSI’s Leadership Team (see below) is comprised of
                  full-time experts who formerly served as key naming, packaging
                  and labeling regulatory officials at FDA, EMA, Health Canada,
                  AMA and WHO. In their former roles, many of our regulatory
                  experts authored the name safety guidance currently in use at
                  their respective agencies. Our DSI Experts have played a key
                  role in making Brand Institute #1 in drug naming worldwide
                  with 14 consecutive years holding a majority global Share of
                  Market Regulatory Name Approvals.<br></br>
                  <br></br> DSI’s methodology for proprietary name safety
                  testing is in full compliance with FDA, EMA, Health Canada,
                  Japan’s Ministry of Health, Labour and Welfare and all other
                  global regulatory agencies for which we provide name safety
                  research.<br></br>
                  <br></br> For immediate regulatory support, contact your local
                  Brand Institute office at the bottom of this page.
                </div>
              </div>
              {/* <div className="col-lg-5" style={{ marginTop: "-5%" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/11/DSI-LOGO.png"
                  alt="Leadership"
                />
              </div>
              <div></div> */}
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <img
                src="https://www.brandinstitute.com/wp-content/uploads/2019/12/todd-1.png"
                alt="..."
                style={{ borderRadius: "25px", backgroundColor: "white" }}
              />
            </div>
            <div className=" col-lg-7 popularmedia">
              <div>
                <div className="field">
                  <div className="icon-holder">
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <p className="justifytextsub">
                    Drug Safety Institute is dedicated to improving the safe use
                    of pharmaceuticals by building safety into all of our drug
                    names.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-12 popularmedia">
            <div>
              <div className="field">
                <h2 className="heading">MISSION</h2>
                <p className="justifytextsub">
                  Mission To provide the global pharmaceutical and biotech
                  communities with regulatory expertise, strategy, and best
                  practices in brand name and nonproprietary (USAN/INN) name
                  development, name safety research, and comprehensive
                  regulatory solutions.
                </p>
              </div>
            </div>
          </div>

          <h3 className="heading">Leadership Team</h3>
          <div className="row">
            {dsiTeam.map((data) => {
              return (
                <div
                  key={data.id}
                  style={{ cursor: "pointer" }}
                  className=" col-lg-3 cardspace"
                >
                  <div
                    className="wow slideInLeft profile card"
                    style={{ height: "420px" }}
                  >
                    <img
                      className="photo"
                      src={data.imageUrl}
                      alt="Alejandro"
                      style={{
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    />
                    <div className="littlelogo">
                      <img
                        src="./assets/Brandinstitute/images/Team/bibadge2.png"
                        alt="BI Badge"
                        style={{
                          marginTop: "-6%",
                          position: "relative",
                          zIndex: "80",
                        }}
                      />
                    </div>
                    <div className="overlaybadge">
                      <h3 className="name">{data.name}</h3>
                      <p className="title">{data.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
