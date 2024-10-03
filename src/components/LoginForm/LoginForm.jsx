// import css from './LoginForm.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {logIn} from '../../redux/auth/operations.js';
import * as Yup from 'yup';
import { selectIsLoading } from '../../redux/auth/selectors.js';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function LoginForm() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    const handleSubmit = (values, {resetForm}) => {
        dispatch(logIn(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <label>Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                <label>Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isLoading}>Login</button>
            </Form>
        </Formik>
    );
}


