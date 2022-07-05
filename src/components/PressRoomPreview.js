import React from "react";
import { Link } from "react-router-dom";

export default function PressRoomPreview() {
  return (
    <>
      {/*<!-- Press/Social Container -->*/}
      <section id="Media" className="mediasection">
        <div className="bg-overlay bg-color"></div>
        <div className="container col-lg-10">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="popularmedia">
                <div className="Presspreview_Header">
                  <h3 className="pressheader">Latest Press Releases</h3>
                  <Link
                    // data-testid="internal-link"
                    className="moremedia"
                    to="/pressroom"
                  >
                    <span className="medialink">MORE MEDIA</span>
                    <svg
                      viewBox="0 0 32 32"
                      fill="#f48709"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="22"
                      className="iconcircle"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 16a1 1 0 011-1h22a1 1 0 110 2H5a1 1 0 01-1-1z"
                        fill="#f48709"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.293 6.293a1 1 0 011.414 0l9 9a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 010-1.414z"
                        fill="#f48709"
                      ></path>
                    </svg>
                  </Link>
                </div>
                {/* Press Preview start */}
                <div className="pressline"></div>
                <div className="PressPreview">
                  <div className="PressPreviewcontainer">
                    <a
                      data-testid="internal-link"
                      className="MediaCardContainerMain"
                      href="/"
                    >
                      <div className="MediaCardContent">
                        <div className="MediaCardContentTop">
                          <div className="presspreviewtext medialink">
                            FDA Approves RADICAVA ORS® (edaravone) Oral
                            Suspension for the Treatment of Amyotrophic Lateral
                            Sclerosis (ALS) by Mitsubishi Tanabe
                          </div>
                          <div className="MediaCardIconWrapper">
                            <svg
                              viewBox="0 0 32 32"
                              fill="#053F68"
                              xmlns="http://www.w3.org/2000/svg"
                              height="22"
                              width="22"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 16a1 1 0 011-1h22a1 1 0 110 2H5a1 1 0 01-1-1z"
                                fill="#053F68"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.293 6.293a1 1 0 011.414 0l9 9a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 010-1.414z"
                                fill="#053F68"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="MediaCardContentBottom">
                          <div className="presscategory">Press Release</div>
                          <div className="pressseperator"></div>
                          <div className="PresspreviewCardDate">
                            May 26, 2022
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="pressline"></div>
                  <div className="PressPreviewcontainer">
                    <a
                      data-testid="internal-link"
                      className="MediaCardContainerMain"
                      href="/"
                    >
                      <div className="MediaCardContent">
                        <div className="MediaCardContentTop">
                          <div className="presspreviewtext medialink">
                            Fujifilm's FIPAS™ Service Offers High-Tech Solution
                            for Infrastructure Maintenance
                          </div>
                          <div className="MediaCardIconWrapper">
                            <svg
                              viewBox="0 0 32 32"
                              fill="#053F68"
                              xmlns="http://www.w3.org/2000/svg"
                              height="22"
                              width="22"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 16a1 1 0 011-1h22a1 1 0 110 2H5a1 1 0 01-1-1z"
                                fill="#053F68"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.293 6.293a1 1 0 011.414 0l9 9a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 010-1.414z"
                                fill="#053F68"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="MediaCardContentBottom">
                          <div className="presscategory">Press Release</div>
                          <div className="pressseperator"></div>
                          <div className="PresspreviewCardDate">
                            May 23, 2022
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="pressline"></div>
                  <div className="PressPreviewcontainer">
                    <a
                      data-testid="internal-link"
                      className="MediaCardContainerMain"
                      href="/"
                    >
                      <div className="MediaCardContent">
                        <div className="MediaCardContentTop">
                          <div className="presspreviewtext medialink">
                            Hyundai Updates Award Winning Venue® SUV for 2022
                          </div>
                          <div className="MediaCardIconWrapper">
                            <svg
                              viewBox="0 0 32 32"
                              fill="#053F68"
                              xmlns="http://www.w3.org/2000/svg"
                              height="22"
                              width="22"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 16a1 1 0 011-1h22a1 1 0 110 2H5a1 1 0 01-1-1z"
                                fill="#053F68"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.293 6.293a1 1 0 011.414 0l9 9a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 010-1.414z"
                                fill="#053F68"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="MediaCardContentBottom">
                          <div className="presscategory">Press Release</div>
                          <div className="pressseperator"></div>
                          <div className="PresspreviewCardDate">
                            May 19, 2022
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="pressline"></div>
                  <div className="PressPreviewcontainer">
                    <a
                      data-testid="internal-link"
                      className="MediaCardContainerMain"
                      href="/"
                    >
                      <div className="MediaCardContent">
                        <div className="MediaCardContentTop">
                          <div className="presspreviewtext medialink">
                            FDA Approves Orphalan's CUVRIOR™ (trientine
                            tetrahydrochloride), the first treatment for
                            Wilson's disease in over five decades
                          </div>
                          <div className="MediaCardIconWrapper">
                            <svg
                              viewBox="0 0 32 32"
                              fill="#053F68"
                              xmlns="http://www.w3.org/2000/svg"
                              height="22"
                              width="22"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 16a1 1 0 011-1h22a1 1 0 110 2H5a1 1 0 01-1-1z"
                                fill="#053F68"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.293 6.293a1 1 0 011.414 0l9 9a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414L25.586 16l-8.293-8.293a1 1 0 010-1.414z"
                                fill="#053F68"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="MediaCardContentBottom">
                          <div className="presscategory">Press Release</div>
                          <div className="pressseperator"></div>
                          <div className="PresspreviewCardDate">
                            May 04, 2022
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/*End of Press Preview */}
              </div>
            </div>

            {/*Social Media Card */}
            <div
              data-component-type="⚙️-section-CardSocial"
              data-component-title="Connect with us"
              id="connect-with-us"
              className="CardSocial"
            >
              <div className="SocialColumnCenter">
                <div className="SocialHeader">
                  <h3 className="SocialHeaderTitle">
                    Follow Us on Social Media
                  </h3>
                  <div className="HeaderSocialLinks">
                    <a
                      href="https://twitter.com/"
                      aria-label="Open profile Twitter tab"
                      data-external-modal="true"
                      data-testid="external-link"
                      className="socialicons"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        viewBox="0 0 24 20"
                        fill="#376586"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M7.55 19.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638A10 10 0 0024 2.555c-.898.4-1.85.66-2.826.774A4.95 4.95 0 0023.339.606 9.897 9.897 0 0120.213 1.8a4.93 4.93 0 00-8.394 4.49A13.985 13.985 0 011.673 1.15a4.93 4.93 0 001.523 6.57 4.93 4.93 0 01-2.23-.614v.06a4.922 4.922 0 003.95 4.829 4.895 4.895 0 01-2.221.084 4.934 4.934 0 004.597 3.422A9.875 9.875 0 010 17.538a13.969 13.969 0 007.55 2.212z"
                          fill="#376586"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      aria-label="Open profile Instagram tab"
                      data-external-modal="true"
                      data-testid="external-link"
                      className="socialicons"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        fill="#376586"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <g clipPath="url(#clip0)" fill="#376586">
                          <path d="M16 5.342c3.471 0 3.882.014 5.253.076 1.268.058 1.956.27 2.414.448.607.235 1.04.517 1.495.972.455.455.737.888.972 1.495.178.458.39 1.146.448 2.414.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.032 4.032 0 01-.972 1.495 4.02 4.02 0 01-1.495.972c-.458.178-1.146.39-2.414.448-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.032 4.032 0 01-1.495-.972 4.02 4.02 0 01-.972-1.495c-.178-.458-.39-1.146-.448-2.414-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414.235-.607.517-1.04.972-1.495a4.02 4.02 0 011.495-.972c.458-.178 1.146-.39 2.414-.448 1.37-.062 1.782-.076 5.253-.076zM16 3c-3.53 0-3.973.015-5.36.078-1.384.063-2.328.283-3.156.605a6.367 6.367 0 00-2.302 1.5 6.368 6.368 0 00-1.5 2.301c-.32.828-.54 1.772-.604 3.156C3.015 12.026 3 12.47 3 16c0 3.53.015 3.974.078 5.36.063 1.384.283 2.328.605 3.156.332.855.776 1.58 1.5 2.302a6.37 6.37 0 002.302 1.5c.827.321 1.772.541 3.155.604 1.387.063 1.83.078 5.36.078 3.531 0 3.974-.015 5.36-.078 1.384-.063 2.33-.283 3.156-.604a6.366 6.366 0 002.303-1.5 6.37 6.37 0 001.5-2.302c.32-.827.54-1.772.604-3.156.063-1.386.078-1.83.078-5.36 0-3.53-.015-3.973-.078-5.36-.063-1.384-.283-2.329-.605-3.156a6.366 6.366 0 00-1.5-2.302 6.372 6.372 0 00-2.302-1.5c-.828-.32-1.772-.54-3.156-.604C19.974 3.015 19.53 3 16 3z"></path>
                          <path d="M16 9.324a6.675 6.675 0 100 13.351 6.675 6.675 0 000-13.35zm0 11.009a4.333 4.333 0 110-8.667 4.333 4.333 0 010 8.667zm6.94-9.711a1.56 1.56 0 100-3.12 1.56 1.56 0 000 3.12z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path
                              fill="#fff"
                              transform="translate(3 3)"
                              d="M0 0h26v26H0z"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      aria-label="Open profile Facebook tab"
                      data-external-modal="true"
                      data-testid="external-link"
                      className="socialicons"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        fill="#376586"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M21.7556 17.7147L22.463 13.0449H18.0376V10.0144C18.0376 8.73677 18.6558 7.49146 20.6379 7.49146H22.65V3.51575C22.65 3.51575 20.824 3.2002 19.0783 3.2002C15.4335 3.2002 13.0514 5.4367 13.0514 9.48564V13.0449H9V17.7147H13.0514V29.0039C13.8637 29.133 14.6964 29.2002 15.5445 29.2002C16.3927 29.2002 17.2253 29.133 18.0376 29.0039V17.7147H21.7556Z"
                          fill="#376586"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/"
                      aria-label="Open profile LinkedIn tab"
                      data-external-modal="true"
                      data-testid="external-link"
                      className="socialicons"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        fill="#376586"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M6.99331 3C5.08615 3 3.84003 4.25132 3.84003 5.89141C3.84003 7.49704 5.04825 8.78288 6.91954 8.78288H6.95555C8.89925 8.78288 10.1091 7.49704 10.1091 5.89141C10.073 4.25132 8.89938 3 6.99331 3Z"
                          fill="#376586"
                        ></path>
                        <path
                          d="M9.74285 11.0689H4.16844V27.8026H9.74285V11.0689Z"
                          fill="#376586"
                        ></path>
                        <path
                          d="M18.4003 13.4381C19.1419 12.2982 20.4664 10.6754 23.4232 10.6754C27.0902 10.6754 29.84 13.0665 29.84 18.2065V27.8026H24.2668V18.8493C24.2668 16.6008 23.4593 15.0657 21.4435 15.0657C19.9038 15.0657 18.9862 16.1005 18.5839 17.0995C18.4362 17.457 18.4002 17.9571 18.4002 18.4573V27.8026H12.8273C12.8273 27.8026 12.9012 12.6385 12.8273 11.0689H18.4003V13.4381Z"
                          fill="#376586"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  {/*End of Social Media Header */}
                </div>
                {/*Start Post of Social Media  */}

                <div data-testid="column-content" className="ColumnContentPost">
                  <div className="pressline"></div>
                  <div className="WrapperPost">
                    <div className="HorizontalRulePost"></div>
                    <div className="SocialCardWrapperPost">
                      <a
                        href="https://twitter.com/tweetlink"
                        data-external-modal="true"
                        data-testid="external-link"
                        className="SocialCardContainer"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="SocialCardContent">
                          <div className="SocialCardContentTop">
                            <div className="SocialCardHeading">
                              Developing a global brand name for a new
                              pharmaceutical or biologic product has never been
                              more challenging. Your naming agency partner must
                              have the ability to develop commercially
                              compelling and legally viable name...
                            </div>
                          </div>
                          <div className="SocialCardContentBottom">
                            <div className="SocialCardType">LinkedIn</div>
                            <div className="StyledDot"></div>
                            <div className="SocialCardDate">4 days ago</div>
                          </div>
                        </div>
                        <div className="ImageWrapper">
                          <img
                            src="https://media-exp1.licdn.com/dms/image/C5622AQGikBdFG9Ih9Q/feedshare-shrink_800/0/1652883432830?e=1656547200&v=beta&t=aah5uN3hYe0vgAqA30FfhX7BGaWvju9O-fXjpBGtyRw"
                            alt="Related_LinkedIn_Image"
                            className="Image-sc"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="pressline"></div>
                  <div className="Wrapper-sc-1jmiq9l-9 kPfuhO">
                    <div className="HorizontalRule"></div>
                    <div className="SocialCardWrapper">
                      <a
                        href="https://twitter.com/tweetlink"
                        data-external-modal="true"
                        data-testid="external-link"
                        className="SocialCardContainer"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="SocialCardContent">
                          <div className="SocialCardContentTop">
                            <div className="SocialCardHeading">
                              In person conferences are back! Brand Institute is
                              pleased to share a few moments from Korea BIO with
                              Joohan (John) Song and Kurt (Kyu Pil) Yoon, and
                              International Trademark Association (INTA) 2022
                              with Tiffany Rex, E...
                            </div>
                          </div>
                          <div className="SocialCardContentBottom">
                            <div className="SocialCardType">LinkedIn</div>
                            <div className="StyledDot"></div>
                            <div className="SocialCardDate">1 Week ago</div>
                          </div>
                        </div>
                        <div className="ImageWrapper">
                          <img
                            src="https://media-exp1.licdn.com/dms/image/C5622AQHuxDUIDycftw/feedshare-shrink_2048_1536/0/1653407344428?e=1656547200&v=beta&t=ULVNNeGe6Zy0DPNHKs4w3jMcBkQ5V-_E8iYWJuUH7Ko"
                            alt="Related_LinkedIn_Image"
                            className="Image-sc"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="pressline"></div>
                  <div className="Wrapper">
                    <div className="HorizontalRule"></div>
                    <div className="SocialCardWrapper">
                      <a
                        href="https://twitter.com/moderna_tx/status/1529069702630227970"
                        data-external-modal="true"
                        data-testid="external-link"
                        className="SocialCardContainer"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="SocialCardContent">
                          <div className="SocialCardContentTop">
                            <div className="SocialCardHeading">
                              Brand Institute will be exhibiting at the INTA
                              2022 annual meeting in Washington DC from April 30
                              through May 4. Stop by booth #303 in the Brand
                              Marketplace to meet Tiffany Rex, Esq. and Steve
                              Anderson to discuss...
                            </div>
                          </div>
                          <div className="SocialCardContentBottom">
                            <div className="SocialCardType">Twitter</div>
                            <div className="StyledDot"></div>
                            <div className="SocialCardDate">5 days ago</div>
                          </div>
                        </div>
                        <div className="ImageWrapper">
                          <img
                            src="https://media-exp1.licdn.com/dms/image/C5622AQFwF9wDDvajAg/feedshare-shrink_800/0/1651260606095?e=1656547200&v=beta&t=KHmeYGq96fseZGc-NPxDQ5oIfeH_q8c1G0_EBX4_r_c"
                            alt="Related_LinkedIn_Image"
                            className="Image-sc"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
