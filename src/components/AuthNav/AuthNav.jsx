import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
    return (
        <nav className={css.navbar}>
            <ul className={css.navList}>
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