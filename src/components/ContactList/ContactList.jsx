import css from './ContactList.module.css';

import Contact from '../Contact/Contact.jsx'
import {useSelector, useDispatch} from 'react-redux';
import {selectFilteredContacts} from '../../redux/contacts/selectors.js';
import { deleteContact } from '../../redux/contacts/operations.js';

export default function ContactList() {

    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <Contact key={contact.id} {...contact} deleteContact={handleDeleteContact} />
            ))}
        </ul>
    );
}