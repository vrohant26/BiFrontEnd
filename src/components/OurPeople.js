import React from "react";
import { Link } from "react-router-dom";

export default function OurPeople() {
  return (
    <>
      <section className="team-sec mb-5 position-relative" id="team-sec">
        <div className="container">
          <div className="row inner-team-sec padding-top padding-bottom">
            <div className="col-12 col-lg-6 text-center text-lg-left">
              <div className="team-detail wow fadeInLeft">
                <h4 className="heading">OUR PEOPLE</h4>
                <p className="textwhy justifytextsub">
                  Brand Institute is a team of experts who are knowledgeable and
                  responsive. Our team can help you with all aspects of your
                  brand, from strategy to implementation. We are here to help
                  you grow your business and build your brand.
                </p>
                <Link
                  to="/About#team"
                  className="btn mt-5 anim-btn rounded-pill"
                >
                  Learn about our Leadership <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="team-area wow fadeInRight">
                <img
                  src="/assets/BrandInstitute/images/teammain.png"
                  alt="..."
                />
                {/*<div className="row no-gutters team-carousel owl-carousel owl-theme">
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="https://www.brandinstitute.com/wp-content/uploads/2019/11/jd-new.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">James L. Dettore, M.A</h4>
                        <p className="team-designation">Chairman &amp; Ceo</p>
                      </div>
                    </div>
                  </div>
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-bill.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">William Johnson</h4>
                        <p className="team-designation">
                          Co-Chief Executive Officer &amp; President
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="	https://www.brandinstitute.com/wp-content/uploads/2019/11/web-dave-2.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">David Dettore</h4>
                        <p className="team-designation">
                          President, U.S. Western Division &amp; Asia
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-courtney.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">Courtney Kilroy</h4>
                        <p className="team-designation">
                          Divisional President - Pacific Northwest
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="	https://www.brandinstitute.com/wp-content/uploads/2019/11/web-jerry-1.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">Jerry Phillips</h4>
                        <p className="team-designation">
                          President, Client Relations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-brian-2.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">Brian Frasca</h4>
                        <p className="team-designation">
                          Divisional President, Midwestern U.S.
                        </p>
                      </div>
                    </div>
                  </div>
  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
