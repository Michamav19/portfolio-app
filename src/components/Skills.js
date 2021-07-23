import React from 'react'
import Typist from 'react-typist'; //npm install react-typist --save

import '../App.scss';
import './Skills.scss';
import './ResumeInformation.scss';
import SocialMedia from './SocialMedia';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// function Education({ resumeSectionId }) {
function Skills() {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        vertical: true,
        verticalSwiping: true
    };

    return(
        <div className="main-container">
                
            <div className="resume-left-info">
                <div className="resume-left-container">
                    <i className="resume-information-icon fas fa-cogs"></i>
                    
                    <div className="resume-left-main">
                        <Typist>
                            <span className="resume-left-title">Skills</span>
                            <br />
                            {/* <span className="resume-left-subtitle"></span>
                            <br /> */}
                        </Typist>
                        {/* <span className="resume-left-summary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span> */}
                    </div>
                </div>

                {/* Social Media Section */}
                <SocialMedia className="mobile"/>
            </div>

            <div className="vertical-divider-first"></div>  
            <div className="horizontial-divider"></div>  
            <div className="vertical-divider-second"></div>  

            <div className="resume-right-info">
                <div className="resume-right-container">

                    {/* <span className="resume-info-title">Bachelor Degree</span> */}
                    <div className="resume-info-details">
                        <Slider {...settings}>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">Front-End</span>
                                <span className="resume-info-details-value">
                                    HTML, CSS, SCSS, ReactJs, Javascript, jQuery, AJAX, 
                                    JavaServer Pages (JSP), AngularJS
                                </span>
                            </div>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">Back-end</span>
                                <span className="resume-info-details-value">
                                    PHP, PHP Symfony, Java, Python
                                </span>
                            </div>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">DataBase</span>
                                <span className="resume-info-details-value">
                                    SQL, MySQL
                                </span>
                            </div>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">Design</span>
                                <span className="resume-info-details-value">
                                    Figma, Axure RP, Photoshop, Balsamiq, Gravit Designer
                                </span>
                            </div>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">Editors</span>
                                <span className="resume-info-details-value">
                                    Microsoft Visual Studio Code, Sublime Text Editor, 
                                    Webstorm, PhpStorm, DataGrip
                                </span>
                            </div>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">Other</span>
                                <span className="resume-info-details-value">
                                    WordPress, Wix, Windows, Linux, MacOs, Office, LibreOffice
                                </span>
                            </div>
                        </Slider>
                    </div>



                </div>
            </div>

        </div>
    );

}

export default Skills
