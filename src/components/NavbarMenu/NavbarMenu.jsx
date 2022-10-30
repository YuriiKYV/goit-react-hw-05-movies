import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import css from "../NavbarMenu/NavbarMenu.module.css";

const getClassName = ({ isActive }) => {
    return isActive ? `${css.navItemLink} ${css.active}` : `${css.navItemLink}`;
}

export default function NavbarMenu() {


    return (
        <ul className={css.navList}>
            <li className={css.navItem} key={nanoid()}>
                <NavLink className={getClassName} to="/" end>Home</NavLink>
            </li>
            <li className={css.navItem} key={nanoid()}>
                <NavLink className={getClassName} to="/movies" end>Movies</NavLink>
            </li>
        </ul>
    )
}