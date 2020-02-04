import React from 'react';
import PropTypes from 'prop-types';


export default class GalleryImage extends React.Component {

    render() {
        return(
            <div className="swiper-slide" key={this.props.id}>
                <img onClick={() => this.setState({isOpen: true, photoIndex: this.props.photoIndex})} className="swiper-image" src={this.props.url} alt="Gallery-image"/>
            </div>
        )
    }
}