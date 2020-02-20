import './_menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {animated, Transition} from "react-spring/renderprops";

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {show: false};
    // state = {show: true};
    toggle = () => this.setState(state => ({show: !state.show}));

    render() {
        const { title, key, url, dropdownMenu } = this.props.dataObject;

        return (
            <li key={key} className="menu-list-item" onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                <Link className="menu-list-link" to={url}>{title}</Link>
                <Transition
                    // native
                    items={this.state.show}
                    trail={100}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1, display: 'flex' }}
                    leave={{ opacity: 0 }}
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