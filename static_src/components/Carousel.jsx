import React from 'react';
import Swiper from 'swiper';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "swiper/css/swiper.css";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            // photoIndex: 0,
            isOpen: false,
        };
    }

    // static propTypes = {
    // };
    //
    // static defaultProps = {
    // };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/moto-images.json')
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log(response.status);
                }
            })
            .then(json_data => {
                this.setState({images: json_data});
            });

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
        const { images, photoIndex, isOpen } = this.state;

        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 0})} className="swiper-image" src="/images/moto/1_0004_Layer-4.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 1})} className="swiper-image" src="/images/moto/5Xgf4YWK_Mw.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 2})} className="swiper-image" src="/images/moto/6P2nDm2rSvI.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 3})} className="swiper-image" src="/images/moto/15_05_2013_throttle_roll_13.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 4})} className="swiper-image" src="/images/moto/31_08_2012_cocaine_white_moped_01.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 5})} className="swiper-image" src="/images/moto/2014-Harley-Davidson-XL883N-Iron883c.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 6})} className="swiper-image" src="/images/moto/ducati-900SS-1.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 7})} className="swiper-image" src="/images/moto/eVb9iiMjC-A.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 8})} className="swiper-image" src="/images/moto/fbOVUqSaweU.jpg" alt=""/></div>
                    <div className="swiper-slide"><img onClick={() => this.setState({ isOpen: true, photoIndex: 9})} className="swiper-image" src="/images/moto/fpjPyO7BB40.jpg" alt=""/></div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}