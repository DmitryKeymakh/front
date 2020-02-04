import React from 'react';
import Carousel from './Carousel'
import './_gallery.scss';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // url: 'https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/moto-images.json',
            url: 'https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/images.json',
            images: [],
            // photoIndex: 0,
            // isOpen: false,
        };
    }

    componentDidMount() {

        fetch(this.state.url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log(response.status);
                }
            })
            .then(json_data => {
                this.setState({images: json_data});
                return <Carousel images={json_data.images}/>;
            });
    }
}