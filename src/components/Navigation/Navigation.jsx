import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom'; 

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>
            <NavLink className={css.link} to="/contacts">
                Contacts
            </NavLink>
            <NavLink className={css.link} to="/login">
                Login
            </NavLink>
            <NavLink className={css.link} to="/register">
                Register
            </NavLink>
        </nav>
    )
}