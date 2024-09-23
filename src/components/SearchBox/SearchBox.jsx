import css from './SearchBox.module.css';

import {useSelector, useDispatch} from 'react-redux';
import {changeFilter, selectNameFilter} from '../../redux/filtersSlice.js';

export default function SearchBox() {

    const search = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }

    return (
        <div className={css.searchBox}>
            <input
                type='text'
                value={search}
                onChange={handleSearchChange}
            />
        </div>
    );
}