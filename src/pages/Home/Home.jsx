import axios from "axios";

import { NavLink } from "react-router-dom";
import { nanoid } from 'nanoid';
import css from "../Home/Home.module.css";
import { Link, useLocation } from "react-router-dom";
import { getTrendMuvies } from "shared/api";


export default function Home({ moviesDay }) {
    const location = useLocation();

    // const [moviesDay, setMoviesDay] = useState([]);


    // // const fetchTrendMuvies = async () => {

    // //     await axios
    // //         .get(
    // //             `https://api.themoviedb.org/3/trending/movie/day?api_key=9c40587b7d16ffbdc73a57b7c7629b49&`
    // //         )
    // //         .then(({ data }) => {
    // //             setMoviesDay(() => {
    // //                 return [...data.results]
    // //             });
    // //         })
    // //         .catch(error => {
    // //             console.log(error);
    // //         })
    // // }

    // const fetchTrendMuvies = async () => {
    //     try {
    //         const result = await getTrendMuvies();
    //         console.log(result)
    //         setMoviesDay(result)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchTrendMuvies();

    // }, [])

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