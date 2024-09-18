import css from './Contact.module.css';
import {useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact ({name, number, id}) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <li className={css.contactItem}>
            {name}: {number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}