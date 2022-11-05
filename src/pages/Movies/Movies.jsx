import { useEffect, useState } from "react"
import SearchBox from "components/SearchBox/SearchBox.jsx";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "shared/api";
import css from "../Movies/Movies.module.css";
import { nanoid } from 'nanoid';
import { Link, useLocation } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";

    useEffect(() => {
        if (query === "") {
            return
        }
        getMovies(query);
    }, [searchParams])


    const onSearch = ({ search }) => {
        setSearchParams(search !== "" ? { query: search } : {});
        if (search === "") {
            return
        }
    }

    const getMovies = async (search) => {
        try {
            const result = await getMoviesByQuery(search);
            setMovies(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    const location = useLocation();

    const craeteItems = () => {
        if (movies.length) {
            const elements = movies.map(({ title, id }) =>
                <li className={css.moviesItem} key={nanoid()}><Link state={{ from: location }} className={css.moviesLink} to={`/movies/${id}`}>{title}</Link></li >
            )
            return (
                elements
            )
        }
    }
    const items = craeteItems();


    return (
        <div><SearchBox onSubmit={onSearch} />
            <ul>{items}</ul>
        </div>
    )
}