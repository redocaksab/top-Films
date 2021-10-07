import axios from "axios";

const SEARCH_PROCESS = "SEARCH-PROCESS";
const CLEAR_STATE = "CLAER-STATE";

let initialState = {
    films: []
};


const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PROCESS: {
            return {
                ...state, films: action.films,
            }
        }
        case CLEAR_STATE: {
            return {
                films: []
            }
        }
        default:
            return state;

    }
}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

export const getFilms = (filmTitle) => {

    return (dispatch) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${filmTitle}&api_key=f06a2e114e4b3a01ae78dd727e1d0c6e&language=en-US`)
            .then(response => {
                if (isEmpty(response.data)) {
                    dispatch(clearState());
                } else {
               
                    let films = response.data.results.map((item) => ({ id: item.id, title: item.original_title }));

                    dispatch(setFilms(films));
                }

            })
    }
}

const setFilms = (films) => ({ type: SEARCH_PROCESS, films })
export const clearState = () => ({ type: CLEAR_STATE });


export default searchReducer;