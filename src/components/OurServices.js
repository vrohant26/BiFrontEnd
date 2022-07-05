import React from "react";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <>
      <section
        className="services-sec mb-5 position-relative"
        id="services-sec"
      >
        <div className="container">
          <div className="row col-7 col-lg-7">
            <h4
              className="heading"
              style={{ fontSize: "50px", paddingBottom: "2%" }}
            >
              OUR SOLUTIONS
            </h4>
          </div>
          <div className="row service-row">
            {/*Card1*/}
            <div className="col-4 col-lg-4 cards">
              <Link to="/solutions/BrandStrategy">
                <div className="card wd-bg-white cardtext brandstrategycard">
                  <div className="cardbadge">
                    <div className="news-badge">
                      <div className="round-badge">
                        {/*<img
                        src="/IMAGEBANNER.svg"
                        alt="Card Banner"
                        className="image-style-nir-asset-small"
                      />*/}
                      </div>
                    </div>
                    {/*<h5 className="news-badge-category"></h5>*/}
                  </div>
                  <div className="content ">
                    <div>
                      <div className="nir-widget--field nir-widget--news--teaser">
                        {/*<img
                        src="assets/BrandInstitute/images/icons/bulb_colored.png"
                        className="cardicon"
                        alt="bulb"
                      />*/}

                        <h2 className="cardheader">Brand Strategy</h2>
                        <p className="subtext">Solution</p>
                        <p
                          className="justifytextsub"
                          style={{ paddingTop: "20px" }}
                        >
                          With the support of our global team of experts, we
                          will propose a unique solution, tailored to your
                          business challenge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*Card2 */}
            <div className="col-4 col-lg-4 cards">
              <Link to="/solutions/CND">
                <div className="card wd-bg-white cardtext namedevelopmentcard">
                  <div className="cardbadge">
                    <div className="news-badge">
                      <div className="round-badge">
                        {/*<img
                        src="/IMAGEBANNER.svg"
                        alt="Card Banner"
                        className="image-style-nir-asset-small"
                      />*/}
                      </div>
                    </div>
                    <div className="news-badge-line"></div>
                    {/*<h5 className="news-badge-category">
                    Creative Nomenclature Development
                  </h5>*/}
                  </div>
                  <div className="content">
                    <div>
                      <div className="nir-widget--field nir-widget--news--teaser">
                        {/*<img
                        src="assets/BrandInstitute/images/icons/bargraph_colored.png"
                        className="cardicon"
                        alt="bargraph"
                      />*/}
                        <h2 className="cardheader">Name Development</h2>
                        <p className="subtext">Solution</p>
                        <p
                          className="justifytextsub"
                          style={{ paddingTop: "20px" }}
                        >
                          A unique name that is the foremost branding element
                          that your customers will recall and associate with.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*Card3*/}
            <div className="col-4 col-lg-4 cards">
              <Link to="/solutions/MarketResearch">
                <div className="card wd-bg-white cardtext marketresearchcard">
                  <div className="cardbadge">
                    <div className="news-badge">
                      <div className="round-badge">
                        {/*<img
                        src="/IMAGEBANNER.svg"
                        alt="Card Banner"
                        className="image-style-nir-asset-small"
                      />*/}
                      </div>
                    </div>
                    <div className="news-badge-line"></div>
                    {/*<h5 className="news-badge-category">Market Research</h5>*/}
                  </div>
                  <div className="content">
                    <div>
                      <div className="nir-widget--field nir-widget--news--teaser">
                        {/*<img
                        src="assets/BrandInstitute/images/icons/mag_colored.png"
                        className="cardicon"
                        alt="mag"
                      />*/}
                        <h2 className="cardheader">Market Research</h2>
                        <p className="subtext">Solution</p>
                        <p
                          className="justifytextsub"
                          style={{ paddingTop: "20px" }}
                        >
                          Successful brands convey a sense of trust and
                          reliability through inherent core values which, over
                          time, build brand loyalty and equity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            {/*Card4*/}
            <div className="col-4 col-lg-4 cards">
              <Link to="/solutions/Regulatory">
                <div className="card wd-bg-white cardtext regulatorycard">
                  <div className="cardbadge">
                    <div className="news-badge">
                      <div className="round-badge">
                        {/*<img
                        src="/IMAGEBANNER.svg"
                        alt="Card Banner"
                        className="image-style-nir-asset-small"
                      />*/}
                      </div>
                    </div>
                    <div className="news-badge-line"></div>
                    {/*<h5 className="news-badge-category">Regulatory</h5>*/}
                  </div>
                  <div className="content">
                    <div>
                      <div className="nir-widget--field nir-widget--news--teaser">
                        {/*<img
                        src="assets/BrandInstitute/images/icons/form_colored.png"
                        className="cardicon"
                        alt="form"
                      />*/}
                        <h2 className="cardheader">Regulatory</h2>
                        <p className="subtext">Solution</p>
                        <p
                          className="justifytextsub"
                          style={{ paddingTop: "20px" }}
                        >
                          DSI is dedicated to improving the safe use of
                          Pharmaceuticals by providing a state-of-the-art model
                          for proprietary and nonproprietary nomenclature
                          research.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*Card5 */}
            <div className="col-4 col-lg-4 cards">
              <Link to="/solutions/TradeMark">
                <div className="card wd-bg-white cardtext trademarkcard">
                  <div className="cardbadge">
                    <div className="news-badge">
                      <div className="round-badge">
                        {/*<img
                        src="/IMAGEBANNER.svg"
                        alt="Card Banner"
                        className="image-style-nir-asset-small"
                      />*/}
                      </div>
                    </div>
                    <div className="news-badge-line"></div>
                    {/*<h5 className="news-badge-category">Trademarks</h5>*/}
                  </div>
                  <div className="content">
                    <div>
                      <div className="nir-widget--field nir-widget--news--teaser">
                        {/*<img
                        src="assets/BrandInstitute/images/icons/tm_colored.png"
                        className="cardicon"
                        alt="tm"
                      />*/}
                        <h2 className="cardheader"> Trademarks</h2>
                        <p className="subtext">Solution</p>
                        <p
                          className="justifytextsub"
                          style={{ paddingTop: "20px" }}
                        >
                          In-house trademark attorneys and paralegals to partner
                          and assist your attorneys in this crucial stage of
                          name development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/*Card6*/}
            <div className="col-4 col-lg-4 cards">
              <Link to="/solutions/VisualIdentity">
                <div className="card wd-bg-white cardtext visualidentitycard">
                  <div className="cardbadge">
                    <div className="news-badge">
                      <div className="round-badge">
                        {/*<img
                        src="/IMAGEBANNER.svg"
                        alt="Card Banner"
                        className="image-style-nir-asset-small"
                      />*/}
                      </div>
                    </div>
                    <div className="news-badge-line"></div>
                    {/*<h5 className="news-badge-category">Visual Identity</h5>*/}
                  </div>
                  <div className="content">
                    <div>
                      <div className="nir-widget--field nir-widget--news--teaser">
                        {/*<img
                        src="assets/BrandInstitute/images/icons/visual_colored.png"
                        className="cardicon visual"
                        alt="visual"
                      />*/}
                        <h2 className="cardheader">Visual Identity</h2>
                        <p className="subtext">Solution</p>
                        <p
                          className="justifytextsub"
                          style={{ paddingTop: "20px" }}
                        >
                          Our expertise in the field of nomenclature development
                          with a seasoned team of graphic designers to create a
                          coherent and resonant visual identity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
