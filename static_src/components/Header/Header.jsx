import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import DropdownProfile from '../DropdownProfile/DropdownProfile';
import './_header.scss';

export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Logo />
                <Menu />
                <DropdownProfile />
            </div>
        )
    }
}