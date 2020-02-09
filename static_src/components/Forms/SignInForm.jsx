import './_forms.scss';
import React, { useState } from 'react';
import 'babel-polyfill';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const PasswordShowHide = ({ field, form }) => {
    const [showHidePassword, changeShowHidePassword] = useState(false);
    const hasError = form.touched[field.name] && form.errors[field.name];

    return (
        <div className="input-container">
            <i
                className={hasError ? "icon-error icon" : "fa fa-key icon"}
                onClick={() => changeShowHidePassword(!showHidePassword)}
            >
                i
            </i>
            <input
                type={showHidePassword ? "text" : "password"}
                {...field}
                className={hasError ? "input-error input-field" : "input-field"}
                placeholder="Password"
            />
        </div>
    );
};

const SignInSchema = Yup.object({
    email: Yup.string()
        .email('Неправильный имейл')
        .required('Введите имейл'),
        // .test(
        //     'email-check',
        //     'Неверный имейл',
        //     async () => (await fetch('https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/check-email.json')).email,
        // ),
    password: Yup.string()
        .required('Введите пароль')
        .min(6, 'Минимальная длина: 6 символов')
        .max(20, 'Максимальная длина: 20 символов')
        .matches(/[a-zA-Z0-9]\w/, 'Используйте латинские буквы, цифры и знак нижнего подчеркивания')
        .test(
            'password-check',
            'Неверный пароль',
            // async () => (await fetch('https://raw.githubusercontent.com/DmitryKeymakh/front/master/api/check-password.json')).statusText === 'OK',
            async (value) => (await fetch('/is-jimmy/' + value)).responseText === 'true',
        ),
});

export default function SignInForm() {
    return (
        <Formik
            initialValues={{ password: '', email: '' }}
            validationSchema={SignInSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="email">Email Address</label>
                    <Field
                        className={errors.email && touched.email ? ('text-input error') : ('text-input')}
                        name="email"
                        type="email" />
                    <ErrorMessage
                        component="div"
                        className="input-feedback"
                        name="email" />
                    <label htmlFor="password">Пароль</label>
                    <Field
                        className={errors.password && touched.password ? ('text-input error') : ('text-input')}
                        name="password"
                        type="password"
                        // component={PasswordShowHide}
                    />
                    <ErrorMessage
                        component="div"
                        className="input-feedback"
                        name="password" />
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};