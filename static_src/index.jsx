import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <div className="main">
                <Header />
                <Router />
            </div>
            <Footer />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);