import React from 'react';
import { Link } from 'react-router-dom';
import './_logo.scss';


export default class Menu extends React.Component {

    render() {
        return (
            <Link className="logo" to="/">Logo</Link>
        )
    }
}