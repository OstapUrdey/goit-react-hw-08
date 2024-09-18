import css from './ContactForm.module.css';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string().min(3).max(50).required("Required"),
});

export default function ContactForm () {

    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        dispatch(addContact(values));
        resetForm();
    };

    return (
        <Formik className={css.contactForm}
        initialValues={{name: "", number: ""}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        <Form>
            <label>
                Name
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div" />
            </label>
            <label>
                Number
                <Field name="number" type="text" />
                <ErrorMessage name="number" component="div" />
            </label>
            <button type="submit">Add contact</button>
        </Form>
    </Formik>
    )
};
