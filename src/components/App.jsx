import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import { getTrendMuvies } from "shared/api";
import { useState, useEffect } from 'react';
import MovieDetails from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {

  const [moviesDay, setMoviesDay] = useState([]);

  const fetchTrendMuvies = async () => {
    try {
      const result = await getTrendMuvies();

      setMoviesDay(result)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrendMuvies();

  }, [])


  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<NavbarMenu />}>
          <Route index element={<Home moviesDay={moviesDay} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails moviesDay={moviesDay} />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Page doesn't exist</div>} />
        </Route>


      </Routes>
    </div>
  );
};
