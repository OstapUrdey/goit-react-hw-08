import css from './LoginPage.module.css';

import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

export default function LoginPage() {

    return (
        <div className={css.container}>
            <PageTitle>Log In</PageTitle>
            <LoginForm />
        </div>
    )
}