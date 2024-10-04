import css from './ContactsPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';

export default function ContactsPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    return (
        <div className={css.container}>
            <Toaster />
            <PageTitle>Phonebook</PageTitle>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
}