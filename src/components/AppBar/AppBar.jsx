import css from './AppBar.module.css';
import {useSelector} from 'react-redux';
import Navigation from '../Navigation/Navigation.jsx';
import selectIsLoggedIn from '../../redux/auth/selectors.js';
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';

export default function AppBar() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.appBar}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}