import React, { useState, useRef } from "react";
import { experience, experienceRecord } from "../../data/data.js";
import CountUp from "react-countup";
// import axios from "axios";

export default function ExperiencePage() {
  const recordData = experienceRecord;

  const indexData = recordData.filter(function (xcategory) {
    return xcategory.XType === "PHARMACEUTICAL";
  }); //initial data to display(healthcare category)

  const [records, setRecords] = useState(indexData);
  const [bool, setBool] = useState(true);

  // const loadData = async () => {
  //   const response = await axios.get("http://localhost:5000/api/get");
  //   const { recordset } = response.data;
  //   setRecords(recordset);
  // };

  const healthfilter = recordData.filter(function (xcategory) {
    return xcategory.XType === "PHARMACEUTICAL";
  });

  const nonpropfilter = recordData.filter(function (xcategory) {
    return (
      xcategory.XType === "CONSUMER" && xcategory.Details === "USAN/INN Naming"
    );
  });

  const consumerfilter = recordData.filter(function (xcategory) {
    return xcategory.XType === "CONSUMER";
  });

  // useEffect(() => {
  //   loadData();
  // }, []);

  const [exp, setexp] = useState(experience[0]);
  const activehealth = useRef();
  const activecons = useRef();
  const activenon = useRef();

  const healthcare = () => {
    setexp(experience[0]);
    setRecords(healthfilter);
    activehealth.current.classList.add("active");
    activecons.current.classList.remove("active");
    activenon.current.classList.remove("active");
  };
  const consumer = () => {
    setexp(experience[1]);
    setRecords(consumerfilter);
    activehealth.current.classList.remove("active");
    activecons.current.classList.add("active");
    activenon.current.classList.remove("active");
  };

  const nonproprietary = () => {
    setexp(experience[2]);
    setRecords(nonpropfilter);
    activehealth.current.classList.remove("active");
    activecons.current.classList.remove("active");
    activenon.current.classList.add("active");
  };

  // to print the topics dynamically :
  const counter = [];
  records.forEach(function (obj) {
    var key = obj.Categories;
    counter[key] = (counter[key] || 0) + 1;
  });

  //Sorting of Table
  const sortCat = () => {
    if (exp.category === "Healthcare") {
      if (bool === true) {
        //for Ascending
        let aa = healthfilter.sort((a, b) =>
          a.Categories > b.Categories ? 1 : -1
        );
        setRecords(aa);
      } else {
        //for Descending
        let aa = healthfilter.sort((a, b) =>
          a.Categories > b.Categories ? -1 : 1
        );
        setRecords(aa);
      }
      setBool(!bool);
    } else if (exp.category === "nonproprietary") {
      if (bool === true) {
        //for Ascending
        let bb = nonpropfilter.sort((a, b) =>
          a.Categories > b.Categories ? 1 : -1
        );
        setRecords(bb);
      } else {
        //for Descending
        let bb = nonpropfilter.sort((a, b) =>
          a.Categories > b.Categories ? -1 : 1
        );
        setRecords(bb);
      }
      setBool(!bool);
    } else if (exp.category === "Consumer") {
      if (bool === true) {
        //for Ascending
        let cc = consumerfilter.sort((a, b) =>
          a.Categories > b.Categories ? 1 : -1
        );
        setRecords(cc);
      } else {
        //for Descending
        let cc = consumerfilter.sort((a, b) =>
          a.Categories > b.Categories ? -1 : 1
        );
        setRecords(cc);
      }
      setBool(!bool);
    }
  };

  const sortName = () => {
    if (exp.category === "Healthcare") {
      if (bool === true) {
        //for Ascending
        let aa = healthfilter.sort((a, b) =>
          a.BrandName > b.BrandName ? 1 : -1
        );
        setRecords(aa);
      } else {
        //for Descending
        let aa = healthfilter.sort((a, b) =>
          a.BrandName > b.BrandName ? -1 : 1
        );
        setRecords(aa);
      }
      setBool(!bool);
    } else if (exp.category === "nonproprietary") {
      if (bool === true) {
        //for Ascending
        let bb = nonpropfilter.sort((a, b) =>
          a.BrandName > b.BrandName ? 1 : -1
        );
        setRecords(bb);
      } else {
        //for Descending
        let bb = nonpropfilter.sort((a, b) =>
          a.BrandName > b.BrandName ? -1 : 1
        );
        setRecords(bb);
      }
      setBool(!bool);
    } else if (exp.category === "Consumer") {
      if (bool === true) {
        //for Ascending
        let cc = consumerfilter.sort((a, b) =>
          a.BrandName > b.BrandName ? 1 : -1
        );
        setRecords(cc);
      } else {
        //for Descending
        let cc = consumerfilter.sort((a, b) =>
          a.BrandName > b.BrandName ? -1 : 1
        );
        setRecords(cc);
      }
      setBool(!bool);
    }
  };

  const sortClient = () => {
    if (exp.category === "Healthcare") {
      if (bool === true) {
        //for Ascending
        let aa = healthfilter.sort((a, b) => (a.Client > b.Client ? 1 : -1));
        setRecords(aa);
      } else {
        //for Descending
        let aa = healthfilter.sort((a, b) => (a.Client > b.Client ? -1 : 1));
        setRecords(aa);
      }
      setBool(!bool);
    } else if (exp.category === "nonproprietary") {
      if (bool === true) {
        //for Ascending
        let bb = nonpropfilter.sort((a, b) => (a.Client > b.Client ? 1 : -1));
        setRecords(bb);
      } else {
        //for Descending
        let bb = nonpropfilter.sort((a, b) => (a.Client > b.Client ? -1 : 1));
        setRecords(bb);
      }
      setBool(!bool);
    } else if (exp.category === "Consumer") {
      if (bool === true) {
        //for Ascending
        let cc = consumerfilter.sort((a, b) => (a.Client > b.Client ? 1 : -1));
        setRecords(cc);
      } else {
        //for Descending
        let cc = consumerfilter.sort((a, b) => (a.Client > b.Client ? -1 : 1));
        setRecords(cc);
      }
      setBool(!bool);
    }
  };

  return (
    <>
      <div className="container">
        <div className="exp-nav textBlue">
          <div
            ref={activehealth}
            className="active exp-link bolder"
            onClick={healthcare}
          >
            Healthcare
          </div>
          <div
            ref={activenon}
            className="exp-link bolder"
            onClick={nonproprietary}
          >
            Corporate
          </div>
          <div ref={activecons} className="exp-link bolder" onClick={consumer}>
            Consumer/B2B
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-lg-7">
            <h1 className="exp-heading mb-5">{exp.Headline}</h1>
            <p className="exp-desc">{exp.SubTopic}</p>
          </div>
          <div className="col-lg-5 d-flex flex-wrap justify-content-center textBlue">
            {exp.Stats?.map((stat) => {
              return (
                <div key={stat.Number} className="stats m-2 my-2">
                  <div className="fs-1">
                    <CountUp end={stat.Number} separator={","} duration={0.9} />
                  </div>
                  <div className="exp-desc">{stat.Topic}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-5"></div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 mt-4">
            <h2>Categories</h2>
            <ul className="textYellow pe-5">
              {Object.entries(counter).map(([key, value]) => {
                return (
                  <li key={key}>
                    {key} - <span className="textBlue">{value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="d-flex justify-content-end mb-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                style={{ width: "40%" }}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn bg-blue" type="submit">
                Search
              </button>
            </div>

            <table className="table table-bordered Exp">
              <thead className="bg-blue">
                <tr>
                  <th onClick={sortClient} scope="col">
                    <div className="table-head">
                      Client{" "}
                      <i
                        className={bool ? "fa fa-sort-down" : "fa fa-sort-up"}
                      ></i>
                    </div>
                  </th>
                  <th onClick={sortName} scope="col">
                    <div className="table-head">
                      Name{" "}
                      <i
                        className={bool ? "fa fa-sort-down" : "fa fa-sort-up"}
                      ></i>
                    </div>
                  </th>
                  <th onClick={sortCat} scope="col">
                    <div className="table-head">
                      Catergory{" "}
                      <i
                        className={bool ? "fa fa-sort-down" : "fa fa-sort-up"}
                      ></i>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => {
                  return (
                    <tr key={record.id}>
                      <td style={{ maxWidth: "250px" }}>{record.Client}</td>
                      <td style={{ maxWidth: "250px" }}>{record.BrandName}</td>
                      <td style={{ maxWidth: "250px" }}>{record.Categories}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
