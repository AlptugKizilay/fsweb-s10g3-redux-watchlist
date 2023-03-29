import {movies} from '../movies.js'
const inititalState = {
    movies: movies
}
const movieReducer = (state = inititalState ,action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default movieReducer;