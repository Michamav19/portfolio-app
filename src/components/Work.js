import React from 'react'
import Typist from 'react-typist'; //npm install react-typist --save

import '../App.scss';
import './ResumeInformation.scss';
import SocialMedia from './SocialMedia';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// function Education({ resumeSectionId }) {
function Education() {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        vertical: true,
        verticalSwiping: true
    };


    return(
        <div className="main-container">
                
            <div className="resume-left-info">
                <div className="resume-left-container">
                    <i className="resume-information-icon fas fa-briefcase"></i>
                    
                    <div className="resume-left-main">
                        <Typist>
                            <span className="resume-left-title">Work</span>
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
                                <span className="resume-info-details-title">Now</span>
                                <span className="resume-info-details-value">
                                    Octomber 2020 – May 2021: Full Stack Developer at KEPYES/GES
                                </span>
                                <span className="resume-info-details-secondary-value">
                                    <b>For my services to the greek military i work as Full-Stack Developer.</b> <br/>
                                    <b>Front-End:</b> HTML, CSS, SCSS, ReactJs <br/>
                                    <b>Back-end:</b> PHP Symfony <br/>
                                    <b>DataBase:</b> Oracle DB, SQL <br/>
                                    <b>Other:</b> GitLab, Linux <br/>
                                    <b>Programs:</b> Visual Studio Code, WebStorm, PhpStorm, DataGrip
                                </span>
                            </div>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">Past</span>
                                <span className="resume-info-details-value">
                                    March 2018 – September 2020: Full Stack Developer – UX/UI Designer at CollegeLink Company
                                </span>
                                <span className="resume-info-details-secondary-value">
                                    Assistant for participants at Web Development Academy vol.2 by Collegelink <br/>
                                    Assistant for participants at Web Development Academy vol.3 by Collegelink <br/> 
                                </span>
                                <span className="resume-info-details-secondary-value">
                                    <b>Front-End:</b> HTML, CSS, Javascript, jQuery, AJAX <br/>
                                    <b>Back-end:</b> PHP <br/>
                                    <b>DataBase:</b> PhpMyAdmin, SQL <br/>
                                    <b>Other:</b> GitKraken, Windows <br/>
                                    <b>Programs:</b> Visual Studio Code, Sublime
                                </span>
                            </div>
                        </Slider>
                    </div>



                </div>
            </div>

        </div>
    );

}

export default Education
