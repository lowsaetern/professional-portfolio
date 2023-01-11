import React, { useState } from "react";
import "./education.css";

const Education = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="education section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="education__container container">
        <div className="education__tabs">
          <div
            className={
              toggleState === 1
                ? "education__button education__active button--flex"
                : "education__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap education__icon"></i>
            Education
          </div>
        </div>

        <div className="education__sections">
          <div
            className={
              toggleState === 1
                ? "education__content education__content-active"
                : "education__content"
            }
          >
            <div className="education__data">
              <div>
                <h3 className="education__title">Full-Stack Development</h3>
                <span className="education__subtitle">
                  University of California, Davis
                </span>
                <div className="education__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>
            </div>

            <div className="education__data">
              <div></div>

              <div>
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div>
                <h3 className="education__title">B.S. Computer Science</h3>
                <span className="education__subtitle">
                  California State University, Sacramento
                </span>
                <div className="education__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            <div className="education__data">
              <div>
                <h3 className="education__title">A.S. Pre-Health</h3>
                <span className="education__subtitle">
                  Sacramento City College
                </span>
                <div className="education__calender">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

              <div>
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>
            </div>

            <div className="education__data">
              <div></div>

              <div>
                <span className="education__rounder"></span>
              </div>

              <div>
                <h3 className="education__title">
                  A.A. Interdisciplinary Studies Social and Behavorial Sciences
                </h3>
                <span className="education__subtitle">
                  Sacramento City College
                </span>
                <div className="education__calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
