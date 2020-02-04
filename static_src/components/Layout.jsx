import React from 'react';
import Carousel from './Carousel';
import '../styles/main.scss';

export default class Layout extends React.Component {
    // static propTypes = {
    // };
    //
    // static defaultProps = {
    // };

    render() {
        return (
            <Carousel url={'https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/moto-images.json'}/>
            // <Carousel url={'https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/images.json'}/>
        )
    }
}