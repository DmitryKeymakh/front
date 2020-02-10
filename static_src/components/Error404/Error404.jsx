import React from "react";
import { useLocation } from "react-router-dom";
import './_error404.scss';


export default function Error404() {
    let location = useLocation();

    return (
        <>
            <div className="error-page-header">404. Страница с адресом <code>{location.pathname}</code> не найдена.</div>
        </>
    );
}