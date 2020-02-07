import React from 'react';
import Form from './Form';
import '../styles/main.scss';


export default class Layout extends React.Component {

    render() {
        return (
            <div className="main second-page">
                <Form />
            </div>
        )
    }
}