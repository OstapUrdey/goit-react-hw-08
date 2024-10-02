import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import { logOut } from '../../redux/auth/operations.js';

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    return (
        <div className={css.container}>
            <p>Welcome, {user.name}</p>
            <button onClick={() => dispatch(logOut())} type="button">
                Logout
            </button>
        </div>
    )
}