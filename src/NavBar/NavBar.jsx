import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.topMenu}>
            <ul className={styles.menuMain}>
                <li><NavLink  to="/search">Film search</NavLink></li>
                <li><NavLink  to="/top20">Top 20</NavLink></li>
            </ul>
        </nav>
    );
}


export default NavBar;