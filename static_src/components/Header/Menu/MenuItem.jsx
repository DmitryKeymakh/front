import './_menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {animated, Transition} from "react-spring/renderprops";

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {show: false};

    menuToggle = () => {
        this.setState(state => ({show: !state.show}));
    };

    pageScrollToTop = () => {
        window.scroll(0,0);
    };

    render() {
        const { title, key, url, dropdownMenu } = this.props.dataObject;

        return (
            <li key={key} className="menu-list-item" onMouseEnter={this.menuToggle} onMouseLeave={this.menuToggle}>
                <Link onClick={this.pageScrollToTop} className="menu-list-link" to={url}>{title}</Link>
                <Transition
                    native
                    items={this.state.show}
                    from={{ opacity: 0, transition: '0.15s' }}
                    enter={{ opacity: 1, display: 'flex' }}
                    leave={{ opacity: 0, display: 'none' }}
                >
                    {show =>
                        (dropdownMenu.length !== 0) && show && (props =>
                            <animated.div
                                className="dropdown-menu"
                                style={props}
                            >
                                {
                                    dropdownMenu.map((link) =>
                                        <Link key={link.key} onClick={this.pageScrollToTop} className="dropdown-menu-item" to={link.url}>{link.title}</Link>
                                    )
                                }
                            </animated.div>)
                    }
                </Transition>
            </li>
        )
    }
}