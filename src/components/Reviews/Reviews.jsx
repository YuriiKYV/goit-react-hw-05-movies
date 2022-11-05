import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "shared/api";
import css from "../Reviews/Reviews.module.css"
import { nanoid } from 'nanoid';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const data = await getReviews(movieId);

                if (data.length === 0) {
                    throw new Error("We don't any reviews for this movie.");
                }
                setReviews(data);
            } catch (e) {
                setError(e);
            }
        }

        fetchReviews();

        return () => {
            setError(null);
        };
    }, [movieId]);

    if (!reviews) {
        return
    }

    return (
        <>
            {error && <p>{error.message}</p>}
            <ul className={css.reviewsList}>{reviews.map(({ author, content }) => (
                <li key={nanoid()}>
                    <h3>Author: {author}</h3>
                    <p> {content} : </p>
                </li>
            ))}</ul>
        </>
    )
}

export default Reviews;