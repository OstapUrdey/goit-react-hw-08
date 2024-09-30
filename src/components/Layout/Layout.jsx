// import css from './Layout.module.css';
// import {Outlet, Link} from 'react-router-dom';
import AppBar from '../AppBar/AppBar.jsx'

export default function Layout() {
    // return(
    //     <div>
    //         <nav className={css.nav}>
    //             <ul>
    //                 <li><Link to="/">Home</Link></li>
    //                 <li><Link to="/contacts">Contacts</Link></li>
    //                 <li><Link to="login">Login</Link></li>
    //                 <li><Link to="/register">Register</Link></li>
    //             </ul>
    //         </nav>
    //             <Outlet />
    //     </div>
    // )

    return(
        <div>
            <AppBar />
        </div>
    )
}