import React from "react";
import {useLocation} from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import './_error404.scss';


export default function Error404() {
    let location = useLocation();

    return (
        <div className="container">
            <Header />
            <div className="main error-page">
                <div className="error-page-header">404. Страница с адресом <code>{location.pathname}</code> не найдена.</div>
            </div>
            <Footer />
        </div>
    );
}