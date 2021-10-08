import { NavLink } from "react-router-dom";
import styles from "./Top20Page.module.css";


const Top20Page = (props) => {
    let top = props.top.map((item, index) => {
        return (
            <div className={styles.topCategory}>
                <NavLink to={`/films/${item.id}`} className={styles.poster}><img src={`https://image.tmdb.org/t/p/original${item.poster}`} /></NavLink>
                <div className={styles.filmName}><b>{index + 1}.</b> {item.title}</div>
            </div>
        )
    })
    return (
        <>
            <h1 className={styles.title}>20 popular films of this week</h1>
            <div className={styles.topCategoryWrapper}>
                {top}
            </div>
        </>
    )
}

export default Top20Page;