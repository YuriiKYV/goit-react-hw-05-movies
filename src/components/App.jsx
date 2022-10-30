import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

export const App = () => {
  return (
    <div className='app'>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
