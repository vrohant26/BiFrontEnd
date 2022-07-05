import React from "react";
import AboutBI from "./AboutBI";
import AboutDSI from "./AboutDSI";

export default function About({ toggle, move }) {
  //   window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button
        onClick={toggle}
        className={`${
          move
            ? "right-arrow right-arrow-position"
            : "left-arrow left-arrow-position"
        } btn d-flex justify-content-center align-items-center`}
      >
        <i className={move ? "fa fa-angle-right" : "fa fa-angle-left"}></i>
      </button>

      <div className="overflow-clip" id="About-sec">
        <div className={move ? "go-right " : "go-left"}>
          <div className="bi-dsi ">
            <div className="bi">
              <AboutBI none={move} />
            </div>
            <div className="dsi">
              <AboutDSI />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
