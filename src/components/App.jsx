import {useEffect, lazy, Suspense} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import {fetchContacts} from '../redux/contacts/operations.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage.jsx'));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);

    return (
    <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
        </Routes>
        </Suspense>
    </div>
    );
};
