import React from 'react'
import Typist from 'react-typist'; //npm install react-typist --save

import '../App.scss';
import './ResumeInformation.scss';
import SocialMedia from './SocialMedia';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// function Education({ resumeSectionId }) {
function Seminars() {
    
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
                    <i className="resume-information-icon fas fa-chalkboard-teacher"></i>
                    
                    <div className="resume-left-main">
                        <Typist>
                            <span className="resume-left-title">Seminars</span>
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
                                <span className="resume-info-details-title">E-learning</span>
                                <span className="resume-info-details-value">
                                    May 2022 - Current Study: CS50’s Web Programming with Python and JavaScript (Harvard University)
                                </span>
                                <span className="resume-info-details-secondary-value">
                                    This course picks up where CS50x leaves off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap. 
                                    Topics include database design, scalability, security, and user experience. 
                                    Through hands-on projects, students learn to write and use APIs, create interactive UIs, and leverage cloud services like GitHub and Heroku. 
                                    By semester’s end, students emerge with knowledge and experience in principles, languages, and tools that empower them to design and deploy applications on the Internet.
                                </span>
                            </div>

                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">E-learning</span>
                                <span className="resume-info-details-value">
                                    2019 – 2020: Web Design and Front End Developer Expertise - e- learning (EKPA) (9.4/10)
                                </span>
                                <span className="resume-info-details-secondary-value">
                                    In this e-learning program I work in the field of web developing in conjunction with web design.
                                    For UX Design and UI Design, I dealt with html, css, javascript, jquery and Ajax.
                                    I also became "obsessed" with wire frames software for designing Prototypes, Axure and Balsamiq.
                                    Also I was involved with jSF by Oracle and AngularJS. Finally I saw and dealt with Photoshop program.
                                </span>
                            </div>
                            <div className="resume-info-details-section">
                                <span className="resume-info-details-title">E-learning</span>
                                <span className="resume-info-details-value">
                                    2017-2018: Develop your website - e-learning (kode project by kotsovolos)
                                </span>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>

        </div>
    );

}

export default Seminars
