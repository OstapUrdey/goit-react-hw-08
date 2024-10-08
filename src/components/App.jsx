import {useEffect, lazy, Suspense} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute.jsx';
import {selectIsRefreshing} from '../redux/auth/selectors.js';
import {refreshUser} from '../redux/auth/operations.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage.jsx'));

export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
    dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Please wait, updating user info...</b>
    ) : (
    <div className="container">
        <Layout />
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route 
                    path="/contacts" 
                    element={
                        <PrivateRoute component={<ContactsPage />} redirectTo="/" />
                    }
                    />
                <Route 
                    path="/login"  
                    element={
                        <RestrictedRoute component={<LoginPage />}  redirectTo="/" />
                    }
                    /> 
                <Route 
                    path="/register"
                    element={
                        <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
                    }
                />
            </Routes>
        </Suspense>
    </div>
    );
};
