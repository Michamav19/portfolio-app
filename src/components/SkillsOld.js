import React from 'react';
import Typist from 'react-typist'; //npm install react-typist --save

import '../App.scss';
import './Skills.scss';
import './ResumeInformation.scss';

function Skills() {

    return (

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
                        <span className="resume-left-summary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </span>
                    </div>
                </div>
            </div>

            <div className="vertical-divider-first"></div>  
            <div className="horizontial-divider"></div>  
            <div className="vertical-divider-second"></div>  

            <div className="resume-right-info">
                <div className="resume-right-container">

                    <div className="skills-group">
                        {/*<span className="skills-category">Front-End</span>
                        <span className="skill">ReactJs</span>
                        <span className="skill">Html</span>
                        <span className="skill">CSS</span>
                        <span className="skill">JavaScript</span>*/}


                        <div id="big-circle" className="circle big">
                            <span>Front-End</span>
                            <div className="circle one">Html</div>
                            <div className="circle two">CSS</div>
                            <div className="circle three">ReactJs</div>
                            <div className="circle four">JavaScript</div>
                            <div className="circle five">jQuery</div>
                            <div className="circle six">SCSS</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    
    );
}

export default Skills
