import css from './HomePage.module.css';

import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
    return (
        <div className={css.container}>
            <PageTitle>Welcome to the Contact Manager App</PageTitle>
            <p>This is your solution for managing contacts efficiently.</p>
        </div>
    );
}
