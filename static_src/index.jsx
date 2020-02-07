import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router/Router'
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Header />
            <Router />
            <Footer />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);