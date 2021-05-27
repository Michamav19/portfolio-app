import React, { useState, useRef, useEffect} from 'react';
import './Resume.scss';
// import ReactFancyBox from 'react-fancybox';
// import 'react-fancybox/lib/fancybox.css';
import ResumeFancybox from './ResumeFancybox';
import ResumeEducationFancybox from './ResumeEducationFancybox';



function TestResume() {

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

    return (
        <>  

        {/* Start: Fancybox section */}
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
        {/* End: Fancybox section */}
            
            {/* <ResumeEducationFancybox resumeSectionId={('education-info-'+counter)} >    
            </ResumeEducationFancybox>
            <input ref={inputEl} type="text" /> */}
            {/* <button id={counter} style={counter === 2 ? DISPLAY_STYLES : null} onClick={onButtonClick}>Focus the input</button> */}

            {/* <i id={counter} style={counter === 1 ? DISPLAY_STYLES : null} className="resume-container-next fas fa-chevron-left" onClick={onButtonClickDecrease} ></i> 
            <i id={counter} style={counter === 2 ? DISPLAY_STYLES : null} className="resume-container-next fas fa-chevron-right" onClick={onButtonClickAdd}></i> */}
            {/* <button id={1} onClick={() => setCounter(1)}>Focus the input</button> */}
        </>
    );
}

export default TestResume
