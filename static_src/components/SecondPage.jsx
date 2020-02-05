import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import '../styles/main.scss';

export default class Layout extends React.Component {

    render() {
        return (
            <div className="container">
                <Header />
                <div className="main second-page">
                </div>
                <Footer />
            </div>
        )
    }
}