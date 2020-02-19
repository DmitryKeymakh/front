import './_header.scss';
import React from 'react';
import Logo from '../Logo/Logo';
// import Menu from '../Header/Menu/Menu';
import MenuTest from '../Header/Menu/MenuTest';
import DropdownProfile from '../Header/DropdownProfile/DropdownProfile';


export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Logo />
                {/*<Menu />*/}
                <MenuTest />
                <DropdownProfile />
            </div>
        )
    }
}