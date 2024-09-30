// import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations.js';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <label>Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                <label>Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                <label>Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}
