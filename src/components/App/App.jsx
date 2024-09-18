import css from './App.module.css'

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

import {useSelector, useDispatch} from 'react-redux';
import {addContact, deleteContact, selectContacts} from '../../redux/contactsSlice.js';
import {changeFilter, selectNameFilter} from '../../redux/filtersSlice.js';

export default function App() {

  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSearchChange = (value) => {
    dispatch(changeFilter(value));
  }

    return (
            <div className={css.app}>
                <h1>Phonebook</h1>
                <ContactForm addContact={handleAddContact} />
                <SearchBox search={search} onSearch={handleSearchChange} />
                <ContactList contacts={filterContacts} deleteContact={handleDeleteContact}/>
            </div>
    )
};