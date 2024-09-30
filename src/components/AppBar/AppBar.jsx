import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation.jsx';

export default function AppBar() {
    return (
        <header className={css.appBar}>
            <Navigation />
        </header>
    );
}