import React from 'react';
import './SocialMedia.scss';

function SocialMedia({className}) {
    return (
        <div className={"social-media "+className}>
            <div className="social-media-container">
                <a href="https://www.facebook.com/michalis.mavromatakis/" target="_blank" className="fab fa-facebook-f"></a>
                <a href="https://www.linkedin.com/in/michalis-mavromatakis/" target="_blank" className="fab fa-linkedin-in"></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=michamav19@gmail.com" target="_blank" className="fas fa-envelope"></a>
            </div>
        </div>
    )
}

export default SocialMedia
