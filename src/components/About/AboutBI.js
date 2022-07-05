import React, { useState, useEffect } from "react";
import Mission from "./Mission";
import Story from "./Story";
import Team from "./Team";

export default function AboutBI({ none }) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [id, setid] = useState("");

  useEffect(() => {
    //Direct scoll to leadership from homepage (learn about leadership button)
    if (window.location.hash) {
      let elem = document.getElementById(window.location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  if (id === "") {
    window.scrollTo(0, 0);
  } else {
    const x = document.getElementById(`${id}`);
    x.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section id="start" className="gap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 inline">
              <div className=" col-lg-6 ">
                <div>
                  <h2 className="heading2">About us</h2>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "3px",
                      marginTop: "10%",
                    }}
                  >
                    Discover:
                  </p>
                  <ul className="inline subheading">
                    <li
                      className="about-submenu "
                      onClick={() => setid("mission")}
                    >
                      Mission
                    </li>
                    <li
                      className="about-submenu "
                      onClick={() => setid("story")}
                    >
                      Our Story
                    </li>
                    <li
                      className="about-submenu "
                      onClick={() => setid("team")}
                    >
                      Leadership
                    </li>
                  </ul>
                </div>
                <div style={{ marginTop: "20px" }}>
                  Find information about our divisional leadership team and our
                  operations leadership team.
                </div>
              </div>
              <div className="col-lg-7 " style={{ marginTop: "-5%" }}>
                <img
                  src="/assets/Brandinstitute/images/leadership2.png"
                  alt="Leadership"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="mission">
        <Mission />
      </section>
      <section id="story" className={none ? "" : "d-none"}>
        <Story />
      </section>
      <section id="team" className={none ? "" : "d-none"}>
        <Team />
      </section>
    </>
  );
}
