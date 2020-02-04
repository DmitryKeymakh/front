import React from 'react';
import Carousel from './Gallery/Carousel';
import '../styles/main.scss';

export default class Layout extends React.Component {

    render() {
        return (
            // <Carousel url={'https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/moto-images.json'}/>
            <Carousel url={'https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/images.json'}/>
        )
    }
}