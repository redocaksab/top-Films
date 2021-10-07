import { Field, reduxForm } from "redux-form";
import styles from "./SearchForm.module.css";


const SearchForm = (props) => {
    return (
        <form className={styles.searchForm} onBlur={props.onBlur}>
            <div className={styles.formContent}>
                <Field
                    autocomplete="off"
                    placeholder="Enter the name of the film"
                    component="input"
                    name="search"
                    onFocus={props.onFocus}
                    onChange={props.getFilms}
                />
            </div>
            <div className={styles[props.activeList]}>{props.filmList}</div>
        </form>
    )
}

export default reduxForm({ form: "filmSearch" })(SearchForm);