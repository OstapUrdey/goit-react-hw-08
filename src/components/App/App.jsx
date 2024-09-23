import css from './App.module.css'

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    

    return (
            <div className={css.app}>
                <h1>Phonebook</h1>
                <ContactForm />
                <SearchBox />
                <ContactList />
            </div>
    )
};