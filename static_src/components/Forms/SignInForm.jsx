import './_forms.scss';
import React from 'react';
import 'babel-polyfill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export default class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // поправить баз с переходом на другие стр
            showWarning: null,
        };
        this.SignInSchema = Yup.object({
            email: Yup.string()
                .email('Неправильный имейл')
                .required('Введите имейл'),
            password: Yup.string()
                .required('Введите пароль')
                .min(6, 'Минимальная длина: 6 символов'),
        });
    }

    componentDidUpdate() {
        // console.log(this.state.showWarning);
        if (this.state.showWarning === true) {
            const block = document.querySelector('.main');
            block.insertAdjacentHTML('afterbegin', '<div>неправильные почта или пароль!</div>');
        }
    }

    render() {
        return (
            <Formik
                initialValues={{password: '', email: ''}}
                validationSchema={this.SignInSchema}
                // validateOnChange={false}
                onSubmit={(values, {setSubmitting}) => {
                    fetch('https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/check-passsword.json')
                        .then (response => {
                            if (response.status === 200) {
                                // return response.json();
                                this.setState({showWarning: false});
                                setSubmitting(true);
                                // console.log(response.status);
                            } else {
                                this.setState({showWarning: true});
                                setSubmitting(false);
                                // console.log(response.status);
                            }
                        })
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                    }
                }
            >
                {({errors, touched}) => (
                    <Form>
                        <label htmlFor="email">Email Address</label>
                        <Field
                            className={errors.email && touched.email ? ('text-input error') : ('text-input')}
                            name="email"
                            type="email"/>
                        <ErrorMessage
                            component="div"
                            className="input-feedback"
                            name="email"/>
                        <label htmlFor="password">Пароль</label>
                        <Field
                            className={errors.password && touched.password ? ('text-input error') : ('text-input')}
                            name="password"
                            type="password"/>
                        <ErrorMessage
                            component="div"
                            className="input-feedback"
                            name="password"/>
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        );
    }
}