import React from 'react';
import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage'
import Swiper from 'swiper';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "swiper/css/swiper.css";


export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            images: [],
            isOpen: false,
        };
    }

    // static propTypes = {
    //     url: PropTypes.string,
    // };
    //
    // static defaultProps = {
    // };

    componentDidMount() {
        fetch(this.props.url)
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
                    {images.map((images, photoIndex) =>
                        <GalleryImage
                            photoIndex={photoIndex}
                            key={images.id}
                            url={images.url}
                        />
                    )}
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