import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className={css.navbar}>
            <ul className={css.navList}>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/">Home</NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/contacts">Contacts</NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/login">Login</NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/register">Register</NavLink>
                </li>
            </ul>
        </nav>
    );
}
