import React from 'react';
import './SocialMedia.scss';

function SocialMedia({className}) {
    return (
        <div className={"social-media "+className}>
            <div className="social-media-container">
                <a href="" target="_blank" className="fab fa-facebook-f"></a>
                <a href="https://www.linkedin.com/in/michalis-mavromatakis/" target="_blank" className="fab fa-linkedin-in"></a>
                <a href="" target="_blank" className="fas fa-envelope"></a>



               {/* <img src="../images/facebook-circle.svg" alt="facebook icon"></img>
                <i className="fab fa-facebook circle"></i>
                <a href="" target="_blank" className="fab fa-facebook circle"></a>
                <a href="https://www.linkedin.com/in/michalis-mavromatakis/" target="_blank" className="fab fa-linkedin-in"></a>
                <a href="" target="_blank" className="fas fa-envelope"></a>*/}
            </div>
        </div>
    )
}

export default SocialMedia
