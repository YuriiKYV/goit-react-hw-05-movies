import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "shared/api";
import css from "../Cast/Cast.module.css"
import { nanoid } from 'nanoid';
import noPhoto from "../Cast/noPhoto.png"

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getCast(movieId).then(setCast);
    }, [movieId])

    if (!cast) {
        return
    }

    console.log(cast);


    return (
        <ul className={css.castList}>{cast.map(({ profile_path, name, character }) => (
            <li key={nanoid()}>
                <img
                    src={profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : noPhoto}
                    alt={name}
                    width="120"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
            </li>
        ))}</ul>
    )
}