import React from 'react';
import SignInForm from './Forms/SignInForm';
// import TestForm from './Forms/TestForm';


export default class Layout extends React.Component {

    render() {
        return (
            <>
                <div className="check-in-warning check-in-warning-hide">Неверный email или пароль.</div>
                <SignInForm />
                {/*<TestForm />*/}
            </>
        )
    }
}