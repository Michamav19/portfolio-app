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
        speed: 500,
        vertical: true,
        verticalSwiping: true
    };

    return(
        <div className="main-container">
                
            <div className="resume-left-info">
                <div className="resume-left-container">
                    <i className="resume-information-icon fas fa-graduation-cap"></i>
                    
                    <div className="resume-left-main">
                        <Typist>
                            <span className="resume-left-title">Education</span>
                            <br />
                            {/* <span className="resume-left-subtitle"></span>
                            <br /> */}
                        </Typist>
                        <span className="resume-left-summary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>
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
                            <div className="resume-info-details-section univesrity-section">
                                <span className="resume-info-details-title">Other</span>
                                <span className="resume-info-details-value">
                                    2019 – 2020: Web Design and Front End Developer Expertise - e- learning (EKPA) (9.4/10)
                                </span>
                                <span className="resume-info-details-secondary-value">
                                    In this e-learning program I work in the field of web developing in conjunction with web design.
                                    For UX Design and UI Design, I dealt with html, css, javascript, jquery and Ajax.
                                    I also became "obsessed" with wire frames software for designing Prototypes, Axure and Balsamiq.
                                    Also I was involved with jSF by Oracle and AngularJS. Finally I saw and dealt with Photoshop program.
                                </span>
                                <span className="resume-info-details-value">
                                    2017-2018: Develop your website - e-learning (kode project by kotsovolos)
                                </span>
                            </div>
                            <div className="resume-info-details-section department-section">
                                <span className="resume-info-details-title">University</span>
                                <span className="resume-info-details-value">2013 – 2018: Department of Management Science and Technology AUEB</span>
                                <span className="resume-info-details-secondary-value">
                                    Major in E-Commerce, Innovation and Entrepreneurship, 7.5/10 <br/>
                                    Minor in Information Systems and Technologies, 8.2/10 <br/>
                                    Average Grade: 7.1/10
                                </span>
                            </div>
                            <div className="resume-info-details-section major-section">
                                <span className="resume-info-details-title">School</span>
                                <span className="resume-info-details-value">2010 – 2013: Lykeio Varvakeiou Sxolis</span>
                                <span className="resume-info-details-value">2007 – 2010: Varvakeio Protypo Gymnasio</span>
                            </div>
                        </Slider>
                    </div>



                </div>
            </div>

        </div>
    );

}

export default Education
