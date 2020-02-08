import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './_forms.scss';


const SignInSchema = Yup.object({
    password: Yup.string()
        .required('Введите пароль')
        .min(6, 'Минимальная длина: 6 символов')
        .max(20, 'Максимальная длина: 20 символов')
        .matches(/[a-zA-Z0-9]\w/, 'Используйте латинские буквы, цифры и знак нижнего подчеркивания'),
    email: Yup.string()
        .email('Неправильный имейл')
        .required('Введите имейл'),
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
                    <label htmlFor="password">Пароль</label>
                    <Field
                        className={errors.password && touched.password ? ('text-input error') : ('text-input')}
                        name="password"
                        type="password" />
                    <ErrorMessage
                        component="div"
                        className="input-feedback"
                        name="password" />
                    <label htmlFor="email">Email Address</label>
                    <Field
                        className={errors.email && touched.email ? ('text-input error') : ('text-input')}
                        name="email"
                        type="email" />
                    <ErrorMessage
                        component="div"
                        className="input-feedback"
                        name="email" />
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};