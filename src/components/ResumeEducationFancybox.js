import React from 'react'
import './ResumeEducationFancybox.scss';

function ResumeEducationFancybox({ resumeSectionId }) {
    console.log('mpike');

    
    if(resumeSectionId === 'education-info-1'){
        return (
            <>
                <div id="education-info-1" className="fancybox-resume-info university-resume-information">
                    <span className="resume-info-title">Bachelor Degree</span>
                    <div className="resume-info-details">
                        <div className="resume-info-details-section univesrity-section">
                            <span className="resume-info-details-title">University/School</span>
                            <span className="resume-info-details-value">Athens University of Economics and Business</span>
                        </div>
                        <div className="resume-info-details-section department-section">
                            <span className="resume-info-details-title">Department</span>
                            <span className="resume-info-details-value">Department of Management Science and Technology</span>
                        </div>
                        <div className="resume-info-details-section major-section">
                            <span className="resume-info-details-title">Major</span>
                            <span className="resume-info-details-value">Major in E-Commerce, Innovation and Entrepreneurship</span>
                            <span className="resume-info-details-value">Minor in Information Systems and Technologies</span>
                        </div>

                        <div className="resume-info-details-section">
                            <div className="resume-info-details-section-double when-section">
                                <span className="resume-info-details-title">When</span>
                                <span className="resume-info-details-value">September 2013 - July 2018</span>
                            </div>
                            <div className="resume-info-details-section-double grade-section">
                                <span className="resume-info-details-title">Grade</span>
                                <span className="resume-info-details-value">7.1</span>
                            </div>
                            
                        </div>
                        <div className="resume-info-details-section info-section">
                            <span className="resume-info-details-title">Information</span>
                            <span className="resume-info-details-value">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }else if(resumeSectionId === 'education-info-2'){
        return (
            <>
                <div id="education-info-2" className="fancybox-resume-info school-resume-information">
                    <span className="resume-info-title">School</span>
                    <div className="resume-info-details">
                        <div className="resume-info-details-section univesrity-section">
                            <span className="resume-info-details-title">University/School</span>
                            <span className="resume-info-details-value">Varvakeio</span>
                        </div>
                        <div className="resume-info-details-section department-section">
                            <span className="resume-info-details-title">Department</span>
                            <span className="resume-info-details-value">Department of Management Science and Technology</span>
                        </div>
                        <div className="resume-info-details-section major-section">
                            <span className="resume-info-details-title">Major</span>
                            <span className="resume-info-details-value">Major in E-Commerce, Innovation and Entrepreneurship</span>
                            <span className="resume-info-details-value">Minor in Information Systems and Technologies</span>
                        </div>
                        <div className="resume-info-details-section">
                            <div className="resume-info-details-section-double when-section">
                                <span className="resume-info-details-title">When</span>
                                <span className="resume-info-details-value">September 2013 - July 2018</span>
                            </div>
                            <div className="resume-info-details-section-double grade-section">
                                <span className="resume-info-details-title">Grade</span>
                                <span className="resume-info-details-value">7.1</span>
                            </div>
                        </div>
                        <div className="resume-info-details-section info-section">
                            <span className="resume-info-details-title">Information</span>
                            <span className="resume-info-details-value">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default ResumeEducationFancybox
