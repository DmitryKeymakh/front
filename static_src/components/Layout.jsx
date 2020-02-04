import React from 'react';
import Gallery from './Gallery/Gallery';
import '../styles/main.scss';

export default class Layout extends React.Component {

    render() {
        return (
            <Gallery url={'https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/images.json'}/>
        )
    }
}