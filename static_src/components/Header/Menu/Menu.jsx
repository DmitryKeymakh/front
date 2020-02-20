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
                "title": "Первый",
                "url": "asd",
            },
            {
                "title": "Второй",
                "url": "fgh",
            },
            {
                "title": "Третий и четвертый",
                "url": "hjl",
            },
        ]
    },
    {
        "title": "Вторая",
        "key": "second",
        "url": "/second",
        "dropdownMenu": {},
    },
    {
        "title": "Третья",
        "key": "third",
        "url": "",
        "dropdownMenu": {},
    },
];

export default class Menu extends React.Component {

    render() {
        return (
            <ul className="menu">

                <MenuItem />
                <MenuItem />
                <li className="menu-item"><Link to="/third">третья</Link></li>
                <li className="menu-item"><Link to="/sign-in">авторизация</Link></li>
                <li className="menu-item"><Link to="/sign-up">регистрация</Link></li>
            </ul>
        )
    }
}
