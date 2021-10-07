import styles from "./FilmItem.module.css";

const FilmItem = (props) => {
    let items = [];
    for (let key in props.filmInfo) {
        if (key == "title" || key == "poster_path" || props.filmInfo[key] == 0) continue;
        let str = key[0].toUpperCase() + key.slice(1, key.length);
        items.push(<div className={styles.infoItem}><span className={styles.categoryName}>{str.split('_').join(" ")}: </span>{props.filmInfo[key]}</div>)
    }
    let rightWrapper = [];
    let leftWrapper = [];
    for (let i = 0; i < items.length; i++) {
        if (i < 5)
            rightWrapper.push(items[i]);
        else
            leftWrapper.push(items[i]);
    }
    return (
        <>
            <div className={styles.filmInf}>
                {props.filmInfo.poster_path && <div className={styles.imageWrapper}><img className={styles.filmPoster} src={`https://image.tmdb.org/t/p/original${props.filmInfo.poster_path}`} /></div>}
                <div className={styles.rightWrapper}>
                    <div className={styles.filmTitle}><h2>{props.filmInfo.title}</h2></div>
                    {rightWrapper}
                </div>
                <div className={styles.bottomWrapper}>
                    {leftWrapper}
                </div>
            </div>
        </>
    );
}

export default FilmItem;