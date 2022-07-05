import React from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <>
      <section>
        <div>
          <img
            src="./assets/BrandInstitute/images/wallback4.jpg"
            className="mainbanner"
            alt="wavebackground"
          />
          <div
            className="container"
            style={{ marginTop: "-3%", display: "flex" }}
          >
            <div className="containerheadingtop col-6 col-lg-6">
              <h2
                className="heading wow fadeIn greatbrands"
                style={{
                  display: "inlineBlock",
                  fontSize: "62px",
                  lineHeight: "0.9",
                  fontFamily: "D-DIN-Bold, sans-serif",
                  marginTop: "20%",
                }}
              >
                The World’s #1 Naming Company
              </h2>
              <p className="heading wow fadeIn greatbrandssub">
                Why do companies choose Brand Institute? <br />
                Our people, our process and a proven track record of exceptional
                results.
              </p>
            </div>
            <div
              className="containerheadingtop col-6 col-lg-6"
              style={{ marginTop: "5%" }}
            >
              {/*********************CARDS**********************/}

              <div className="row align-items-center  explorecontainer ">
                {/*Healthcare Card*/}

                <div
                  className="col-6 col-md-6 col-lg-3 wow fadeIn experience-card"
                  data-wow-delay=".5s"
                >
                  <Link to="/experience">
                    <img
                      src="/assets/BrandInstitute/images/brandhealthcare.jpg"
                      draggable="false"
                      style={{
                        borderRadius: "0px",
                        zIndex: "2",
                      }}
                      alt="pills"
                    />
                    <div className="heading3 wow fadeIn bannerheading">
                      Healthcare Branding
                    </div>
                    <div>
                      Explore <i className="arrow up"></i>
                    </div>
                  </Link>
                </div>
                {/*CorpID Card*/}
                <div
                  className="col-6 col-md-6 col-lg-3 wow fadeIn experience-card"
                  data-wow-delay=".5s"
                >
                  <Link to="/experience">
                    <img
                      src="/assets/BrandInstitute/images/brandcorpid.jpg"
                      draggable="false"
                      style={{
                        borderRadius: "0px",
                      }}
                      alt="corporate Id"
                    />
                    <div className="heading3 wow fadeIn bannerheading">
                      Corporate Identity
                    </div>
                    <div>
                      Explore <i className="arrow up"></i>
                    </div>
                  </Link>
                </div>
                {/*Consumer Card*/}
                <div
                  className="col-6 col-md-6 col-lg-3 wow fadeIn experience-card"
                  data-wow-delay=".5s"
                >
                  <Link to="/experience">
                    <img
                      src="/assets/BrandInstitute/images/brandconsumer.jpg"
                      draggable="false"
                      style={{
                        borderRadius: "0px",
                      }}
                      alt="pills"
                    />{" "}
                    <div className="heading3 wow fadeIn bannerheading">
                      Consumer / B2B
                    </div>
                    <div>
                      Explore <i className="arrow up"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div style={{ marginTop: "-5%" }}>
                <p
                  className="wow fadeIn"
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    paddingTop: "0px",
                    color: "#000000",
                  }}
                >
                  <u className="wow fadeIn" style={{ fontSize: "12px" }}>
                    CHOOSE YOUR INTEREST
                  </u>
                </p>
              </div>
              {/**********END OF CARDS*********/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
