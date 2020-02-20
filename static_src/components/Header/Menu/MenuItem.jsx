import './_menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {animated, Transition} from "react-spring/renderprops";

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {show: false};

    toggle = (event) => {
        const listItemBlock = document.querySelector('.menu-list-item');
        const listLinkBlock = document.querySelector('.menu-list-link');
        const dropdownBlock = document.querySelector('.dropdown-menu');

        if (event.target === listItemBlock || event.target === dropdownBlock || event.target === listLinkBlock) {
            listLinkBlock.classList.toggle('menu-list-link-active');
        }

        this.setState(state => ({show: !state.show}));
    };

    render() {
        const { title, key, url, dropdownMenu } = this.props.dataObject;

        return (
            <li key={key} className="menu-list-item" onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                <Link className="menu-list-link" to={url}>{title}</Link>
                <Transition
                    native
                    items={this.state.show}
                    from={{ opacity: 0, transition: '0.15s' }}
                    enter={{ opacity: 1, display: 'flex' }}
                    leave={{  }}
                >
                    {show =>
                        (dropdownMenu.length !== 0) && show && (props =>
                            <animated.div
                                className="dropdown-menu"
                                style={props}
                            >
                                {
                                    dropdownMenu.map((link) =>
                                        <Link key={link.key} className="dropdown-menu-item" to={link.url}>{link.title}</Link>
                                    )
                                }
                            </animated.div>)
                    }
                </Transition>
            </li>
        )
    }
}