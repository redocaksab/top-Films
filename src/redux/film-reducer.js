import axios from "axios";

const SAVE_FILM_INFO = "SAVE-FILM-INFO";

let initialState = {
    filmInfo: {}
};


const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FILM_INFO:
            return {
                ...state, filmInfo: action.filmInfo,
            }
        default:
            return state;

    }
}

const setFilmInfo = (filmInfo) => ({ type: SAVE_FILM_INFO, filmInfo });

export const getFilmInfo = (filmId) => {
    return (dispatch) => {
        axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=f06a2e114e4b3a01ae78dd727e1d0c6e&language=en-US`).
            then(response => {
                let filmInfo = {
                    title: response.data.original_title,
                    status: response.data.status,
                    relese_date: response.data.release_date,
                    runtime: response.data.runtime,
                    original_language: response.data.original_language,
                    overview: response.data.overview,
                    tagline: response.data.tagline,
                    poster_path: response.data.poster_path,
                    budget: response.data.budget,
                    revenue: response.data.revenue,
                }
                let str = "";
                response.data.genres.forEach((item) => {
                    str += item.name + ", ";
                });
                filmInfo.genres = str.slice(0, str.length - 2);
                str = "";
                response.data.production_companies.forEach((item) => {
                    str += item.name + ", ";
                });
                filmInfo.production_companies = str.slice(0, str.length - 2);
                str = "";
                response.data.production_countries.forEach((item) => {
                    str += item.name + ", ";
                });
                filmInfo.production_countries = str.slice(0, str.length - 2);
                str = "";
                response.data.spoken_languages.forEach((item) => {
                    str += item.name + ", ";
                });
                filmInfo.spoken_languages = str.slice(0, str.length - 2);
                dispatch(setFilmInfo(filmInfo));

            })

    }
}

export default searchReducer;