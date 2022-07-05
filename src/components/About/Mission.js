import React from "react";

export default function about_banner() {
  return (
    <>
      {/*<div className="Mainbanner col-lg-12 nopadding">
        <div className="leftbanner col-lg-6 nopadding"></div>
        <div className="rightbanner col-lg-6 nopadding"></div>
  </div>*/}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 inline">
              <div className=" col-lg-6">
                <img
                  src="/assets/BrandInstitute/images/image10.png"
                  style={{ borderRadius: "25px" }}
                  alt="..."
                />
              </div>
              <div className=" col-lg-6 popularmedia">
                <div>
                  <div className="field">
                    <h2 className="heading">MISSION</h2>
                    <p className="justifytextsub">
                      To provide best-in-class strategy, name development,
                      trademark screening, market/safety research and visual
                      identity services to our valued, global clientele,
                      delivered by 300+ of the most experienced and
                      forward-thinking branding professionals in our industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 inline">
              <div className=" col-lg-12 popularmedia">
                <div>
                  <div className="field">
                    <h2 className="heading">VISION</h2>
                    <p className="justifytextsub">
                      To maintain and grow our leadership role in nomenclature
                      and brand identity development by always listening and
                      responding promptly to our client’s needs, fostering
                      cross-functional “internal” team collaboration, advancing
                      the quality of our services via in-house departmental
                      experts, leading technology, and providing the industry’s
                      most innovative, proven and results-driven methodology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 inline">
              <div className=" col-lg-6 popularmedia">
                <div>
                  <div className="field">
                    <h2 className="heading">BRAND PROMISE</h2>
                    <p className="justifytextsub">
                      To exceed our client’s expectations every day by providing
                      the highest quality deliverables supported by outstanding
                      service and unparalleled expertise, at an exceptional
                      value; and to support our team of experts with the most
                      sophisticated, leading-edge infrastructure, resulting in
                      innovative, next generation nomenclature offerings, and a
                      supportive working environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" style={{ paddingTop: "6%" }}>
                <img
                  src="/assets/BrandInstitute/images/image11.jpg"
                  className="rounded"
                  style={{ borderRadius: "25px" }}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
