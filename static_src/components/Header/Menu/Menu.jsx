import './_menu.scss';
import React from 'react';
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
        ],
    },
    {
        "title": "Вторая",
        "key": "second",
        "url": "/second",
        "dropdownMenu": [
            {
                "title": "as",
                "key": 1,
                "url": "as",
            },
            {
                "title": "as",
                "key": 2,
                "url": "as",
            },
        ],
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
            </ul>
        )
    }
}
