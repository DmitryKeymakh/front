import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Header/Menu/Menu';
import DropdownProfile from '../Header/DropdownProfile/DropdownProfile';
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