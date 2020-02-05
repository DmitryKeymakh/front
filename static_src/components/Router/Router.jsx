import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import Layout from '../Layout';
import SecondPage from '../SecondPage';


export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path='/'
                    component={Layout} />
                <Route
                    exact
                    path='/second'
                    component={SecondPage} />
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        )
    }
}
function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h1>
                404. Страница с адресом <code>{location.pathname}</code> не найдена.
            </h1>
        </div>
    );
}
