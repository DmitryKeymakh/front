import React from 'react';
import { Link } from 'react-router-dom';
import './_menu.scss';

export default class Menu extends React.Component {

    render() {
        return (
            <div className="menu">
                <Link className="menu-item" to="/">главная</Link>
                <Link className="menu-item" to="/second">вторая</Link>
                <Link className="menu-item" to="/third">третья</Link>
            </div>
        )
    }
}