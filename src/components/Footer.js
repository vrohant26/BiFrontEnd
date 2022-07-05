import React from 'react';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div>
        <div className="container">
          <div className="hrline gap"></div>
        </div>
        <div>
          <div className="container col-lg-12">
            <div className="row align-items-center pushup col-lg-12">
              <div className="row align-items-left col-lg-2">
                <a href="/">
                  <img
                    src="/assets/BrandInstitute/images/bilogo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="row sitemaprow col-lg-7">
                <ul className="text-padding sitemap">
                  <li>
                    <a href="//">ABOUT BI</a>
                  </li>
                  <li>
                    <a href="//">ABOUT DSI</a>
                  </li>
                  <li>
                    <a href="//">SERVICES</a>
                  </li>
                  <li>
                    <a href="//">OUR TEAM</a>
                  </li>
                </ul>
                <ul className="text-padding sitemap">
                  <li>
                    <a href="//">CONSUMER EXPERIENCE</a>
                  </li>
                  <li>
                    <a href="//">HEALTHCARE EXPERIENCE</a>
                  </li>
                  <li>
                    <a href="//">NONPROPRIETARY EXPERINCE</a>
                  </li>
                  <li>
                    <a href="//">COVID-19 EXPERIENCE</a>
                  </li>
                </ul>
                <ul className="text-padding sitemap">
                  <li>
                    <a href="//">PRESS ROOM</a>
                  </li>
                  <li>
                    <a href="//">FACT SHEET</a>
                  </li>
                  <li>
                    <a href="//">CONTACT US</a>
                  </li>
                  <li>
                    <a href="//">CAREERS</a>
                  </li>
                </ul>
                <ul className="text-padding sitemap">
                  <li>
                    <a href="//">LINKEDIN</a>
                  </li>
                  <li>
                    <a href="//">FACEBOOK</a>
                  </li>
                  <li>
                    <a href="//">INSTAGRAM</a>
                  </li>
                  <li>
                    <a href="//">TWITTER</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center col-lg-12">
            <ul className="inline align-items-center text-padding footer-layout">
              <li>
                <u>
                  <a href="//">BASEL</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">BOSTON</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">CHICAGO</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">DALLAS</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">FRANKFURT</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">LONDON</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">LOS ANGELES</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">MIAMI</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">MONTREAL</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">NEW YORK</a>
                </u>
              </li>
            </ul>
            <ul className="inline  align-items-center text-padding footer-layout">
              <li>
                <u>
                  <a href="//">MUMBAI</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">OTTAWA</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">RALEIGH-DURHAM</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">ROCKVILLE</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">SAN FRANCISCO</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">SAN JUAN</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">SÃO PAULO</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">SEOUL</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">TOKYO</a>
                </u>
              </li>
              <li>
                <u>
                  <a href="//">TORONTO</a>
                </u>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <hr className="hrline"></hr>
          <div className="row align-items-left">
            <div className="col-sm-8">
              <ul className="inline footer-layout">
                <li>
                  © 1993 - {date} BRAND INSTITUTE INC. ALL RIGHTS RESERVED.
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="inline footer-layout text-padding">
                <li>
                  <u>
                    <a href="//">Member Services</a>
                  </u>
                </li>
                <li>
                  <u>
                    <a href="//">Privacy Policy</a>
                  </u>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row bluerow">.</div>
        </div>
      </div>
    </>
  );
}
