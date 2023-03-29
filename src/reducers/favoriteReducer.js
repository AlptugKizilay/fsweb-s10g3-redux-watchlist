import { act } from "react-dom/test-utils";
import { ADD_FAVORITE,REMOVE_FAVORITE } from "../actions/favoriteAction";

const inititalState = {
    favorites: [],
}
const favoriteReducer = (state = inititalState ,action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if(state.favorites.includes(action.payload)==false){
                return {
                        ...state,
                        favorites: [...state.favorites, action.payload],
                    }
            }    
        case REMOVE_FAVORITE:
            return {
                favorites: state.favorites.filter((item)=>{return item.id != action.payload}),
            }
        default:
            return state;
    }
}
export default favoriteReducer;