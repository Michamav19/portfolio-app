import React from 'react';
import './Aboutme.scss';
import prof_pic from '../images/profile-pic-2.png';
import Typist from 'react-typist'; //npm install react-typist --save
import SocialMedia from './SocialMedia';

function Aboutme() {

    const setDisplay = () => {
        if(window.innerWidth <= 1025) {
            return "block";
        } else {
            return "none";
        } 
    }
    
    return (
        <div className="aboutme">
            <div className="aboutme-container">
                <img src={prof_pic} alt="Profile Picture"></img>
                <div className="aboutme-main">
                    <Typist>
                        <span className="profile-surname">John Doe</span>
                        <br />
                        <span className="profile-title">Full Stack Developer - UI/UX Designer</span>
                    </Typist>
                    <span className="profile-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                    
                </div>
                <span className="download-resume-btn">
                    <a href="/files/Mavromatakis-resume.pdf" download>Download Resume</a>
                </span>
            </div>

            {/* Social Media Section */}
            <SocialMedia className="mobile"/>

            {/* <div className="aboutme-footer">
                <div className="aboutme-footer-container">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fas fa-envelope"></i>
                </div>
            </div> */}

            
            

        </div>
    )
}

export default Aboutme
