import css from './ContactsPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import { Toaster } from 'react-hot-toast';

export default function ContactsPage() {
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