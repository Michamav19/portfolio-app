import React from 'react';
import './Aboutme.scss';
import prof_pic from '../images/michalis-profile.jpeg';
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
                        <span className="profile-surname">Michalis Mavromatakis</span>
                        <br />
                        <span className="profile-title">Lead Full Stack Developer</span>
                    </Typist>
                    {/* <span className="profile-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span> */}
                    
                </div>
                <span className="download-resume-btn">
                    <a href="/files/Michalis-Mavromatakis-resume.pdf" download>Download Resume</a>
                </span>
            </div>

            {/* Social Media Section */}
            <SocialMedia className="mobile"/>

        </div>
    )
}

export default Aboutme
