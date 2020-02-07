import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from '../Layout';
import SecondPage from '../SecondPage';
import Error404 from '../Error404/Error404'


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
                <Route
                    path="*">
                    <Error404 />
                </Route>
            </Switch>
        )
    }
}
