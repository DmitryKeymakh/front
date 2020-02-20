import './_menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {animated, Transition} from "react-spring/renderprops";

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {show: false};
    toggle = () => this.setState(state => ({show: !state.show}));

    render() {
        return (
        <li className="menu-list-item" onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
            <Link className="menu-list-link" to="/">главная</Link>
            <Transition
                // native
                items={this.state.show}
                trail={10}
                from={{ opacity: 0, transform: 'scale(0.9, 1) translateY(0px)',}}
                enter={[{ opacity: 1, transform: 'scale(1, 1) translateY(10px)' }]}
                leave={{ opacity: 0 }}
            >
                {show =>
                    show && (props =>
                        <animated.div
                            className="dropdown-menu"
                            style={props}
                        >
                            {/*hello*/}
                            asdasd
                        </animated.div>)
                }
            </Transition>
        </li>
        )
    }
}