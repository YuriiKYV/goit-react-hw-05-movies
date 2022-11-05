import { useState } from 'react';
import css from 'components/SearchBox/SearchBox.module.css';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';

export default function SearchBox({ onSubmit }) {

    const [search, setSearch] = useState('');
    const [searchField, setSearchField] = useState({
        lable: 'Searcg',
        name: 'search',
        required: true,
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setSearch(value)
        setSearchField((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ search });
    }

    return (
        <header className={css.SearchBox}>
            <form onSubmit={handleSubmit} className={css.SearchForm}>
                <button
                    onClick={handleSubmit}
                    className={css.SearchFormButton}
                    type="submit"
                >
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    onChange={handleChange}
                    value={search}
                    id={nanoid()}
                    className={css.SearchFormInput}
                    type="text"
                    placeholder="Search films"
                    {...searchField}
                />
            </form>
        </header>
    );
}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};