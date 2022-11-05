import { nanoid } from 'nanoid';
import css from "../Home/Home.module.css";
import { Link, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';

export default function Home({ moviesDay }) {
    const location = useLocation();

    const craeteItems = () => {
        if (moviesDay.length) {
            const elements = moviesDay.map(({ title, id }) =>
                <li className={css.homeItem} key={nanoid()}><Link state={{ from: location }} className={css.homeLink} to={`/movies/${id}`}>{title}</Link></li >
            )
            return (
                elements
            )
        }
    }
    const items = craeteItems();

    return (
        <div className={css.homeTitle}>Trending today
            <ul className={css.homeList}>{items}</ul>
        </div>
    )
}

Home.propTypes = {
    moviesDay: PropTypes.array.isRequired,
};