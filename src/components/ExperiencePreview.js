import React from 'react';

export default function ExperiencePreview() {
  return (
    <>
      <section className="experience-sec" id="experience-sec">
        <div className="row align-items-center explorecontainer">
          {/*Healthcare Card*/}
          <div
            className="col-12 col-md-12 col-lg-1 wow fadeIn"
            data-wow-delay=".5s"
          >
            {/*<div className="banneroverlay">
              <div className="parentbanneroverlay">
                <div className="leftcontainer col-lg-12 nopadding ">
                  <div className="headingblock"></div>
                </div>
              </div>
            </div>*/}
          </div>
          <div
            className="col-12 col-md-12 col-lg-3 wow fadeIn experience-card"
            data-wow-delay=".5s"
          >
            <img
              src="/assets/BrandInstitute/images/brandhealthcare.jpg"
              draggable="false"
              style={{
                borderRadius: '0px',
                zIndex: '2',
              }}
              alt="pills"
            />
            <div className="heading wow fadeIn bannerheading">
              Healthcare Branding
            </div>
            <div>
              Explore <i className="arrow up"></i>
            </div>
          </div>
          {/*CorpID Card*/}
          <div
            className="col-12 col-md-12 col-lg-1 text-center wow fadeIn"
            data-wow-delay=".5s"
          >
            <div className="banneroverlay">
              <div className="parentbanneroverlay">
                <div>
                  <div className="headingblock"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-12 col-lg-3 wow fadeIn experience-card"
            data-wow-delay=".5s"
          >
            <img
              src="/assets/BrandInstitute/images/brandcorpid.jpg"
              draggable="false"
              style={{
                borderRadius: '0px',
              }}
              alt="corporate Id"
            />
            <div className="heading wow fadeIn bannerheading">
              Corporate Identity
            </div>
            <div>
              Explore <i className="arrow up"></i>
            </div>
          </div>
          {/*Consumer Card*/}
          <div
            className="col-12 col-md-12 col-lg-1 wow fadeIn"
            data-wow-delay=".5s"
          >
            <div className="banneroverlay">
              <div className="parentbanneroverlay">
                <div className="leftcontainer col-lg-12 nopadding ">
                  <div className="headingblock"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-12 col-lg-3 wow fadeIn experience-card"
            data-wow-delay=".5s"
          >
            <img
              src="/assets/BrandInstitute/images/brandconsumer.jpg"
              draggable="false"
              style={{
                borderRadius: '0px',
              }}
              alt="pills"
            />{' '}
            <div className="heading wow fadeIn bannerheading">
              Consumer / B2B
            </div>
            <div>
              Explore <i className="arrow up"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
