import React from 'react';
import Swiper from 'swiper';
import GalleryImage from './GalleryImage'
import "swiper/css/swiper.css";

export default class Carousel extends React.Component {
    // static propTypes = {
    // };
    //
    // static defaultProps = {
    // };

    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    render() {
        return (
            <div className="swiper-container">
                {/*<GalleryImage/>*/}

                <div className="swiper-wrapper">
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/1_0004_Layer-4.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/5Xgf4YWK_Mw.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/6P2nDm2rSvI.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/15_05_2013_throttle_roll_13.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/31_08_2012_cocaine_white_moped_01.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/2014-Harley-Davidson-XL883N-Iron883c.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/ducati-900SS-1.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/eVb9iiMjC-A.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/fbOVUqSaweU.jpg" alt=""/></div>*/}
                    {/*<div className="swiper-slide"><img className="swiper-image" src="/images/moto/fpjPyO7BB40.jpg" alt=""/></div>*/}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        )
    }
}