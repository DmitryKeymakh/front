import './_header.scss';
import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Header/Menu/Menu';
import DropdownProfile from '../Header/DropdownProfile/DropdownProfile';


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