import {useSelector} from 'react-redux';
import selectIsLoggedIn from '../../src/redux/auth/selectors.js';
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({component, redirectTo}) {
    const isLoggenIn = useSelector(selectIsLoggedIn);

    return isLoggenIn ? component: <Navigate to={redirectTo} />
}