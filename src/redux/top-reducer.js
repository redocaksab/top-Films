import axios from "axios";

const SAVE_TOP = "SAVE-TOP";

let initialState = {
    top: []
};


const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TOP:
            return {
                ...state, top: action.top,
            }
        default:
            return state;

    }
}

export const getTop = () => {
    return (dispatch) => {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=f06a2e114e4b3a01ae78dd727e1d0c6e").
            then(response => {
                let top = response.data.results.map((item) => {
                    let topItem = {
                        poster: item.backdrop_path,
                        id: item.id
                    }
                    topItem.title = (item.original_title.length > 29) ? item.original_title.slice(0, 29) + "..." : item.original_title;
                    return topItem;
                });
                dispatch(saveTop(top));
            });
    }
}

const saveTop = (top) => ({ type: SAVE_TOP, top });

export default searchReducer;