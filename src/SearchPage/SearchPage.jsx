import { useState } from "react";
import SearchForm from "./Form/SearchForm";
import styles from "./SearchPage.module.css";
import { NavLink } from "react-router-dom";

const SearchPage = (props) => {
    let [activeList, setClasses] = useState("listSearchDisabled");

    let filmList = [];

    if (props.films.length > 0) {
        filmList = props.films.map((item) => <NavLink key={item.id} to={`/films/${item.id}`} className={styles.filmItem}>{item.title}</NavLink>)
    } else {
        filmList = <div className={styles.nothingFound}>Nothing found</div>
    }

    const onFocus = () => { setClasses("filmList") };
    const onBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget))
            setClasses("listFilmDisabled");
    }
    const filmSearch = (event, value) => {
        props.getFilms(value);
    }

    return (
        <>
            <div className={styles.searchWrapper}>
                <SearchForm
                    activeList={activeList}
                    filmList={filmList}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    getFilms={filmSearch}
                />
            </div>
        </>

    )
}

export default SearchPage;