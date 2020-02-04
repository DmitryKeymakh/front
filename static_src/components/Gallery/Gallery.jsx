import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'swiper/css/swiper.css';
import './_gallery.scss';


export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            images: [],
            zoomImages: [],
            photoIndex: 0,
            isOpen: false,
        };
    }

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

        fetch(this.props.url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log(response.status);
                }
            })
            .then(result => {
                this.setState({images: result.images});
                for (let item of result.images) {
                    this.state.zoomImages.push(item.src);
                }
            });
    }

    render() {
        const { images, zoomImages, photoIndex, isOpen } = this.state;

        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {images.map((image) =>
                        <div className="swiper-slide" key={image.id}>
                            <img onClick={() => this.setState({isOpen: true, photoIndex: images.indexOf(image)})} className="swiper-image" src={image.src} alt="Gallery-image"/>
                        </div>
                    )}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>

                {isOpen && (
                    <Lightbox
                        mainSrc={zoomImages[photoIndex]}
                        nextSrc={zoomImages[(photoIndex + 1) % zoomImages.length]}
                        prevSrc={zoomImages[(photoIndex + zoomImages.length - 1) % zoomImages.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + zoomImages.length - 1) % zoomImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % zoomImages.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}