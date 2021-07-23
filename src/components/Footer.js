import React from 'react';
import './Footer.scss';
// import Dots from 'react-carousel-dots';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

function Footer() {

    // const settings = {
    //     dots: true,
    //     arrows: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     appendDots: dots => {
    //       return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    //     }
    // }


    return (
        <div className="footer">
            <div className="footer-container">

                <div className="footer-text-section">
                    {/* <span className="footer-text">Designed and Developed by John Doe</span> */}
                    <span className="footer-text">&copy; 2021 Michalis Mavromatakis</span>
                </div>

                <div className="footer-dots-menu-section">
                    {/*<Dots length={10} active={0} />*/}
                    {/*<Slider {...settings}>
                        <div>
                        <h3>1</h3>
                        </div>
                        <div>
                        <h3>2</h3>
                        </div>
                        <div>
                        <h3>3</h3>
                        </div>
                        <div>
                        <h3>4</h3>
                        </div>
                        <div>
                        <h3>5</h3>
                        </div>
                        <div>
                        <h3>6</h3>
                        </div>
                        <div>
                        <h3>7</h3>
                        </div>
                        <div>
                        <h3>8</h3>
                        </div>
                    </Slider>*/}
                </div>
                
            </div>
        </div>
    )
}

export default Footer
