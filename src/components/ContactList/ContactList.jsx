import css from './ContactList.module.css';

import Contact from '../Contact/Contact.jsx'
import {useSelector, useDispatch} from 'react-redux';
import {deleteContact, selectContacts} from '../../redux/contactsSlice.js';
import {selectNameFilter} from '../../redux/filtersSlice.js';

export default function ContactList() {

    const contacts = useSelector(selectContacts);
    const search = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.contactList}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} {...contact} deleteContact={handleDeleteContact} />
            ))}
        </ul>
    );
}