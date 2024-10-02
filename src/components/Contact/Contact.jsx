import css from './Contact.module.css';
import {useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';

export default function Contact ({name, number, id}) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <li className={css.contactItem}>
            <p>{name}: {number}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}