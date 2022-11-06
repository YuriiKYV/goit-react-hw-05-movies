import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, useLocation, NavLink, Outlet } from "react-router-dom";
import { getMuviesId } from 'shared/api';
import css from 'pages/MovieDetails/MovieDetails.module.css'
import noPoster from "pages/MovieDetails/noPoster.jpg"

const getClassName = ({ isActive }) => {
    return isActive ? `${css.castLink} ${css.active}` : `${css.castLink}`;
}

export default function MovieDetails() {
    const [state, setState] = useState(null);
    const location = useLocation();

    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const result = await getMuviesId(movieId);
                setState(result);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchMovie();
    }, [movieId])

    if (!state) {
        return
    }

    const { poster_path, title, vote_average, overview, genres, release_date } = state;

    return (
        <>
            <Link className={css.backLink} to={location.state?.from ?? '/'}>Go back</Link>
            <div className={css.movieWrapper}>
                <img className={css.movieImage}
                    src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : noPoster}
                    alt={title}
                    width="220"
                />
                <div className={css.movieDetails}>
                    <h2>{title} ({Number.parseInt(release_date)})</h2>
                    <p>User Score: {Math.round(vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres.map(genre => genre.name).join(', ')}</p>
                </div>
            </div>
            <div className={css.addInfoWrapp}>
                <p>Additional information</p>
                <ul className={css.addInfoList}>
                    <li><NavLink className={getClassName} to="cast" state={{ from: location.state?.from }}>Cast</NavLink></li>
                    <li><NavLink className={getClassName} to="reviews" state={{ from: location.state?.from }}>Reviews</NavLink></li>
                </ul>
            </div>
            <Suspense>
                <Outlet />
            </Suspense>

        </>
    )
}