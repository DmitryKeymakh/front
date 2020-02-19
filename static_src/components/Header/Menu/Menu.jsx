import './_menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {animated, Transition} from "react-spring/renderprops";


export default class Menu extends React.Component {
    state = { show: false };
    toggle = () => this.setState(state => ({ show: !state.show }));

    render() {
        console.log(this.state.show);
        return (
            <ul className="menu">
                <li className="menu-item" onMouseEnter={this.toggle} onMouseLeave={this.toggle}><Link to="/">главная</Link>
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
                                    className="dropdown-profile-menu"
                                    style={props}
                                >
                                    {/*hello*/}
                                </animated.div>)
                        }
                    </Transition>
                </li>
                <li className="menu-item"><Link to="/second">вторая</Link></li>
                <li className="menu-item"><Link to="/third">третья</Link></li>
                <li className="menu-item"><Link to="/sign-in">авторизация</Link></li>
                <li className="menu-item"><Link to="/sign-up">регистрация</Link></li>
            </ul>
        )
    }
}