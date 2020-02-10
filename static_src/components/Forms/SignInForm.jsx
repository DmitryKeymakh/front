import './_forms.scss';
import React from 'react';
import 'babel-polyfill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export default class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.SignInSchema = Yup.object({
            email: Yup.string()
                .email('Неправильный имейл')
                .required('Введите имейл'),
            password: Yup.string()
                .required('Введите пароль')
                .min(6, 'Минимальная длина: 6 символов'),
        });
    }

    render() {
        return (
            <Formik
                initialValues={{password: '', email: ''}}
                validationSchema={this.SignInSchema}
                // validateOnChange={false}
                onSubmit={(values, {setSubmitting}) => {
                    fetch('https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/check-password.json')
                        .then (response => {
                            const block = document.querySelector('.check-in-warning');
                            if (response.status === 200) {
                                block.classList.add('check-in-warning-hide');

                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                 }, 400);

                                // setSubmitting(true);
                                // window.location.href = 'http://localhost:8080/';
                            } else {
                                block.classList.remove('check-in-warning-hide');
                                setSubmitting(false);
                            }
                        })
                    }
                }
            >
                {({errors, touched}) => (
                    <Form>
                        <label htmlFor="email">Email</label>
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
                        <label htmlFor="showHide">Показать пароль</label>
                        <Field
                            className={'text-input'}
                            name="showHide"
                            type="checkbox"/>
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        );
    }
}