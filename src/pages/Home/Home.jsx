import axios from "axios";
import { useState, useEffect } from 'react';

export default function Home() {

    const [moviesDay, setMoviesDay] = useState([]);


    const fetchTrendMuvies = async () => {

        await axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=9c40587b7d16ffbdc73a57b7c7629b49&`
            )
            .then(({ data }) => {
                console.log(data)
                setMoviesDay(() => {
                    return [...data.results]
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchTrendMuvies();

    }, [])
    console.log(moviesDay)

    return (
        <div>Trending today</div>
    )
}