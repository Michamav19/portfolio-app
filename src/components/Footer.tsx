import React from 'react';
import './Footer.scss';
// import Dots from 'react-carousel-dots';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

function Footer() {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-text-section">
                    {/* <span className="footer-text">Designed and Developed by John Doe</span> */}
                    <span className="footer-text">&copy; 2021 Michalis Mavromatakis</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
