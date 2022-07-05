import React, { useState, useRef } from "react";
import {
  PressRelease,
  FeaturedNews,
  AllNews,
  NewsLetters,
} from "../../data/data.js";

export default function Pressarticles() {
  window.scroll(0, 0);

  const [Options, setOptions] = useState("2022");
  const [Data, setData] = useState(AllNews);

  const activeAllNews = useRef();
  const activeFeaturedNews = useRef();
  const activePressRelease = useRef();
  const activeNewsLetter = useRef();

  const allNews = () => {
    setData(AllNews);
    activeAllNews.current.classList.add("active-press");
    activeFeaturedNews.current.classList.remove("active-press");
    activePressRelease.current.classList.remove("active-press");
    activeNewsLetter.current.classList.remove("active-press");
  };
  const featuredNews = () => {
    setData(FeaturedNews);
    activeFeaturedNews.current.classList.add("active-press");
    activePressRelease.current.classList.remove("active-press");
    activeAllNews.current.classList.remove("active-press");
    activeNewsLetter.current.classList.remove("active-press");
  };
  const pressRelease = () => {
    setData(PressRelease);
    activePressRelease.current.classList.add("active-press");
    activeFeaturedNews.current.classList.remove("active-press");
    activeAllNews.current.classList.remove("active-press");
    activeNewsLetter.current.classList.remove("active-press");
  };
  const newsLettters = () => {
    setData(NewsLetters);
    activeNewsLetter.current.classList.add("active-press");
    activePressRelease.current.classList.remove("active-press");
    activeFeaturedNews.current.classList.remove("active-press");
    activeAllNews.current.classList.remove("active-press");
  };

  return (
    <div className="articles">
      <div className="container">
        <div className="Heading my-4">
          <p className="heading-title">{Data[0].category}</p>
          <div className="year d-flex align-items-center">
            <p className="mx-1 ">Select Year</p>
            <select
              className="form-select"
              defaultValue="2022"
              onChange={(e) => setOptions(e.target.value)}
              aria-label="Default select example"
            >
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div style={{ padding: "0px" }} className="col-lg-3  bg-white">
            <p className="text-center border-end  bg-blue text-white">
              <b>Navigation</b>
            </p>
            <ul style={{ padding: "0 15px" }}>
              <li
                className="active-press"
                ref={activeAllNews}
                onClick={allNews}
              >
                All News
              </li>
              <li ref={activeFeaturedNews} onClick={featuredNews}>
                Featured News
              </li>
              <li ref={activePressRelease} onClick={pressRelease}>
                Press Release
              </li>
              <li ref={activeNewsLetter} onClick={newsLettters}>
                Newsletters
              </li>
            </ul>
          </div>
          <div style={{ padding: "0px" }} className="col-lg-9 bg-white ">
            <p className="text-center bg-blue text-white">
              <b>Articles</b>
            </p>
            <div className="news overflow-auto" style={{ height: "100%" }}>
              {Data.map((data) => {
                if (data.year.toString() === Options) {
                  return (
                    <div key={data.title} className="news-card">
                      <div className="date">{data.date}</div>
                      <div className="title">
                        <p>{data.title}</p>
                      </div>
                      <div className="sub-text">
                        <p>{data.summarry}</p>
                      </div>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
