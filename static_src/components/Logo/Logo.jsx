import React from 'react';
import { Link } from 'react-router-dom';
import './_logo.scss';


export default class Menu extends React.Component {
    pageScrollToTop = () => {
        window.scroll(0,0);
    };

    render() {
        return (
            <Link className="logo" to="/" onClick={this.pageScrollToTop}>Logo</Link>
        )
    }
}