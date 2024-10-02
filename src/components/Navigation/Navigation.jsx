import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectIsLoggedIn from '../../redux/auth/selectors';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={css.navbar}>
            <ul className={css.navList}>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/">Home</NavLink>
                </li>
                {isLoggedIn && (
                    <li className={css.navItem}>
                        <NavLink className={css.navLink} to="/contacts">Contacts</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}
