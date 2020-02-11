import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from '../Index';
import SecondPage from '../SecondPage';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Error404 from '../Error404/Error404'


export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path='/'
                    component={Index} />
                <Route
                    exact
                    path='/second'
                    component={SecondPage} />
                <Route
                    exact
                    path='/sign-in'
                    component={SignIn} />
                <Route
                    exact
                    path='/sign-up'
                    component={SignUp} />
                <Route
                    path="*">
                    <Error404 />
                </Route>
            </Switch>
        )
    }
}
