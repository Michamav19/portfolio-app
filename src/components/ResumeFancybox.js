
import React, { useState, useRef, useEffect} from 'react';
import '../Resume.scss';
import './ResumeFancybox.scss';
// import ReactFancyBox from 'react-fancybox';
// import 'react-fancybox/lib/fancybox.css';

import ResumeEducationFancybox from './ResumeEducationFancybox';
// import ResumeSkills from './ResumeSkills';


// const FANCYBOX_STYLE = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#FFF',
//     padding: '50px',
//     zIndex: 1000
// }

// const OVERLAY_STYLE = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, .7)',
//     zIndex: 1000
// }



function ResumeFancybox({ open, children, onClose, tabResumeId }) {

    // Css code for arrows not displaying when we reach the start or end of resume section tabs
    const DISPLAY_STYLES = {
        display: 'none'
    }

    const [counter, setCounter] = useState(1);


    const onButtonClickAdd = (e) => {
        // `current` points to the mounted text input element
        // inputEl.current.focus();

        let num = parseInt(e.target.id);
        let count = num += 1;
        setCounter(count);

        // console.log(e.target.id);
        // console.log(count);
        console.log(counter);
        
        return count;
    };


    const onButtonClickDecrease = (e) => {

        let num = parseInt(e.target.id);
        let count = num -= 1;
        setCounter(count);

        // console.log(e.target.id);
        // console.log(count);
        console.log(counter);
        
        return count;
    };

    if(!open){
        return null
    }else{
        switch(tabResumeId) {
            // Education Tab
            case 'tab-1':
                return (
                    
                    <div className="overlay">
                        <div className="fancybox">

                            {/* Start: Fancybox section */}
                            <div className="fancybox-insider">
                                <button className="fancybox-close-btn" onClick={onClose}>X</button>
                                <div className="fancybox-tab">
                                    
                                    <span className="fancybox-title">EDUCATION</span>
                                    
                                    <div className="fancybox-container">

                                        <ResumeEducationFancybox resumeSectionId={('education-info-'+counter)} >    
                                        </ResumeEducationFancybox>

                                        <i id={counter} style={counter === 1 ? DISPLAY_STYLES : null} className="resume-container-next fas fa-chevron-left" onClick={onButtonClickDecrease} ></i> 
                                        <i id={counter} style={counter === 2 ? DISPLAY_STYLES : null} className="resume-container-next fas fa-chevron-right" onClick={onButtonClickAdd}></i>

                                    </div>

                                    <i className="education-icon fas fa-graduation-cap"></i>
                                </div>
                            </div>
                            {/* End: Fancybox section */}

                        </div>
                    </div>
                )
            // Work Tab
            case 'tab-2':
                return 'bar';

            // Projects Tab
            case 'tab-3':
                return 'bar';

            // Seminars Tab 
            case 'tab-4':
                return 'bar';

            // Languages Tab 
            case 'tab-5':
                return 'bar';

            // Skills Tab 
            case 'tab-6':
                return (
                    <div className="overlay">
                        <div className="fancybox">

                            {/* Start: Fancybox section */}
                            <div className="fancybox-insider">
                                <button className="fancybox-close-btn" onClick={onClose}>X</button>
                                <div className="fancybox-tab">
                                    
                                    <span className="fancybox-title">Skills</span>
                                    
                                    <div className="fancybox-container">

                                        

                                    </div>
                                </div>
                            </div>
                            {/* End: Fancybox section */}

                        </div>
                    </div>
                );

            default:
                return null;
        }
    }
    
}

export default ResumeFancybox
