import React, { useCallback, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Resume.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

function Resume() {
  // when click resume tab open fancybox
  const [isOpen, setIsOpen] = useState(false);
  // take the id of resume tab
  const [counter, setCounter] = useState();

  const onButtonClick = (e) => {
    // console.log(e.target.parentNode.id);
    setCounter(e.target.parentNode.id);

    console.log(counter);
    // return num;
  };

  // when click arrow next icon display next section of this resume category
  // const [isDisplay, setIsDisplay] = useState('education-info-1');

  const settings = {
    dots: true,
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    arrows: false,
    speed: 500,
    // autoplay:true,

    // variableWidth: true,

    pauseOnHover: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  // control resume tabs links
  const history = useHistory();
  const handleEducationLink = useCallback(
    () => history.push("/education"),
    [history]
  );
  const handleWorkLink = useCallback(() => history.push("/work"), [history]);
  const handleSeminarsLink = useCallback(
    () => history.push("/seminars"),
    [history]
  );
  const handleProjectsLink = useCallback(
    () => history.push("/projects"),
    [history]
  );
  const handleOtherLink = useCallback(() => history.push("/other"), [history]);
  const handleSkillsLink = useCallback(
    () => history.push("/skills"),
    [history]
  );

  return (
    <div className="resume">
      <div className="resume-container">
        <Slider {...settings}>
          {/** Education Tab */}
          {/* <div id="tab-1" className="resume-tab" onClick={ (e) => { setIsOpen(true); onButtonClick(e)} }> */}
          <div id="tab-1" className="resume-tab" onClick={handleEducationLink}>
            <div className="resume-tab-container education-tab">
              <div className="resume-tab-title">
                <span className="tab-title">Education</span>
              </div>
              <i className="resume-information-icon fas fa-graduation-cap"></i>
              <div className="resume-tab-view-btn">
                <span className="view-btn">View</span>
              </div>
            </div>
          </div>

          {/** Work Tab */}
          <div id="tab-2" className="resume-tab" onClick={handleWorkLink}>
            <div className="resume-tab-container work-tab">
              <div className="resume-tab-title">
                <span className="tab-title">Work</span>
              </div>
              <i className="resume-information-icon fas fa-briefcase"></i>
              <div className="resume-tab-view-btn">
                <span className="view-btn">View</span>
              </div>
            </div>
          </div>

          {/** Seminars Tab */}
          <div id="tab-3" className="resume-tab" onClick={handleSeminarsLink}>
            <div className="resume-tab-container seminar-tab">
              <div className="resume-tab-title">
                <span className="tab-title">Seminars</span>
              </div>
              <i className="resume-information-icon fas fa-chalkboard-teacher"></i>
              <div className="resume-tab-view-btn">
                <span className="view-btn">View</span>
              </div>
            </div>
          </div>

          {/** Projects Tab */}
          <div id="tab-4" className="resume-tab" onClick={handleProjectsLink}>
            <div className="resume-tab-container project-tab">
              <div className="resume-tab-title">
                <span className="tab-title">Projects</span>
              </div>
              <i className="resume-information-icon fas fa-pencil-ruler"></i>
              <div className="resume-tab-view-btn">
                <span className="view-btn">View</span>
              </div>
            </div>
          </div>

          {/** Languages Tab */}
          <div id="tab-5" className="resume-tab" onClick={handleOtherLink}>
            <div className="resume-tab-container fa-list-ul">
              <div className="resume-tab-title">
                <span className="tab-title">Other</span>
              </div>
              <i className="resume-information-icon fas fa-briefcase"></i>
              <div className="resume-tab-view-btn">
                <span className="view-btn">View</span>
              </div>
            </div>
          </div>

          <div id="tab-6" className="resume-tab">
            <div
              className="resume-tab-container skills-tab"
              onClick={handleSkillsLink}
            >
              <div className="resume-tab-title">
                <span className="tab-title">Skills</span>
              </div>
              <i className="resume-information-icon fas fa-cogs"></i>
              <div className="resume-tab-view-btn">
                <span className="view-btn">View</span>
              </div>
            </div>
            {/* </Link> */}
          </div>

          {/** </div>*/}
        </Slider>
      </div>
    </div>
  );
}

export default Resume;
