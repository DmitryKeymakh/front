import './_menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
// import {animated, Transition} from "react-spring/renderprops";
import MenuItem from './MenuItem';

const menuObj = [
    {
        "title": "Главная",
        "key": "main",
        "url": "/",
        "dropdownMenu": [
            {
                "title": "Автоизация",
                "key": 1,
                "url": "/sign-in",
            },
            {
                "title": "Регистрация",
                "key": 2,
                "url": "/sign-up",
            },
            {
                "title": "Третий и четвертый",
                "key": 3,
                "url": "hjl",
            },
        ]
    },
    {
        "title": "Вторая",
        "key": "second",
        "url": "/second",
        "dropdownMenu": [],
    },
    {
        "title": "Третья",
        "key": "third",
        "url": "",
        "dropdownMenu": [],
    },
];

export default class Menu extends React.Component {

    render() {
        return (
            <ul className="menu">
                {
                    menuObj.map((item, index) =>
                        <MenuItem key={index} dataObject={item}/>
                    )
                }
                {/*<li className="menu-item"><Link to="/third">третья</Link></li>*/}
                {/*<li className="menu-item"><Link to="/sign-in">авторизация</Link></li>*/}
                {/*<li className="menu-item"><Link to="/sign-up">регистрация</Link></li>*/}
            </ul>
        )
    }
}
